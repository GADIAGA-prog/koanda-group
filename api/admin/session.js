import { getAuthenticatedUser } from '../_lib/auth.js';
import { allowMethods, sendJson } from '../_lib/http.js';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return allowMethods(res, ['GET']);
  }

  const user = getAuthenticatedUser(req);

  if (!user) {
    return sendJson(res, 401, { authenticated: false });
  }

  return sendJson(res, 200, { authenticated: true, user });
}
