import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { contactItems, groupInfo, socialLinks } from '../data/siteContent';

function ContactPage() {
  return (
    <main className="page">
      <section className="section page-top">
        <SectionHeading
          tag="Contact"
          title="Entrons en contact"
          text="Pour toute demande d’information, de partenariat, de presse, de recrutement ou de collaboration, un contact unique est à votre écoute."
          split
        />
      </section>

      <section className="section">
        <div className="contact-layout">
          <div id="formulaire-contact">
            <ContactForm />
          </div>

          <div className="contact-side">
            <div id="coordonnees-contact">
            {contactItems.map((item) => (
              <article className="content-card contact-card-panel" key={item.title}>
                <p className="mini-text">{item.title}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
            </div>

            <article className="content-card contact-card-panel" id="localisation-contact">
              <p className="mini-text">Localisation</p>
              <h3>Siège du groupe</h3>
              <p>{groupInfo.address}</p>
              <a className="button button-secondary" href={groupInfo.mapsUrl} target="_blank" rel="noreferrer">
                Ouvrir Google Maps
              </a>
            </article>

            <article className="content-card contact-card-panel">
              <p className="mini-text">Réseaux sociaux</p>
              <h3>Présence digitale</h3>
              <div className="contact-social-list">
                {socialLinks.map((item) => (
                  <a key={item.label} className="info-pill" href={item.href} title={`${item.label} - lien à configurer`}>
                    {item.label}
                  </a>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
