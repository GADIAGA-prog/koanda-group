import crypto from 'node:crypto';
import { getAdminCredentials, setSessionCookie } from '../_lib/auth.js';
import { allowMethods, readJsonBody, sendJson } from '../_lib/http.js';

function timingSafeStringEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  const len = Math.max(bufA.length, bufB.length);
  const paddedA = Buffer.alloc(len);
  const paddedB = Buffer.alloc(len);
  bufA.copy(paddedA);
  bufB.copy(paddedB);
  return crypto.timingSafeEqual(paddedA, paddedB);
}

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

    const usernameMatch = timingSafeStringEqual(submittedUsername, expectedUsername);
    const passwordMatch = timingSafeStringEqual(submittedPassword, expectedPassword);

    if (!usernameMatch || !passwordMatch) {
      return sendJson(res, 401, { error: 'Identifiants invalides' });
    }

    setSessionCookie(res, expectedUsername);
    return sendJson(res, 200, { ok: true, user: { username: expectedUsername } });
  } catch {
    return sendJson(res, 400, { error: 'Requête invalide' });
  }
}
