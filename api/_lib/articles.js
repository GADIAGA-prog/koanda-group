import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { del, get, list, put } from '@vercel/blob';

const dataDirectory = path.join(process.cwd(), 'data');
const articlesFilePath = path.join(dataDirectory, 'articles.json');
const articleBlobPrefix = 'articles/';
const imageBlobPrefix = 'news-images/';

function hasBlobStore() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function buildArticlePathname(id) {
  return `${articleBlobPrefix}${id}.json`;
}

function parseDataUrl(value) {
  const match = /^data:(.+);base64,(.+)$/.exec(value || '');

  if (!match) {
    return null;
  }

  return {
    contentType: match[1],
    buffer: Buffer.from(match[2], 'base64'),
  };
}

async function ensureLocalStore() {
  await fs.mkdir(dataDirectory, { recursive: true });

  try {
    await fs.access(articlesFilePath);
  } catch {
    await fs.writeFile(articlesFilePath, '[]', 'utf8');
  }
}

async function readLocalArticles() {
  await ensureLocalStore();
  const raw = await fs.readFile(articlesFilePath, 'utf8');
  const articles = JSON.parse(raw);
  return Array.isArray(articles) ? articles : [];
}

async function writeLocalArticles(articles) {
  await ensureLocalStore();
  await fs.writeFile(articlesFilePath, JSON.stringify(articles, null, 2), 'utf8');
}

async function streamToText(stream) {
  const response = new Response(stream);
  return response.text();
}

async function readBlobArticles() {
  const { blobs } = await list({ prefix: articleBlobPrefix });
  const articles = [];

  for (const blob of blobs) {
    const result = await get(blob.pathname, { access: 'private', useCache: false });

    if (!result || result.statusCode !== 200 || !result.stream) {
      continue;
    }

    const raw = await streamToText(result.stream);
    articles.push(JSON.parse(raw));
  }

  return articles;
}

async function writeBlobArticle(article) {
  await put(buildArticlePathname(article.id), JSON.stringify(article, null, 2), {
    access: 'private',
    allowOverwrite: true,
    contentType: 'application/json',
    addRandomSuffix: false,
  });
}

async function deleteBlobArticleRecord(id) {
  await del(buildArticlePathname(id));
}

async function uploadBlobImages(images = [], articleId, existingImages = []) {
  const preservedImages = [];
  const uploadedImages = [];

  for (const image of images) {
    if (image?.pathname && image.url && !image.url.startsWith('data:image/')) {
      preservedImages.push(image);
      continue;
    }

    if (!image?.url || !image.url.startsWith('data:image/')) {
      continue;
    }

    const parsed = parseDataUrl(image.url);

    if (!parsed) {
      continue;
    }

    const extension = parsed.contentType.split('/')[1] || 'png';
    const result = await put(`${imageBlobPrefix}${articleId}/${image.id || crypto.randomUUID()}.${extension}`, parsed.buffer, {
      access: 'public',
      addRandomSuffix: true,
      contentType: parsed.contentType,
    });

    uploadedImages.push({
      id: image.id || crypto.randomUUID(),
      name: image.name || 'image',
      url: result.url,
      pathname: result.pathname,
    });
  }

  const nextImages = [...preservedImages, ...uploadedImages];
  const removedImages = existingImages.filter(
    (existingImage) => existingImage.pathname && !nextImages.some((image) => image.pathname === existingImage.pathname),
  );

  return { images: nextImages, removedImages };
}

async function deleteBlobImages(images = []) {
  const pathnames = images.map((image) => image.pathname).filter(Boolean);

  if (pathnames.length) {
    await del(pathnames);
  }
}

function normalizeLocalImages(images = []) {
  return images
    .filter((image) => image?.url)
    .map((image) => ({
      id: image.id || crypto.randomUUID(),
      name: image.name || 'image',
      url: image.url,
      pathname: image.pathname || '',
    }));
}

