import crypto from 'node:crypto';
import { parseCookies, serializeCookie } from './http.js';

const SESSION_COOKIE_NAME = 'koanda_admin_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 12;

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || 'koanda-local-dev-session-secret';
}

export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || 'commercial',
    password: process.env.ADMIN_PASSWORD || 'KoandaAdmin2026!',
  };
}

function signValue(value) {
  return crypto.createHmac('sha256', getSessionSecret()).update(value).digest('hex');
}

function encodeSession(payload) {
  const json = JSON.stringify(payload);
  const data = Buffer.from(json, 'utf8').toString('base64url');
  const signature = signValue(data);
  return `${data}.${signature}`;
}

function decodeSession(token) {
  const [data, signature] = token.split('.');

  if (!data || !signature) {
    return null;
  }

  const expectedSignature = signValue(data);

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return null;
  }

  try {
    const json = Buffer.from(data, 'base64url').toString('utf8');
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function createSession(username) {
  const expiresAt = Date.now() + SESSION_DURATION_SECONDS * 1000;
  return encodeSession({ username, expiresAt });
}

export function setSessionCookie(res, username) {
  const token = createSession(username);
  res.setHeader(
    'Set-Cookie',
    serializeCookie(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: SESSION_DURATION_SECONDS,
    }),
  );
}

export function clearSessionCookie(res) {
  res.setHeader(
    'Set-Cookie',
    serializeCookie(SESSION_COOKIE_NAME, '', {
      httpOnly: true,
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 0,
    }),
  );
}

export function getAuthenticatedUser(req) {
  const cookies = parseCookies(req);
  const token = cookies[SESSION_COOKIE_NAME];

  if (!token) {
    return null;
  }

  const session = decodeSession(token);

  if (!session || !session.username || !session.expiresAt || session.expiresAt < Date.now()) {
    return null;
  }

  return { username: session.username };
}

export function requireAuth(req, res) {
  const user = getAuthenticatedUser(req);

  if (!user) {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'Authentication required' }));
    return null;
  }

  return user;
}
