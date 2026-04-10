import SectionHeading from '../components/SectionHeading';
import { presenceItems } from '../data/siteContent';

function PresenceMap() {
  return (
    <div className="presence-map-card">
      <svg
        className="presence-map"
        viewBox="0 0 900 620"
        role="img"
        aria-labelledby="presence-map-title presence-map-desc"
      >
        <title id="presence-map-title">Cartographie des implantations de Koanda Group</title>
        <desc id="presence-map-desc">
          Carte stylisée mettant en évidence la Suisse, Dubaï, le Burkina Faso, la Côte d’Ivoire, le Ghana, le Mali et le Niger.
        </desc>

        <rect width="900" height="620" rx="28" fill="#f8fbf8" />

        <path
          className="presence-world-mass"
          d="M46 114c52-34 112-52 178-48 36 2 78 2 126 0 68-2 136 10 196 34 74 30 128 72 166 126 52 72 70 158 50 238-12 42-34 76-62 98H46Z"
        />
        <path
          className="presence-world-mass"
          d="M566 60c52-18 116-12 180 10 54 18 96 46 126 82 24 28 38 58 42 96H658c-16-40-42-76-92-116Z"
        />

        <path className="presence-coastline" d="M114 168c38-34 92-54 160-58" />
        <path className="presence-coastline" d="M236 104c108-18 230 2 326 52" />
        <path className="presence-coastline" d="M516 168c44 20 82 50 108 80" />
        <path className="presence-coastline" d="M694 116c56 18 100 52 132 100" />
        <path className="presence-coastline" d="M662 210c46 0 106 8 170 38" />
        <path className="presence-coastline" d="M178 470c124 8 254 0 372-38" />

        <path className="presence-country-highlight" d="M154 392l58 0 20 50-38 24-44-10-18-30z" />
        <path className="presence-country-highlight" d="M212 384l62-10 18 54-30 38-50-4-10-24z" />
        <path className="presence-country-highlight" d="M264 332l76-4 10 64-24 66-70 0-24-34z" />
        <path className="presence-country-highlight" d="M338 262l160-8 28 70-18 130-152 6-18-70 6-80z" />
        <path className="presence-country-highlight" d="M146 266l192-4-10 58-88 12-92 0-34-26z" />
        <path className="presence-country-highlight" d="M430 152l24-14 20 16-10 24-24 4-16-12z" />
        <path className="presence-country-highlight" d="M758 244l28-10 18 10-2 26-26 8-22-8z" />

        <circle className="presence-map-pulse" cx="230" cy="428" r="18" />
        <circle className="presence-map-pulse" cx="284" cy="416" r="18" />
        <circle className="presence-map-pulse" cx="304" cy="372" r="18" />
        <circle className="presence-map-pulse" cx="416" cy="332" r="18" />
        <circle className="presence-map-pulse" cx="466" cy="160" r="18" />
        <circle className="presence-map-pulse" cx="782" cy="256" r="18" />

        <circle className="presence-map-point" cx="230" cy="428" r="7" />
        <circle className="presence-map-point" cx="284" cy="416" r="7" />
        <circle className="presence-map-point" cx="304" cy="372" r="7" />
        <circle className="presence-map-point" cx="416" cy="332" r="7" />
        <circle className="presence-map-point" cx="466" cy="160" r="7" />
        <circle className="presence-map-point" cx="782" cy="256" r="7" />

        <text className="presence-map-label" x="202" y="474">Côte d’Ivoire</text>
        <text className="presence-map-label" x="238" y="500">Ghana</text>
        <text className="presence-map-label" x="248" y="404">Burkina Faso</text>
        <text className="presence-map-label" x="344" y="344">Niger</text>
        <text className="presence-map-label" x="146" y="340">Mali</text>
        <text className="presence-map-label" x="420" y="130">Suisse</text>
        <text className="presence-map-label" x="792" y="274">Dubaï</text>
      </svg>
    </div>
  );
}

function PresencePage() {
  return (
    <main className="page">
      <section className="section page-top" id="cartographie">
        <SectionHeading
          tag="Implantations"
          title="Une présence stratégique en Afrique de l’Ouest et à l’international"
          text="Koanda Group déploie ses activités entre l’Afrique de l’Ouest, la Suisse et une représentation à Dubaï, avec des points d’ancrage qui structurent le développement du groupe."
          split
        />

        <div className="presence-map-layout">
          <PresenceMap />
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
