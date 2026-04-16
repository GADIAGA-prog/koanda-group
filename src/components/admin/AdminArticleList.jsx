function formatDate(value) {
  if (!value) {
    return 'Non publié';
  }

  return new Date(value).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function AdminArticleList({ articles, loading, deletingId, onEdit, onDelete }) {
  return (
    <section className="admin-card admin-list-card">
      <div className="admin-card-head">
        <div>
          <p className="mini-text">Articles</p>
          <h2>Gérer les actualités</h2>
        </div>
      </div>

      {loading ? <p className="admin-muted">Chargement des articles...</p> : null}

      {!loading && !articles.length ? (
        <p className="admin-muted">Aucun article pour le moment. Créez le premier depuis l’éditeur.</p>
      ) : null}

      <div className="admin-article-list">
        {articles.map((article) => (
          <article className="admin-article-item" key={article.id}>
            <div className="admin-article-copy">
              <p className="mini-text">{article.status === 'published' ? 'Publié' : 'Brouillon'}</p>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <p className="admin-meta">
                Dernière mise à jour: {formatDate(article.updatedAt)} | Publication: {formatDate(article.publishedAt)}
              </p>
            </div>

            <div className="card-actions">
              <button type="button" className="button button-secondary" onClick={() => onEdit(article)}>
                Modifier
              </button>
              <button
                type="button"
                className="button button-ghost"
                onClick={() => onDelete(article)}
                disabled={deletingId === article.id}
              >
                {deletingId === article.id ? 'Suppression...' : 'Supprimer'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdminArticleList;
