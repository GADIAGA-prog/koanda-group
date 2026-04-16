import { getAdminCredentials, setSessionCookie } from '../_lib/auth.js';
import { allowMethods, readJsonBody, sendJson } from '../_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return allowMethods(res, ['POST']);
  }

  try {
    const body = await readJsonBody(req);
    const { username, password } = getAdminCredentials();
    const submittedUsername = String(body.username || '').trim();
    const submittedPassword = String(body.password || '').trim();
    const expectedUsername = String(username || '').trim();
    const expectedPassword = String(password || '').trim();

    if (submittedUsername !== expectedUsername || submittedPassword !== expectedPassword) {
      return sendJson(res, 401, { error: 'Identifiants invalides' });
    }

    setSessionCookie(res, expectedUsername);
    return sendJson(res, 200, { ok: true, user: { username: expectedUsername } });
  } catch {
    return sendJson(res, 400, { error: 'Requête invalide' });
  }
}
