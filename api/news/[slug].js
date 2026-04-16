import { getArticleBySlug } from '../_lib/articles.js';
import { allowMethods, sendJson } from '../_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return allowMethods(res, ['GET']);
  }

  const slug = req.query.slug;

  if (!slug) {
    return sendJson(res, 400, { error: 'Article introuvable' });
  }

  const article = await getArticleBySlug(slug);

  if (!article) {
    return sendJson(res, 404, { error: 'Article introuvable' });
  }

  return sendJson(res, 200, { article });
}
