import { getAdminCredentials, setSessionCookie } from '../_lib/auth.js';
import { allowMethods, readJsonBody, sendJson } from '../_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return allowMethods(res, ['POST']);
  }

  try {
    const body = await readJsonBody(req);
    const { username, password } = getAdminCredentials();

    if (body.username !== username || body.password !== password) {
      return sendJson(res, 401, { error: 'Identifiants invalides' });
    }

    setSessionCookie(res, username);
    return sendJson(res, 200, { ok: true, user: { username } });
  } catch {
    return sendJson(res, 400, { error: 'Requête invalide' });
  }
}
