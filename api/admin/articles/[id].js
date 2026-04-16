import { deleteArticle, updateArticle } from '../../_lib/articles.js';
import { requireAuth } from '../../_lib/auth.js';
import { allowMethods, readJsonBody, sendJson, sendNoContent } from '../../_lib/http.js';

export default async function handler(req, res) {
  const user = requireAuth(req, res);

  if (!user) {
    return undefined;
  }

  const id = req.query.id;

  if (!id) {
    return sendJson(res, 400, { error: 'Article introuvable' });
  }

  if (req.method === 'PUT') {
    try {
      const body = await readJsonBody(req);
      const article = await updateArticle(id, body);

      if (!article) {
        return sendJson(res, 404, { error: 'Article introuvable' });
      }

      return sendJson(res, 200, { article });
    } catch {
      return sendJson(res, 400, { error: 'Impossible de modifier l’article' });
    }
  }

  if (req.method === 'DELETE') {
    const deleted = await deleteArticle(id);

    if (!deleted) {
      return sendJson(res, 404, { error: 'Article introuvable' });
    }

    return sendNoContent(res);
  }

  return allowMethods(res, ['PUT', 'DELETE']);
}
