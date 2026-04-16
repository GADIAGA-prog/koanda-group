async function parseResponse(response) {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Une erreur est survenue');
  }

  return data;
}

export async function fetchPublishedArticles() {
  const response = await fetch('/api/news');
  const data = await parseResponse(response);
  return data.articles || [];
}

export async function fetchPublishedArticle(slug) {
  const response = await fetch(`/api/news/${slug}`);
  const data = await parseResponse(response);
  return data.article;
}

export async function loginAdmin(payload) {
  const response = await fetch('/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return parseResponse(response);
}

export async function logoutAdmin() {
  const response = await fetch('/api/admin/logout', {
    method: 'POST',
  });

  return parseResponse(response);
}

export async function fetchAdminSession() {
  const response = await fetch('/api/admin/session');

  if (response.status === 401) {
    return { authenticated: false };
  }

  return parseResponse(response);
}

export async function fetchAdminArticles() {
  const response = await fetch('/api/admin/articles');
  const data = await parseResponse(response);
  return data.articles || [];
}

export async function createAdminArticle(payload) {
  const response = await fetch('/api/admin/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await parseResponse(response);
  return data.article;
}

export async function updateAdminArticle(id, payload) {
  const response = await fetch(`/api/admin/articles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await parseResponse(response);
  return data.article;
}

export async function deleteAdminArticle(id) {
  const response = await fetch(`/api/admin/articles/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok && response.status !== 204) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Impossible de supprimer l’article');
  }
}
