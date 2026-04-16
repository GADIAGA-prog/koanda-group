import { listPublishedArticles } from '../_lib/articles.js';
import { allowMethods, sendJson } from '../_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return allowMethods(res, ['GET']);
  }

  const articles = await listPublishedArticles();
  return sendJson(res, 200, { articles });
}
