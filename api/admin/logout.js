import { clearSessionCookie, requireAuth } from '../_lib/auth.js';
import { allowMethods, sendJson } from '../_lib/http.js';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return allowMethods(res, ['POST']);
  }

  const user = requireAuth(req, res);

  if (!user) {
    return undefined;
  }

  clearSessionCookie(res);
  return sendJson(res, 200, { ok: true });
}