function normalizeArticleInput(input, existingArticle = null, normalizedImages = null) {
  const title = String(input.title || '').trim();
  const excerpt = String(input.excerpt || '').trim();
  const content = String(input.content || '').trim();
  const status = input.status === 'published' ? 'published' : 'draft';
  const images = normalizedImages ?? normalizeLocalImages(input.images);
  const coverImage = images.find((image) => image.url === input.coverImage)?.url || images[0]?.url || existingArticle?.coverImage || '';
  const now = new Date().toISOString();
  const slugBase = title || existingArticle?.title || 'article';
  const slug = slugify(slugBase) || existingArticle?.slug || crypto.randomUUID();

  return {
    id: existingArticle?.id || crypto.randomUUID(),
    slug,
    title,
    excerpt,
    content,
    coverImage,
    images,
    status,
    createdAt: existingArticle?.createdAt || now,
    updatedAt: now,
    publishedAt: status === 'published' ? existingArticle?.publishedAt || input.publishedAt || now : null,
  };
}

export async function readArticles() {
  if (hasBlobStore()) {
    return readBlobArticles();
  }

  return readLocalArticles();
}

export async function listAdminArticles() {
  const articles = await readArticles();
  return articles.sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
}

export async function listPublishedArticles() {
  const articles = await readArticles();
  return articles
    .filter((article) => article.status === 'published')
    .sort((left, right) => (right.publishedAt || '').localeCompare(left.publishedAt || ''));
}

export async function getArticleById(id) {
  const articles = await readArticles();
  return articles.find((article) => article.id === id) || null;
}

export async function getArticleBySlug(slug) {
  const articles = await readArticles();
  return articles.find((article) => article.slug === slug && article.status === 'published') || null;
}

export async function createArticle(input) {
  const articles = await readArticles();
  const draftArticle = normalizeArticleInput(input);
  draftArticle.slug = await ensureUniqueSlug(draftArticle.slug, articles, draftArticle.id);

  if (hasBlobStore()) {
    const { images } = await uploadBlobImages(input.images || [], draftArticle.id, []);
    const article = normalizeArticleInput(input, null, images);
    article.id = draftArticle.id;
    article.slug = draftArticle.slug;
    await writeBlobArticle(article);
    return article;
  }

  const article = normalizeArticleInput(input);
  article.slug = draftArticle.slug;
  articles.push(article);
  await writeLocalArticles(articles);
  return article;
}

export async function updateArticle(id, input) {
  const articles = await readArticles();
  const existingArticle = articles.find((article) => article.id === id);

  if (!existingArticle) {
    return null;
  }

  const nextSlug = await ensureUniqueSlug(slugify(input.title || existingArticle.title) || existingArticle.slug, articles, id);

  if (hasBlobStore()) {
    const { images, removedImages } = await uploadBlobImages(input.images || [], id, existingArticle.images || []);
    const article = normalizeArticleInput(input, existingArticle, images);
    article.slug = nextSlug;
    await writeBlobArticle(article);
    await deleteBlobImages(removedImages);
    return article;
  }

  const nextArticle = normalizeArticleInput(input, existingArticle, normalizeLocalImages(input.images || []));
  nextArticle.slug = nextSlug;
  const nextArticles = articles.map((article) => (article.id === id ? nextArticle : article));
  await writeLocalArticles(nextArticles);
  return nextArticle;
}

export async function deleteArticle(id) {
  const articles = await readArticles();
  const article = articles.find((entry) => entry.id === id);

  if (!article) {
    return false;
  }

  if (hasBlobStore()) {
    await deleteBlobArticleRecord(id);
    await deleteBlobImages(article.images || []);
    return true;
  }

  const nextArticles = articles.filter((entry) => entry.id !== id);
  await writeLocalArticles(nextArticles);
  return true;
}

async function ensureUniqueSlug(baseSlug, articles, currentId) {
  let slug = baseSlug;
  let suffix = 2;

  while (articles.some((article) => article.slug === slug && article.id !== currentId)) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  return slug;
}
