import implantationsMap from '../assets/koanda-implantations-map.png';
import implantationsOverview from '../assets/koanda-implantations-overview.png';
import SectionHeading from '../components/SectionHeading';

const presenceMetrics = [
  { value: '5', label: "pays dont le Burkina Faso, la Côte d'Ivoire, les Emirats Arabes Unis, la Suisse et le Ghana" },
  { value: '3', label: "espaces de lecture : Afrique de l'Ouest, Europe, Golfe" },
  { value: '5', label: "familles d'activités: energie, Industrie,Transport logistique, BTP, Hotellerie-restauration" },
];

const presenceActivities = [
  {
    title: 'Distribution de produits pétroliers',
    text: 'Négoce, importation, stockage et distribution de produits pétroliers.Développement de projets solaires et solutions énergétiques à vocation structurante.',
  },
  {
    title: 'Industrie',
    text: 'Industrialisation, cimenterie et métallurgie',
  },
  {
    title: 'BTP et infrastructures',
    text: 'Construction, travaux publics, aménagements et immobilier.',
  },
  {
    title: 'Logistique et transport',
    text: 'Transport terrestre, maritime, fluvial et services logistiques.',
  },
  {
    title: 'Services',
    text: 'Restauration et hotellerie',
  },
];

const presenceRegions = [
  {
    title: "Afrique de l'Ouest",
    subtitle: 'Ancrage opérationnel principal',
    text: "Le coeur de la cartographie se concentre sur l'Afrique de l'Ouest, avec un ancrage fort au Burkina Faso, un relais en Côte d'Ivoire et une ouverture visible sur le Ghana.",
    facts: [
      'Burkina Faso comme base de densité multi-activités',
      "Côte d'Ivoire comme relais régional de proximité",
      'Ghana comme point de projection logistique et énergétique',
    ],
  },
  {
    title: 'Europe',
    subtitle: 'Pilotage et relais institutionnel',
    text: "Genève apporte une lecture internationale au dispositif, avec un rôle de pilotage, de représentation et de structuration des activités tournées vers l'extérieur.",
    facts: [
      'Genève comme point de présence européen',
      'Lecture de représentation et de services',
      'Interface crédible pour les activités internationales',
    ],
  },
  {
    title: 'Golfe',
    subtitle: 'Ouverture commerciale complémentaire',
    text: "Dubaï prolonge la cartographie sur un axe international utile aux logiques de négoce, de mise en relation et d'appui aux opérations.",
    facts: [
      "Dubaï comme point d'appui international",
      'Fonction commerciale et relationnelle',
      'Relais complémentaire aux implantations africaines',
    ],
  },
];

const presenceCountries = [
  {
    title: 'Burkina Faso',
    zone: "Afrique de l'Ouest",
    role: 'Ancrage principal',
    text: "Le Burkina Faso concentre la lecture la plus dense de la cartographie. Il apparaît comme le coeur d'implantation du groupe, avec une combinaison forte entre hydrocarbures, énergie solaire, infrastructures et services.",
    activities: [
      'Distribution de produits pétroliers',
      'Énergie solaire',
      'BTP et infrastructures',
      'Services',
    ],
  },
  {
    title: "Côte d'Ivoire",
    zone: "Afrique de l'Ouest",
    role: 'Corridor régional',
    text: "La Côte d'Ivoire prolonge la présence ouest-africaine du groupe avec une lecture multi-métiers visible sur la carte, dans une logique de relais régional.",
    activities: [
      'Distribution de produits pétroliers',
      'BTP et infrastructures',
      'Logistique et transport',
      'Services',
    ],
  },
  {
    title: 'Ghana',
    zone: "Afrique de l'Ouest",
    role: 'Projection stratégique',
    text: "Le Ghana apparaît comme un point de projection à fort potentiel, notamment dans les logiques d'énergie, de logistique et d'ouverture régionale.",
    activities: [
      'Distribution de produits pétroliers',
      'Énergie solaire',
      'Logistique et transport',
      'Services',
    ],
  },
  {
    title: 'Genève',
    zone: 'Europe',
    role: 'Relais international',
    text: "Genève structure la lecture européenne du groupe. Elle porte une fonction de représentation, de services et d'ouverture internationale autour des activités de négoce et de coordination.",
    activities: ['Services', 'Distribution de produits pétroliers'],
  },
  {
    title: 'Dubaï',
    zone: 'Golfe',
    role: "Point d'appui commercial",
    text: "Dubaï complète le dispositif comme plateforme relationnelle et commerciale, en soutien aux activités internationales et aux dynamiques de flux.",
    activities: ['Services', 'Distribution de produits pétroliers', 'Logistique et transport'],
  },
];

