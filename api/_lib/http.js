export function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

export function sendNoContent(res) {
  res.statusCode = 204;
  res.end();
}

export function allowMethods(res, methods) {
  res.setHeader('Allow', methods.join(', '));
  sendJson(res, 405, { error: 'Method not allowed' });
}

export async function readJsonBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (!chunks.length) {
    return {};
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  return JSON.parse(raw);
}

export function parseCookies(req) {
  const cookieHeader = req.headers.cookie;

  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(';').reduce((accumulator, pair) => {
    const [rawKey, ...rawValue] = pair.trim().split('=');
    accumulator[rawKey] = decodeURIComponent(rawValue.join('='));
    return accumulator;
  }, {});
}

export function serializeCookie(name, value, options = {}) {
  const segments = [`${name}=${encodeURIComponent(value)}`];

  if (options.httpOnly) segments.push('HttpOnly');
  if (options.secure) segments.push('Secure');
  if (options.sameSite) segments.push(`SameSite=${options.sameSite}`);
  if (options.path) segments.push(`Path=${options.path}`);
  if (typeof options.maxAge === 'number') segments.push(`Max-Age=${options.maxAge}`);

  return segments.join('; ');
}
