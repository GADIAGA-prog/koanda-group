import FaqAccordion from '../components/FaqAccordion';
import SectionHeading from '../components/SectionHeading';
import { faqItems, groupInfo } from '../data/siteContent';
import { Link } from 'react-router-dom';

function FaqPage() {
  return (
    <main className="page">
      <section className="section page-top">
        <SectionHeading
          tag="FAQ"
          title="Questions fréquentes"
          text="Retrouvez ici les réponses aux questions les plus courantes sur Koanda Group, ses filiales, son fonctionnement et ses activités."
          split
        />
      </section>

      <section className="section">
        <div data-sr>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="content-card" style={{ maxWidth: 580, padding: '36px 40px' }} data-sr>
          <p className="mini-text">Vous n'avez pas trouvé votre réponse ?</p>
          <h3>Contactez notre équipe directement</h3>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
            Pour toute question spécifique, demande de partenariat ou information sur nos filiales,
            notre équipe est disponible et vous répondra dans les meilleurs délais.
          </p>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="button button-primary" to="/contact">
              Nous contacter
            </Link>
            <a
              className="button button-secondary"
              href={groupInfo.plaquetteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Télécharger la plaquette
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FaqPage;
