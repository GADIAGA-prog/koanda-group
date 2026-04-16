import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { fetchPublishedArticles } from '../lib/newsApi';

function formatDate(value) {
  return new Date(value).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    fetchPublishedArticles()
      .then((items) => {
        if (active) {
          setArticles(items);
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
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="page">
      <section className="section page-top">
        <SectionHeading
          tag="Actualités"
          title="Les actualités publiées du groupe"
          text=""
          split
        />
      </section>

      <section className="section section-soft">
        {loading ? <p className="admin-muted">Chargement des actualités...</p> : null}
        {error ? <p className="form-feedback error">{error}</p> : null}
        {!loading && !error && !articles.length ? (
          <p className="admin-muted">Aucun article publié pour le moment.</p>
        ) : null}

        <div className="news-public-grid">
          {articles.map((article) => (
            <article className="content-card news-public-card" key={article.id}>
              {article.coverImage ? (
                <div className="content-card-image">
                  <img src={article.coverImage} alt={article.title} />
                </div>
              ) : null}

              <div className="content-card-copy">
                <p className="mini-text">{formatDate(article.publishedAt)}</p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="card-actions">
                  <Link className="button button-secondary" to={`/actualites/${article.slug}`}>
                    Lire l’article
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default NewsPage;
