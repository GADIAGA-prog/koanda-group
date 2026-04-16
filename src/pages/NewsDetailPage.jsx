import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPublishedArticle } from '../lib/newsApi';

function formatDate(value) {
  return new Date(value).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function NewsDetailPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    fetchPublishedArticle(slug)
      .then((item) => {
        if (active) {
          setArticle(item);
          setError('');
          setNotFound(false);
        }
      })
      .catch((requestError) => {
        if (!active) {
          return;
        }

        if (requestError.message.toLowerCase().includes('introuvable')) {
          setNotFound(true);
        } else {
          setError(requestError.message);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (notFound) {
    return <Navigate to="/actualites" replace />;
  }

  return (
    <main className="page">
      <section className="section subsidiary-hero-section">
        {loading ? <p className="admin-muted">Chargement de l’article...</p> : null}
        {error ? <p className="form-feedback error">{error}</p> : null}

        {article ? (
          <div className="news-detail-layout">
            <div className="subsidiary-detail-copy">
              <p className="section-tag">Actualité</p>
              <h1>{article.title}</h1>
              <p className="hero-lead">{article.excerpt}</p>
              <p><strong>Publié le :</strong> {formatDate(article.publishedAt)}</p>

              <div className="news-detail-content">
                {article.content.split(/\n\s*\n/).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="hero-actions">
                <Link className="button button-secondary" to="/actualites">
                  Retour aux actualités
                </Link>
              </div>
            </div>

            {article.coverImage ? (
              <div className="subsidiary-detail-media">
                <img src={article.coverImage} alt={article.title} />
              </div>
            ) : null}
          </div>
        ) : null}
      </section>

      {article?.images?.length ? (
        <section className="section section-soft">
          <div className="subsidiary-gallery-grid">
            {article.images.map((image) => (
              <article className="content-card subsidiary-gallery-card" key={image.id}>
                <img src={image.url} alt={image.name} />
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default NewsDetailPage;
