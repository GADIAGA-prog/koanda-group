import { createArticle, listAdminArticles } from '../../_lib/articles.js';
import { requireAuth } from '../../_lib/auth.js';
import { allowMethods, readJsonBody, sendJson } from '../../_lib/http.js';

export default async function handler(req, res) {
  const user = requireAuth(req, res);

  if (!user) {
    return undefined;
  }

  if (req.method === 'GET') {
    const articles = await listAdminArticles();
    return sendJson(res, 200, { articles });
  }

  if (req.method === 'POST') {
    try {
      const body = await readJsonBody(req);
      const article = await createArticle(body);
      return sendJson(res, 201, { article });
    } catch {
      return sendJson(res, 400, { error: 'Impossible de créer l’article' });
    }
  }

  return allowMethods(res, ['GET', 'POST']);
}
