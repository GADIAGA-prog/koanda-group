import { Link, useLocation } from 'react-router-dom';
import { groupInfo, navigation } from '../data/siteContent';

function NavigationPage() {
  const location = useLocation();
  const currentItem = navigation.find((item) => item.path === location.pathname);
  const title = currentItem?.label ?? 'Navigation';

  return (
    <main className="page">
      <section className="section page-top">
        <p className="section-tag">Reconstruction</p>
        <h1>{title}</h1>
        <p className="hero-lead">
          Cette section a été remise à zéro. Nous repartons de la plaquette du groupe pour reconstruire le site avec
          une base plus fidèle et plus propre.
        </p>
        <p className="hero-text">
          Pour l’instant, nous conservons seulement la navigation générale, le logo du groupe et l’accès à la plaquette
          institutionnelle.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href={groupInfo.plaquetteUrl} target="_blank" rel="noreferrer">
            Ouvrir la plaquette
          </a>
          <Link className="button button-secondary" to="/">
            Revenir à l’accueil
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NavigationPage;
