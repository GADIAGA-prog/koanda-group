import implantationsMap from '../assets/implantations-map.svg';
import SectionHeading from '../components/SectionHeading';
import { presenceItems } from '../data/siteContent';

function PresenceReferenceMap() {
  return (
    <div className="presence-map-card presence-reference-card">
      <div className="presence-map-card-copy">
        <p className="mini-text">Cartographie des implantations</p>
        <h3>Afrique de l'Ouest, Suisse et Dubai</h3>
      </div>
      <img
        src={implantationsMap}
        className="presence-map presence-continental-map"
        alt="Carte des implantations de Koanda Group avec la Suisse, Dubai, le Mali, le Niger, le Burkina Faso, la Côte d'Ivoire et le Ghana"
      />
    </div>
  );
}

function PresencePage() {
  return (
    <main className="page">
      <section className="section page-top" id="cartographie">
        <SectionHeading
          tag="Implantations"
          title="Une présence stratégique en Afrique de l'Ouest et à l'international"
          text="Koanda Group déploie ses activités entre l'Afrique de l'Ouest, la Suisse et une représentation à Dubai, avec des points d'ancrage qui structurent le développement du groupe."
          split
        />

        <div className="presence-map-layout">
          <PresenceReferenceMap />

          <article className="presence-map-copy">
            <p className="mini-text">Lecture du réseau</p>
            <h3>Une cartographie plus directe, centrée sur les pays d'implantation.</h3>
            <p>
              La carte reprend une lecture continentale claire, avec les pays d'implantation
              directement mis en évidence pour retrouver l'esprit de votre référence visuelle.
            </p>
            <ul className="feature-list">
              <li>Burkina Faso : base principale des opérations du groupe</li>
              <li>Côte d'Ivoire, Ghana, Mali et Niger : maillage régional en Afrique de l'Ouest</li>
              <li>Suisse et Dubai : relais internationaux du groupe</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-soft" id="poles-pays">
        <SectionHeading
          tag="Pôles pays"
          title="Des implantations développées selon le rôle de chaque marché."
          text="Chaque pays joue une fonction spécifique dans le déploiement du groupe, entre base opérationnelle, corridor de distribution, plateforme de projets et appui international."
          split
        />

        <div className="card-grid">
          {presenceItems.map((item) => (
            <article className="content-card" key={item.title}>
              <p className="mini-text">{item.subtitle}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul className="feature-list">
                {item.highlights.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PresencePage;
