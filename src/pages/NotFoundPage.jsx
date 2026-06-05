import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="page">
      <section className="section page-top">
        <p className="section-tag">Erreur 404</p>
        <h1>Page introuvable</h1>
        <p className="hero-lead">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
