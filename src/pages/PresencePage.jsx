import SectionHeading from '../components/SectionHeading';
import { presenceItems } from '../data/siteContent';

const mapPoints = [
  { name: 'Burkina Faso', x: 255, y: 220, labelX: 280, labelY: 212 },
  { name: 'Côte d’Ivoire', x: 208, y: 278, labelX: 26, labelY: 274 },
  { name: 'Ghana', x: 278, y: 286, labelX: 305, labelY: 308 },
  { name: 'Suisse', x: 548, y: 118, labelX: 575, labelY: 110 },
];

function PresenceMap() {
  return (
    <div className="presence-map-card">
      <svg viewBox="0 0 760 460" className="presence-map" aria-label="Carte des implantations de Koanda Group">
        <defs>
          <linearGradient id="koandaMapBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fcf8" />
            <stop offset="100%" stopColor="#edf8ef" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="760" height="460" rx="28" fill="url(#koandaMapBg)" />
        <path
          d="M120 120C150 98 186 88 226 92C256 95 277 86 304 92C334 98 358 116 386 122C418 128 446 118 482 132C514 144 542 168 558 196C574 224 570 255 548 276C527 296 504 313 475 322C438 334 402 340 372 328C346 318 327 296 300 287C268 276 231 288 196 282C160 275 129 253 110 222C92 193 90 145 120 120Z"
          fill="#dff1e1"
        />
        <path
          d="M515 74C533 60 557 57 578 62C601 67 621 82 630 101C638 119 634 138 620 152C606 165 584 170 563 167C541 164 522 151 511 133C500 116 500 89 515 74Z"
          fill="#dff1e1"
        />

        <text x="150" y="78" className="presence-map-region">Afrique de l’Ouest</text>
        <text x="522" y="42" className="presence-map-region">Europe</text>

        <path d="M255 220L548 118" className="presence-map-link" />
        <path d="M208 278L255 220" className="presence-map-link" />
        <path d="M278 286L255 220" className="presence-map-link" />

        {mapPoints.map((point) => (
          <g key={point.name}>
            <circle cx={point.x} cy={point.y} r="15" className="presence-map-pulse" />
            <circle cx={point.x} cy={point.y} r="7" className="presence-map-point" />
            <text x={point.labelX} y={point.labelY} className="presence-map-label">
              {point.name}
            </text>
          </g>
        ))}
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
          text="Koanda Group développe ses activités et ses projets dans plusieurs pays stratégiques, notamment le Burkina Faso, la Côte d’Ivoire, le Ghana, la Suisse, ainsi que d’autres marchés d’Afrique de l’Ouest. Cette présence reflète la volonté du groupe de bâtir un réseau régional solide au service de secteurs essentiels."
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
