import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminArticleEditor from '../../components/admin/AdminArticleEditor';
import AdminArticleList from '../../components/admin/AdminArticleList';
import {
  createAdminArticle,
  deleteAdminArticle,
  fetchAdminArticles,
  fetchAdminSession,
  fetchAdminStatus,
  logoutAdmin,
  updateAdminArticle,
} from '../../lib/newsApi';

function AdminDashboardPage() {
  const [authResolved, setAuthResolved] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [error, setError] = useState('');
  const [storageStatus, setStorageStatus] = useState(null);

  useEffect(() => {
    let active = true;

    fetchAdminSession()
      .then((session) => {
        if (active) {
          setAuthenticated(Boolean(session.authenticated));
        }
      })
      .finally(() => {
        if (active) {
          setAuthResolved(true);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!authenticated) {
      return undefined;
    }

    let active = true;
    setLoadingArticles(true);

    Promise.all([fetchAdminArticles(), fetchAdminStatus()])
      .then(([items, status]) => {
        if (active) {
          setArticles(items);
          setStorageStatus(status);
          setError('');
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message);
        }
      })
      .finally(() => {
        if (active) {
          setLoadingArticles(false);
        }
      });

    return () => {
      active = false;
    };
  }, [authenticated]);

  if (!authResolved) {
    return (
      <main className="page admin-page">
        <section className="section">
          <p className="admin-muted">Vérification de la session...</p>
        </section>
      </main>
    );
  }

  if (!authenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  async function handleSave(articlePayload) {
    setSaving(true);
    setError('');

    try {
      const article = articlePayload.id
        ? await updateAdminArticle(articlePayload.id, articlePayload)
        : await createAdminArticle(articlePayload);

      setArticles((current) => {
        const exists = current.some((item) => item.id === article.id);
        const nextArticles = exists
          ? current.map((item) => (item.id === article.id ? article : item))
          : [article, ...current];

        return nextArticles.sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
      });

      setSelectedArticle(article);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(article) {
    const confirmed = window.confirm(`Supprimer l’article "${article.title}" ?`);

    if (!confirmed) {
      return;
    }

    setDeletingId(article.id);
    setError('');

    try {
      await deleteAdminArticle(article.id);
      setArticles((current) => current.filter((item) => item.id !== article.id));

      if (selectedArticle?.id === article.id) {
        setSelectedArticle(null);
      }
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setDeletingId('');
    }
  }

  async function handleLogout() {
    await logoutAdmin();
    setAuthenticated(false);
  }

  return (
    <main className="page admin-page">
      <section className="section page-top admin-dashboard-hero">
        <div className="admin-dashboard-head">
          <div>
            <p className="section-tag">Administration</p>
            <h1>Back-office Actualités</h1>
            <p className="hero-text">
              Créez, modifiez, supprimez et publiez les articles visibles sur le site public.
            </p>
          </div>

          <button type="button" className="button button-ghost" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      </section>

      {storageStatus && !storageStatus.blobConfigured ? (
        <section className="section admin-storage-warning">
          <p className="admin-storage-warning-title">⚠ Stockage temporaire actif — les articles ne persistent pas</p>
          <p>
            La variable <strong>BLOB_READ_WRITE_TOKEN</strong> n'est pas configurée sur Vercel.
            Les articles publiés disparaissent entre chaque requête.
          </p>
          <p>
            <strong>Solution :</strong> Vercel Dashboard → Storage → ouvre ton Blob store →{' '}
            <strong>Connect to Project</strong> → sélectionne <em>koanda-group</em> → redéploie.
          </p>
        </section>
      ) : null}

      {error ? (
        <section className="section">
          <p className="form-feedback error">{error}</p>
        </section>
      ) : null}

      <section className="admin-dashboard-grid">
        <AdminArticleEditor
          article={selectedArticle}
          saving={saving}
          onCancel={() => setSelectedArticle(null)}
          onSave={handleSave}
        />

        <AdminArticleList
          articles={articles}
          loading={loadingArticles}
          deletingId={deletingId}
          onEdit={setSelectedArticle}
          onDelete={handleDelete}
        />
      </section>
    </main>
  );
}

export default AdminDashboardPage;
