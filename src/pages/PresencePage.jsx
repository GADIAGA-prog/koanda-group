import implantationsMap from '../assets/implantations-map.svg';
import SectionHeading from '../components/SectionHeading';
import { presenceItems } from '../data/siteContent';

const globeMarkers = [
  { title: 'Burkina Faso', subtitle: 'Base principale', x: 310, y: 248 },
  { title: 'Côte d’Ivoire', subtitle: 'Distribution régionale', x: 278, y: 266 },
  { title: 'Ghana', subtitle: 'Pôle projets', x: 289, y: 258 },
  { title: 'Suisse', subtitle: 'Base internationale', x: 330, y: 170 },
  { title: 'Dubaï', subtitle: 'Représentation AMKO', x: 400, y: 208 },
];

function PresenceMap() {
  return (
    <div className="presence-map-card">
      <svg
        className="presence-map"
        viewBox="0 0 760 520"
        role="img"
        aria-labelledby="presence-globe-title presence-globe-desc"
      >
        <title id="presence-globe-title">Globe terrestre des implantations de Koanda Group</title>
        <desc id="presence-globe-desc">
          Globe mettant en évidence les implantations du groupe en Afrique de l’Ouest, en Suisse et à Dubaï.
        </desc>

        <defs>
          <radialGradient id="presence-water" cx="34%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#f7fffb" />
            <stop offset="48%" stopColor="#dcefe2" />
            <stop offset="100%" stopColor="#c8e3d1" />
          </radialGradient>
          <radialGradient id="presence-atmosphere" cx="50%" cy="45%" r="58%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(79,142,101,0.26)" />
          </radialGradient>
          <linearGradient id="presence-link" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(29,106,67,0.15)" />
            <stop offset="100%" stopColor="rgba(29,106,67,0.62)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="760" height="520" rx="30" fill="#f8fcf8" />
        <circle className="presence-globe-water" cx="294" cy="250" r="178" fill="url(#presence-water)" />
        <circle cx="294" cy="250" r="178" fill="url(#presence-atmosphere)" />

        <ellipse className="presence-globe-ring" cx="294" cy="250" rx="178" ry="178" />
        <ellipse className="presence-globe-ring" cx="294" cy="250" rx="138" ry="178" />
        <ellipse className="presence-globe-ring" cx="294" cy="250" rx="88" ry="178" />
        <ellipse className="presence-globe-ring" cx="294" cy="250" rx="38" ry="178" />
        <ellipse className="presence-globe-ring" cx="294" cy="250" rx="178" ry="148" />
        <ellipse className="presence-globe-ring" cx="294" cy="250" rx="178" ry="104" />
        <ellipse className="presence-globe-ring" cx="294" cy="250" rx="178" ry="56" />

        <path
          className="presence-globe-land"
          d="M226 154c14-14 38-20 64-16 16 3 24 12 33 23 7 8 16 13 31 18 12 4 19 11 20 21 2 13-10 25-25 31-12 4-20 12-22 23-4 20-21 38-44 47-27 12-53 11-68-6-14-17-18-48-10-72 4-13 5-24 0-37-7-17-2-26 21-32Z"
        />
        <path
          className="presence-globe-land"
          d="M326 189c15-4 30-2 44 9 8 6 14 16 25 22 18 10 29 25 28 41-1 16-15 31-36 39-15 6-25 15-34 29-13 20-31 29-49 24-18-5-28-26-26-49 1-14 8-27 18-37 10-10 15-21 16-34 1-23 2-37 14-44Z"
        />
        <path
          className="presence-globe-land"
          d="M212 242c10 4 17 12 21 23 5 15 3 29-6 41-7 10-10 20-8 31 2 12-3 22-13 26-13 6-30-2-42-18-14-19-18-44-8-58 6-9 9-18 10-29 2-18 19-25 46-16Z"
        />
        <path
          className="presence-globe-land"
          d="M355 124c12-6 29-5 42 1 10 5 13 14 10 24-3 11-10 21-19 30-10 9-13 20-12 30 1 10-6 17-17 19-12 1-24-6-30-18-7-14-5-28 4-39 7-9 10-17 9-25-1-10 3-18 13-22Z"
        />

        <path
          className="presence-map-link"
          d="M330 170C342 192 338 212 316 230"
          stroke="url(#presence-link)"
        />
        <path
          className="presence-map-link"
          d="M400 208C372 214 350 224 320 240"
          stroke="url(#presence-link)"
        />
        <path
          className="presence-map-link"
          d="M310 248C300 249 295 252 289 258"
          stroke="url(#presence-link)"
        />
        <path
          className="presence-map-link"
          d="M289 258C282 259 279 262 278 266"
          stroke="url(#presence-link)"
        />

        {globeMarkers.map((marker) => (
          <g key={marker.title}>
            <circle className="presence-map-pulse" cx={marker.x} cy={marker.y} r="16" />
            <circle className="presence-map-point" cx={marker.x} cy={marker.y} r="6" />
          </g>
        ))}

        <text className="presence-globe-title" x="468" y="126">
          Implantations
        </text>
        <text className="presence-globe-subtitle" x="468" y="156">
          Afrique de l’Ouest, Suisse et Dubaï
        </text>

        {globeMarkers.map((marker, index) => (
          <g key={`${marker.title}-label`} transform={`translate(468 ${204 + index * 56})`}>
            <circle className="presence-map-point" cx="0" cy="-5" r="6" />
            <text className="presence-map-label" x="18" y="0">
              {marker.title}
            </text>
            <text className="presence-globe-subtitle" x="18" y="24">
              {marker.subtitle}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function PresenceContinentalMap() {
  return (
    <div className="presence-map-card">
      <div className="presence-map-card-copy">
        <p className="mini-text">Carte continentale</p>
        <h3>Afrique de l’Ouest, Suisse et Dubaï</h3>
      </div>
      <img
        src={implantationsMap}
        className="presence-map presence-continental-map"
        alt="Carte continentale avec piquets sur la Suisse, Dubaï, le Burkina Faso, la Côte d’Ivoire, le Ghana, le Mali et le Niger"
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
          title="Une présence stratégique en Afrique de l’Ouest et à l’international"
          text="Koanda Group déploie ses activités entre l’Afrique de l’Ouest, la Suisse et une représentation à Dubaï, avec des points d’ancrage qui structurent le développement du groupe."
          split
        />

        <div className="presence-map-layout">
          <div className="presence-map-stack">
            <PresenceMap />
            <PresenceContinentalMap />
          </div>

          <article className="presence-map-copy">
            <p className="mini-text">Lecture du réseau</p>
            <h3>Un ancrage ouest-africain renforcé par des relais internationaux.</h3>
            <p>
              Le globe met en avant le cœur opérationnel du groupe au Burkina Faso, son extension
              régionale en Côte d’Ivoire et au Ghana, ainsi que ses appuis stratégiques en Suisse et
              à Dubaï.
            </p>
            <ul className="feature-list">
              <li>Burkina Faso : base principale des opérations du groupe</li>
              <li>Côte d’Ivoire et Ghana : développement régional et projets structurants</li>
              <li>Suisse et Dubaï : plateformes d’appui au rayonnement international</li>
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
