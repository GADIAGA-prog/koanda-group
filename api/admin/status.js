import { requireAuth } from '../_lib/auth.js';
import { readArticles } from '../_lib/articles.js';
import { allowMethods, sendJson } from '../_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return allowMethods(res, ['GET']);
  }

  const user = requireAuth(req, res);
  if (!user) return undefined;

  const blobConfigured = Boolean(process.env.BLOB_READ_WRITE_TOKEN);

  try {
    const articles = await readArticles();
    return sendJson(res, 200, {
      storage: blobConfigured ? 'vercel-blob' : 'local-tmp',
      blobConfigured,
      articleCount: articles.length,
      publishedCount: articles.filter((a) => a.status === 'published').length,
    });
  } catch (err) {
    return sendJson(res, 200, {
      storage: blobConfigured ? 'vercel-blob' : 'local-tmp',
      blobConfigured,
      error: err.message,
    });
  }
}
