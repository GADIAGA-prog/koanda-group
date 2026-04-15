import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';
import { groupInfo, partners } from '../data/siteContent';

function PartnersPage() {
  const scrollingPartners = [...partners, ...partners];
  const getPartnerCardClassName = (title) =>
    `partner-logo-card is-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <main className="page">
      <section className="section page-top">
        <SectionHeading
          tag="Partenaires"
          title="Des partenaires solides au service de notre croissance"
          text="Koanda Group s’appuie sur des partenariats financiers, institutionnels et techniques pour accélérer la réalisation de ses projets et renforcer sa capacité d’investissement dans des secteurs structurants."
          split
        />
      </section>

      <section className="section section-soft">
        <div className="partners-marquee" id="logos-partenaires">
          <div className="partners-track">
            {scrollingPartners.map((partner, index) => (
              <article className={getPartnerCardClassName(partner.title)} key={`${partner.title}-${index}`}>
                <img src={partner.image} alt={`Logo ${partner.title}`} />
                <p className="mini-text">{partner.title}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="card-grid three-cols" id="categories-partenaires">
          {partners.map((partner) => (
            <article className="content-card" key={partner.title}>
              <p className="mini-text">{partner.category}</p>
              <h3>{partner.title}</h3>
            </article>
          ))}
        </div>

        <div className="section-actions" id="cta-partenaires">
          <Link className="button button-primary" to="/contact#formulaire-contact">
            Nous accompagner
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PartnersPage;