function PresenceReferenceMap() {
  return (
    <div className="presence-map-card presence-reference-card">
      <div className="presence-map-card-copy">
        <p className="mini-text">Cartographie d'implantation</p>
        <h3>Une lecture géographique recentrée sur cinq points d'implantation clés.</h3>
      </div>
      <img
        src={implantationsMap}
        className="presence-map presence-continental-map presence-map-artwork"
        alt="Cartographie des implantations de Koanda Group recentrée sur Genève, Dubaï, le Burkina Faso, la Côte d'Ivoire et le Ghana"
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
          title=""
          text=""
          split
        />

        <div className="presence-map-layout">
          <PresenceReferenceMap />
        </div>

        <div className="presence-support-grid">
          <article className="presence-map-copy">
            <p className="mini-text">Lecture du dispositif</p>
            <h3>Le groupe articule sa présence autour d'un coeur ouest-africain et de deux relais internationaux.</h3>
            <p>
              La carte ne montre pas seulement des points géographiques. Elle décrit aussi une
              logique d'implantation par métiers : hydrocarbures, énergie solaire, BTP,
              logistique et services. Cette double lecture permet de comprendre à la fois où le
              groupe est présent et comment il s'y positionne.
            </p>
            <ul className="feature-list">
              <li>Burkina Faso comme ancrage principal et point de densité multi-activités</li>
              <li>Côte d'Ivoire et Ghana comme extensions ouest-africaines du dispositif</li>
              <li>Genève et Dubaï comme relais internationaux de représentation et d'appui</li>
            </ul>
          </article>

          <div className="presence-side-stack">
            <div className="hero-stats presence-metrics">
              {presenceMetrics.map((item) => (
                <article className="metric-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <article className="content-card presence-overview-visual">
              <p className="mini-text">Repère visuel</p>
              <img
                src={implantationsOverview}
                alt="Illustration complémentaire sur les implantations du groupe"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="poles-pays">
        <SectionHeading
          tag="Lecture régionale"
          title="Des implantations organisées entre ancrage opérationnel et relais internationaux."
          text="La lecture régionale fait ressortir le coeur de présence du groupe en Afrique de l'Ouest, ainsi que les points d'appui qui accompagnent son ouverture internationale."
          split
        />

        <div className="presence-region-grid">
          {presenceRegions.map((region) => (
            <article className="content-card presence-region-card" key={region.title}>
              <p className="mini-text">{region.subtitle}</p>
              <h3>{region.title}</h3>
              <p>{region.text}</p>
              <ul className="feature-list">
                {region.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="presence-activity-grid">
          {presenceActivities.map((activity) => (
            <article className="content-card presence-activity-card" key={activity.title}>
              <p className="mini-text">Activité visible sur la carte</p>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="lecture-pays">
        <SectionHeading
          tag="Pays et activités"
          title="Une lecture point par point des implantations visibles sur la cartographie."
          text="Chaque carte ci-dessous résume le rôle du point d'implantation dans le dispositif ainsi que les activités qui y apparaissent sur la cartographie."
          split
        />

        <div className="presence-country-grid">
          {presenceCountries.map((item) => (
            <article className="content-card presence-country-card" key={item.title}>
              <div className="presence-country-head">
                <p className="mini-text">{item.zone}</p>
                <span className="info-pill">{item.role}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="presence-activity-pills">
                {item.activities.map((activity) => (
                  <span className="sector-chip" key={`${item.title}-${activity}`}>
                    {activity}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PresencePage;
