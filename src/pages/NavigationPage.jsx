import { Link, useLocation } from 'react-router-dom';
import { groupInfo, navigation } from '../data/siteContent';

function NavigationPage() {
  const location = useLocation();
  const currentItem = navigation.find((item) => item.path === location.pathname);
  const title = currentItem?.label ?? 'Navigation';

  return (
    <main className="page">
      <section className="section page-top">
        <p className="section-tag">Navigation</p>
        <h1>{title}</h1>
        <p className="hero-lead">
          Cette section s’intègre dans une architecture éditoriale clarifiée, pensée pour donner une lecture plus
          institutionnelle et plus directe du groupe.
        </p>
        <p className="hero-text">
          L’objectif est de guider rapidement le visiteur vers les pages stratégiques du site: groupe, filiales,
          implantations, projets, partenaires et contact.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href={groupInfo.plaquetteUrl} target="_blank" rel="noreferrer">
            Ouvrir la présentation
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
