import SectionHeading from '../components/SectionHeading';
import { certificateReferences } from '../data/siteContent';

function CertificatesPage() {
  return (
    <main className="page">
      <section className="section page-top">
        <SectionHeading
          tag="Certificats"
          title="Certificats et repères de conformité mis en avant par le groupe."
          text="Cette page rassemble les principales références citées dans le discours institutionnel de Koanda Group, avec un visuel dédié et une lecture synthétique de leur portée."
          split
        />
      </section>

      <section className="section section-soft">
        <div className="certificate-grid">
          {certificateReferences.map((item) => (
            <article className={`content-card certificate-card certificate-card-${item.theme}`} key={item.title}>
              <div className="certificate-visual">
                <p className="mini-text">{item.issuer}</p>
                {item.logo ? (
                  <div className="certificate-logo-shell">
                    <img className="certificate-logo" src={item.logo} alt={`Logo ${item.title}`} />
                  </div>
                ) : (
                  <div className="certificate-seal" aria-hidden="true">
                    {item.visualLabel}
                  </div>
                )}
                <h3>{item.title}</h3>
                <p>{item.headline}</p>
              </div>

              <div className="certificate-copy">
                <p>{item.description}</p>
                <p>{item.content}</p>
                <ul className="certificate-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CertificatesPage;
