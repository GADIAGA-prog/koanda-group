import koandaCover from '../assets/koanda-plaquette-cover.png';
import koandaOverview from '../assets/koanda-plaquette-overview.png';
import koandaIndustries from '../assets/koanda-plaquette-industries.png';
import koandaProjects from '../assets/koanda-plaquette-projects.png';
import koandaContact from '../assets/koanda-plaquette-contact.png';
import koandaPdgPortrait from '../assets/koanda-pdg-portrait.png';
import donFasoMeebo from '../assets/don-faso-meebo.png';
import amkoBanner from '../assets/amko-trading-image.png';
import amkoLogo from '../assets/amko-trading-logo.png';
import belchickenLogo from '../assets/belchicken-logo.jpg';
import belchickenMenu from '../assets/belchicken-menu.png';
import cimentLogo from '../assets/ciment-logo.svg';
import constructionLogo from '../assets/construction-logo.svg';
import ecoOilLogo from '../assets/eco-oil-logo-main.png';
import ecoOilPylon from '../assets/eco-oil-1.png';
import ecoOilStation from '../assets/eco-oil-2.png';
import fasoEnergyLogo from '../assets/faso-energy-logo-raster.png';
import fasoEnergyPanels from '../assets/faso-energy-panels.png';
import fasoEnergyFactory from '../assets/faso-energy-factory.png';
import satiLogo from '../assets/sati-logo.png';
import gcmIndustries1 from '../assets/gcm-industries-1.png';
import gcmIndustries2 from '../assets/gcm-industries-2.png';
import gcmIndustries3 from '../assets/gcm-industries-3.png';
import gcmIndustries4 from '../assets/gcm-industries-4.png';
import gcmIndustries5 from '../assets/gcm-industries-5.png';
import gcmIndustriesLogo from '../assets/gcm-industries-logo.png';
import cimEtoile from '../assets/cim-etoile.png';
import gcmDirecteur from '../assets/gcm-directeur.png';
import gcmDon from '../assets/gcm-don.png';
import gcmEquipe from '../assets/gcm-equipe.png';
import gcmRapide from '../assets/gcm-rapide.png';
import gcmSolidarite from '../assets/gcm-solidarite.png';
import gcmUsine from '../assets/gcm-usine.png';
import partnerEcobank from '../assets/partner-ecobank.png';
import partnerCba from '../assets/partner-cba.png';
import partnerCorisBank from '../assets/partner-coris-bank.png';
import partnerCorisAssurances from '../assets/partner-coris-assurances.png';
import partnerCorisBourse from '../assets/partner-coris-bourse.svg';
import partnerMoovAfrica from '../assets/partner-moov-africa.png';
import partnerWbi from '../assets/partner-wbi.svg';
import partnerAneere from '../assets/partner-aneere.svg';
import partnerMinistereTransition from '../assets/partner-ministere-transition.svg';
import partner2ie from '../assets/partner-2ie.svg';
import partnerMondragonAssembly from '../assets/partner-mondragon-assembly.svg';
import partnerYingliSolar from '../assets/partner-yingli-solar.svg';

export const groupInfo = {
  name: 'Koanda Group',
  legalName: 'Groupe Koanda',
  heroTitle: 'Koanda Group, un groupe engagé pour un développement durable à travers des projets innovants et performants.',
  heroText:
    'Koanda Group est un conglomérat dynamique et visionnaire, présent dans plusieurs secteurs stratégiques : hydrocarbures, BTP, ciment, solaire, logistique, immobilier et hôtellerie. Le groupe déploie ses activités à travers plusieurs entreprises et projets structurants en Afrique de l’Ouest et à l’international.',
  objective: 'Donner immédiatement une image forte, institutionnelle et crédible du groupe.',
  finalMessage: 'Koanda Group investit dans des secteurs structurants pour accompagner la transformation économique de l’Afrique.',
  whoWeAre:
    'Koanda Group est un conglomérat actif dans plusieurs secteurs clés de l’économie, notamment le BTP, les hydrocarbures, le pétrole, la cimenterie, la fabrication de plaques solaires et la franchise de grandes firmes internationales. Fort d’un portefeuille de 17 projets et entreprises en activité, le groupe poursuit une stratégie ambitieuse de croissance, fondée sur l’innovation, la diversification et des partenariats solides.',
  vision:
    'Construire un groupe africain de référence, capable de porter des projets structurants, durables et à fort impact économique, social et industriel.',
  mission:
    'Développer des solutions performantes dans des secteurs stratégiques afin de soutenir la croissance, l’emploi, l’industrialisation et la modernisation des économies africaines.',
  pdgTitle: 'Mot du PDG',
  pdgName: 'El Adj Moussa KOANDA',
  pdgRole: 'PDG du groupe',
  pdgMessage:
    'Koanda Group est né d’une conviction forte : l’Afrique a besoin d’acteurs engagés, capables d’investir durablement dans des secteurs structurants et de transformer les opportunités en réalisations concrètes. À travers nos filiales, nos projets industriels, énergétiques, logistiques, immobiliers et hôteliers, nous bâtissons un groupe tourné vers la performance, l’emploi et l’impact local. Notre ambition est de faire de Koanda Group une référence de confiance, portée par l’exigence, l’innovation et des partenariats solides au service du développement économique du continent.',
  pdgVisualCaption: 'Portrait de El adj Moussa KOANDA, PDG du groupe.',
  coverImage: koandaCover,
  overviewImage: koandaOverview,
  industriesImage: koandaIndustries,
  projectsImage: koandaProjects,
  contactImage: koandaContact,
  pdgPortrait: koandaPdgPortrait,
  plaquetteUrl: '/documents/plaquette-koanda-group-2025.pdf',
  newsletterUrl: '/documents/bulletin-information-koanda-group.docx',
  contactEmail: 'contact@adholding.com',
  phone: '+226 70 20 97 18',
  address: '01 BP 4928 Ouagadougou 01, Zone industrielle de Kossodo, Ouagadougou, Burkina Faso',
  postBox: '01 BP 4928 Ouagadougou 01',
  mapsUrl: 'https://maps.google.com/?q=Zone+industrielle+de+Kossodo+Ouagadougou',
};

export const navigation = [
  {
    label: 'Accueil',
    path: '/',
    children: [
      { label: 'Mot du PDG', path: '/#mot-pdg' },
      { label: 'Chiffres clés', path: '/#chiffres-cles' },
      { label: 'Filiales', path: '/#apercu-filiales' },
      { label: 'Actualités', path: '/#actualites-groupe' },
      { label: 'Projets à la une', path: '/#projets-a-la-une' },
    ],
  },
  {
    label: 'Koanda Group',
    path: '/koanda-group',
    children: [
      { label: 'Qui sommes-nous ?', path: '/koanda-group#qui-sommes-nous' },
      { label: 'Gouvernance', path: '/koanda-group#gouvernance' },
      { label: 'Valeurs', path: '/koanda-group#valeurs' },
      { label: 'Engagements', path: '/koanda-group#engagements' },
    ],
  },
  {
    label: 'Filiales',
    path: '/filiales',
    children: [
      { label: 'Vue d’ensemble', path: '/filiales#liste-filiales' },
      { label: 'Hydrocarbures', path: '/filiales#hydrocarbures' },
      { label: 'Industrie', path: '/filiales#industrie' },
      { label: 'Logistique et immobilier', path: '/filiales#logistique-immobilier' },
    ],
  },
  {
    label: 'Projets et réalisations',
    path: '/projets-et-realisations',
    children: [
      { label: 'Projets en cours', path: '/projets-et-realisations#projets-en-cours' },
      { label: 'Réalisations', path: '/projets-et-realisations#realisations' },
      { label: 'Études de cas', path: '/projets-et-realisations#etudes-de-cas' },
    ],
  },
  {
    label: 'Implantations',
    path: '/implantations',
    children: [
      { label: 'Cartographie', path: '/implantations#cartographie' },
      { label: 'Pôles pays', path: '/implantations#poles-pays' },
    ],
  },
  {
    label: 'Partenaires',
    path: '/partenaires',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const socialLinks = [
  { label: 'LinkedIn', href: '#', platform: 'linkedin' },
  { label: 'Facebook', href: '#', platform: 'facebook' },
  { label: 'YouTube', href: '#', platform: 'youtube' },
];

export const homeCarousel = [
  {
    title: 'Couverture institutionnelle',
    text: 'La couverture de la plaquette pose le positionnement du groupe autour du développement durable et des projets performants.',
    image: koandaCover,
  },
  {
    title: 'Qui sommes-nous ?',
    text: 'Présentation générale du groupe et premier aperçu des activités stratégiques et des filiales majeures.',
    image: koandaOverview,
  },
  {
    title: 'Filiales industrielles et énergétiques',
    text: 'CIM Metal, Faso Energy, GCM Industries et TPB SA sont mis en avant dans les pages d’activités de la plaquette.',
    image: koandaIndustries,
  },
  {
    title: 'Projets structurants',
    text: 'La brochure présente les projets hôteliers, industriels et énergétiques portés par le groupe.',
    image: koandaProjects,
  },
];

export const stats = [
  { value: '17', label: 'projets et entreprises en activité' },
  { value: 'Plusieurs pays', label: 'présence dans plusieurs pays stratégiques' },
  { value: '7 secteurs', label: 'plusieurs secteurs clés couverts' },
  { value: 'Centaines', label: 'd’emplois directs et indirects générés' },
];

export const subsidiaries = [
  {
    slug: 'amko-trading',
    name: 'AMKO Trading SA',
    country: 'Suisse',
    sector: 'Trading de produits pétroliers',
    image: amkoBanner,
    logo: amkoLogo,
    watermarkLabel: 'AMKO',
    summary:
      'Trading de produits pétroliers en Afrique de l’Ouest. Basée à Genève, l’entreprise se positionne comme un acteur majeur du négoce pétrolier.',
    description:
      'AMKO Trading SA est présentée dans la plaquette comme un acteur majeur du trading de produits pétroliers en Afrique de l’Ouest, avec une base stratégique à Genève et une production annoncée de 600 000 tonnes de produits.',
    facts: ['Base stratégique : Genève, Suisse', 'Production annoncée : 600 000 tonnes de produits', 'Activité : négoce pétrolier régional'],
    gallery: [amkoBanner],
  },
  {
    slug: 'eco-oil',
    aliases: ['eco-oil-burkina', 'eco-oil-cote-divoire'],
    name: 'Eco Oil',
    country: 'Burkina Faso et Côte d’Ivoire',
    sector: 'Distribution de produits pétroliers',
    image: ecoOilPylon,
    logo: ecoOilLogo,
    watermarkLabel: 'Eco Oil',
    summary:
      'Eco Oil déploie ses activités de distribution de produits pétroliers au Burkina Faso et en Côte d’Ivoire, avec un réseau de stations-service déjà engagé et une logique d’expansion régionale.',
    description:
      'Eco Oil regroupe les activités de distribution pétrolière du groupe sur deux marchés prioritaires : le Burkina Faso et la Côte d’Ivoire. La filiale porte une stratégie de croissance du réseau de stations-service et de renforcement de la présence commerciale en Afrique de l’Ouest.',
    facts: [
      'Présence opérationnelle au Burkina Faso et en Côte d’Ivoire',
      'Déploiement de stations-service sur deux marchés régionaux',
      'Distribution pétrolière et expansion du réseau',
    ],
    markets: [
      {
        title: 'Eco Oil Burkina',
        country: 'Burkina Faso',
        summary:
          'Entreprise agréée pour la distribution de produits pétroliers au Burkina Faso, avec un réseau déjà déployé et un programme d’expansion.',
        description:
          'Eco Oil Burkina est présentée comme une entreprise agréée pour la distribution de produits pétroliers au Burkina Faso. Le réseau comprend déjà plusieurs stations-service et un important programme d’expansion en cours.',
        facts: [
          '32 stations-service réalisées',
          'Extension prévue vers 60 stations-service',
          'Distribution pétrolière au Burkina Faso',
        ],
        image: ecoOilPylon,
      },
      {
        title: 'Eco Oil Côte d’Ivoire',
        country: 'Côte d’Ivoire',
        summary:
          'Société spécialisée dans la distribution de produits pétroliers en Côte d’Ivoire, avec un projet de croissance du réseau de stations-service.',
        description:
          'La filiale ivoirienne est positionnée sur la distribution de produits pétroliers en Côte d’Ivoire, avec un projet d’extension de son réseau de stations-service tel qu’annoncé dans la plaquette.',
        facts: [
          '10 stations-service complétées',
          'Extension annoncée vers 25 stations-service',
          'Marché : Côte d’Ivoire',
        ],
        image: ecoOilStation,
      },
    ],
    gallery: [ecoOilPylon, ecoOilStation],
  },
  {
    slug: 'cim-metal',
    name: 'CIM Metal',
    country: 'Burkina Faso',
    sector: 'Acier et industrie',
    image: koandaIndustries,
    logo: cimentLogo,
    watermarkLabel: 'CIM Metal',
    summary:
      'Première usine d’acier au Burkina Faso, avec une capacité de production de 60 000 tonnes par an et un fort engagement qualité.',
    description:
      'CIM Metal est décrite comme la première usine d’acier du Burkina Faso. La plaquette met en avant sa capacité annuelle, son exigence de qualité et ses certifications environnementales et qualité.',
    facts: ['Capacité : 60 000 tonnes par an', 'Certifications ISO 9001:2015 et ISO 14001:2015', 'Positionnement : qualité et maîtrise environnementale'],
  },
  {
    slug: 'faso-energy',
    name: 'Faso Energy',
    country: 'Burkina Faso',
    sector: 'Fabrication de panneaux photovoltaïques',
    image: fasoEnergyFactory,
    logo: fasoEnergyLogo,
    watermarkLabel: 'Faso Energy',
    summary:
      'Entreprise spécialisée dans la fabrication de panneaux photovoltaïques, avec un positionnement industriel majeur en Afrique de l’Ouest.',
    description:
      'Faso Energy est présentée comme une entreprise spécialisée dans la fabrication de panneaux photovoltaïques, avec une capacité industrielle forte et un projet de centrale solaire structurant.',
    facts: ['Capacité annuelle annoncée : 30 MW', 'Projet de centrale solaire de 30 MW', 'Positionnement industriel en Afrique de l’Ouest'],
    gallery: [fasoEnergyFactory, fasoEnergyPanels],
  },
  {
    slug: 'gcm-industries',
    name: 'GCM Industries',
    country: 'Burkina Faso',
    sector: 'Cimenterie',
    image: gcmUsine,
    logo: gcmIndustriesLogo,
    watermarkLabel: 'GCM Industries',
    summary:
      'Acteur industriel de la cimenterie à Ouagadougou, avec une capacité importante de production et une ambition de montée en puissance.',
    description:
      'GCM Industries est présentée comme un acteur industriel de la cimenterie à Ouagadougou, avec des équipements modernes et une capacité de production élevée destinée à soutenir la demande locale et régionale.',
    facts: ['Capacité : 700 000 tonnes par an', 'Site industriel : 10 hectares à Ouagadougou', 'Ambition de montée en puissance'],
    gallery: [
      gcmUsine,
      gcmIndustries4,
      gcmIndustries5,
      gcmIndustries1,
      gcmIndustries2,
      gcmIndustries3,
      cimEtoile,
      gcmRapide,
      gcmDirecteur,
      gcmEquipe,
      gcmDon,
      gcmSolidarite,
    ],
  },
  {
    slug: 'tpb-sa',
    name: 'TPB SA',
    country: 'Burkina Faso, Mali, Côte d’Ivoire, Niger',
    sector: 'Travaux publics et bâtiments',
    image: koandaIndustries,
    logo: constructionLogo,
    watermarkLabel: 'TPB',
    summary:
      'Entreprise de travaux publics et bâtiments intervenant dans les routes, l’asphalte, l’éclairage, la tuyauterie et d’autres infrastructures.',
    description:
      'TPB SA est présentée comme une entreprise de travaux publics et bâtiments active dans plusieurs métiers d’infrastructure, au Burkina Faso et dans certains pays voisins.',
    facts: ['Travaux publics et routes', 'Éclairage, tuyauterie, asphalte', 'Présence au Burkina Faso et dans des pays voisins'],
  },
  {
    slug: 'sati',
    name: 'SATI',
    country: 'Burkina Faso et international',
    sector: 'Transport international',
    image: koandaProjects,
    logo: satiLogo,
    watermarkLabel: 'SATI',
    summary:
      'Société Africaine de Transport International spécialisée dans le transport d’hydrocarbures, d’agrégats et de biens de consommation.',
    description:
      'SATI est présentée comme un acteur du transport national et international, mobilisé sur les hydrocarbures, les agrégats et les biens de consommation.',
    facts: ['Transport d’hydrocarbures', 'Transport d’agrégats', 'Transport de biens de consommation'],
  },
  {
    slug: 'alt',
    name: 'ALT',
    country: 'Burkina Faso et corridors régionaux',
    sector: 'Transit et logistique',
    image: koandaProjects,
    watermarkLabel: 'ALT',
    summary:
      'Afrik Logistik et Transit, spécialisée dans le transport de produits vrac et les activités de transit.',
    description:
      'ALT est positionnée dans la logistique et le transit, avec un focus sur le transport de produits vrac et les activités de circulation de marchandises.',
    facts: ['Transport de produits vrac', 'Activités de transit', 'Chaîne logistique régionale'],
  },
  {
    slug: 'gcm-immobilier',
    name: 'GCM Immobilier',
    country: 'Burkina Faso',
    sector: 'Immobilier',
    image: koandaProjects,
    watermarkLabel: 'GCM Immo',
    summary:
      'Pôle immobilier engagé dans la promotion du logement, avec une ambition marquée sur les logements sociaux et différents actifs résidentiels.',
    description:
      'GCM Immobilier porte l’ambition immobilière du groupe autour du logement, de l’habitat résidentiel et des actifs destinés à répondre à des besoins croissants de marché.',
    facts: ['Logements sociaux', 'Actifs résidentiels', 'Promotion immobilière'],
  },
  {
    slug: 'belchicken',
    name: 'Belchicken',
    country: 'Burkina Faso',
    sector: 'Restauration rapide',
    image: belchickenMenu,
    logo: belchickenLogo,
    watermarkLabel: 'Belchicken',
    summary:
      'Enseigne de restauration rapide présente à Ouagadougou, Belchicken développe une offre gourmande autour de burgers, wraps, salades et menus à partager.',
    description:
      'Belchicken enrichit le portefeuille du groupe sur le segment de la restauration et des services au public. L’enseigne met en avant une carte de menus variés, une identité visuelle forte et une présence locale à Ouagadougou.',
    facts: ['Ville indiquée : Ouagadougou', 'Téléphone affiché : 05 23 48 48', 'Offre : burgers, wraps, salades et menus rapides'],
    externalLink: 'https://www.facebook.com/belchickenburkina',
    externalLabel: 'Page Facebook',
    gallery: [belchickenMenu],
  },
];

export const featuredProjects = [
  {
    title: 'Projet de centrale solaire de 30 MW',
    text: 'Projet énergétique majeur développé autour de Faso Energy dans une logique de transition énergétique.',
  },
  {
    title: 'Dépôt pétrolier AMKO Energy Ghana',
    text: 'Projet de stockage de produits pétroliers au port de Tema destiné à desservir plusieurs marchés de la sous-région.',
  },
  {
    title: 'Développement hôtelier à Ouagadougou, Bobo-Dioulasso et Accra',
    text: 'Ensemble de projets hôteliers structurants présentés dans la plaquette du groupe.',
  },
  {
    title: 'Expansion des stations-service Eco Oil',
    text: 'Déploiement progressif du réseau de distribution pétrolière au Burkina Faso et en Côte d’Ivoire.',
  },
];

export const newsHighlights = [
  {
    title: 'Koanda Group engagé sur le volet social avec Don Faso Meebo',
    text: 'Le groupe met aussi en avant ses actions solidaires à travers des initiatives de dons, de mobilisation terrain et d’accompagnement social.',
    image: donFasoMeebo,
    to: '/koanda-group#engagements',
  },
  {
    title: 'Transition énergétique : un projet solaire de 30 MW mis en avant',
    text: 'Faso Energy porte un projet structurant de centrale solaire destiné à accompagner durablement la capacité énergétique locale.',
    image: koandaIndustries,
    to: '/projets-et-realisations#projets-en-cours',
  },
  {
    title: 'AMKO Energy Ghana : un dépôt stratégique pour la sous-région',
    text: 'Le projet de stockage au port de Tema s’inscrit dans une logique régionale au service du Ghana, du Burkina Faso, du Mali et du Niger.',
    image: koandaOverview,
    to: '/projets-et-realisations#projets-en-cours',
  },
  {
    title: 'Développements hôteliers à Ouagadougou, Bobo-Dioulasso et Accra',
    text: 'La plaquette met en avant plusieurs projets hôteliers pensés pour répondre aux besoins des voyageurs d’affaires, des familles et du tourisme.',
    image: koandaProjects,
    to: '/projets-et-realisations#projets-en-cours',
  },
];

export const newsletterItems = [
  {
    title: 'Bulletin d’information du groupe',
    text: 'Retrouvez les informations institutionnelles, les temps forts du groupe, les projets suivis et les principales actualités dans un support téléchargeable.',
    href: groupInfo.newsletterUrl,
    fileLabel: 'Télécharger le bulletin',
  },
];

export const governanceItems = [
  {
    title: 'Mot du Président / Directeur Général',
    text: 'Une parole de direction qui exprime la vision du groupe, sa trajectoire de croissance et ses engagements.',
  },
  {
    title: 'Organigramme simplifié',
    text: 'Une lecture claire de la maison mère, des pôles de pilotage et des principales filiales opérationnelles.',
  },
  {
    title: 'Comité de direction',
    text: 'Un dispositif de pilotage dédié aux arbitrages, au suivi des activités et à l’exécution des projets structurants.',
  },
  {
    title: 'Gouvernance et conformité',
    text: 'Une approche centrée sur la maîtrise des opérations, la qualité, la conformité et les partenariats solides.',
  },
];

export const values = [
  {
    title: 'Innovation',
    text: 'Développer des solutions nouvelles dans l’énergie, l’industrie, la logistique et les services.',
  },
  {
    title: 'Excellence opérationnelle',
    text: 'Piloter les activités avec rigueur, qualité d’exécution et efficacité terrain.',
  },
  {
    title: 'Engagement durable',
    text: 'Investir dans des projets utiles, durables et créateurs de valeur sur le long terme.',
  },
  {
    title: 'Création de valeur locale',
    text: 'Accompagner l’emploi, l’industrialisation et la transformation économique des territoires.',
  },
];

export const commitments = [
  'Qualité',
  'Environnement',
  'Responsabilité sociale',
  'Impact local',
  'Certifications ISO 9001:2015 et ISO 14001:2015 pour CIM Metal',
];

export const projectsInProgress = [
  {
    title: 'AMKO Energy Ghana',
    category: 'Stockage pétrolier',
    text: 'Mise en place d’un dépôt de stockage de produits pétroliers au port de Tema, destiné à desservir le Ghana, le Burkina Faso, le Mali et le Niger.',
  },
  {
    title: 'Hôtel du Parc – Ziniaré',
    category: 'Hôtellerie',
    text: 'Complexe hôtelier et résidentiel avec villas, bungalows, restaurants, piscines, salle polyvalente et zone commerciale.',
  },
  {
    title: 'Summerset Hotel – Accra',
    category: 'Hôtellerie',
    text: 'Projet d’hôtel à Accra avec 120 chambres et plusieurs infrastructures de standing.',
  },
  {
    title: 'SIRA Hôtel Ouaga',
    category: 'Hôtellerie',
    text: 'Projet hôtelier moderne à Ouagadougou, pensé autour du confort, de la technologie et des normes environnementales.',
  },
  {
    title: 'SIRA Hôtel Bobo-Dioulasso',
    category: 'Hôtellerie',
    text: 'Complexe destiné aux familles, touristes et voyageurs d’affaires, avec hébergement et bungalows.',
  },
  {
    title: 'GCM Industries GH',
    category: 'Ciment',
    text: 'Projet d’usine de production de ciment au Ghana, avec vocation régionale.',
  },
  {
    title: 'Centrale solaire Faso Energy – 30 MW',
    category: 'Énergie',
    text: 'Projet énergétique majeur développé en partenariat public-privé avec l’État burkinabè.',
  },
];

export const realizations = [
  'Mise en service de structures industrielles',
  'Développement de réseaux de distribution pétrolière',
  'Déploiement d’activités logistiques',
  'Avancement de projets immobiliers et hôteliers',
];

export const caseStudies = [
  {
    title: 'Industrialisation locale avec GCM Industries',
    text: 'Illustration de la stratégie industrielle du groupe autour de la production de ciment et du renforcement des capacités locales.',
  },
  {
    title: 'Transition énergétique avec Faso Energy',
    text: 'Exemple de projet structurant dans le solaire, entre fabrication de panneaux photovoltaïques et production d’énergie.',
  },
  {
    title: 'Renforcement de la chaîne pétrolière avec Eco Oil / AMKO',
    text: 'Complémentarité entre négoce, distribution et stockage pour soutenir l’approvisionnement régional.',
  },
];


export const presenceItems = [
  {
    title: 'Burkina Faso',
    subtitle: 'Base principale du groupe',
    text: 'Le Burkina Faso constitue le cœur opérationnel de Koanda Group. C’est le principal pôle d’ancrage des activités industrielles, énergétiques, logistiques, immobilières et hôtelières du groupe.',
    highlights: [
      'Hydrocarbures et distribution pétrolière',
      'BTP, ciment, solaire, logistique et immobilier',
      'Projets hôteliers et développement industriel',
    ],
  },
  {
    title: 'Côte d’Ivoire',
    subtitle: 'Pôle de distribution régionale',
    text: 'La Côte d’Ivoire renforce la présence du groupe sur le corridor ouest-africain à travers la distribution de produits pétroliers et le déploiement progressif du réseau Eco Oil.',
    highlights: [
      'Distribution de produits pétroliers',
      'Déploiement de stations-service',
      'Positionnement sur un marché régional stratégique',
    ],
  },
  {
    title: 'Ghana',
    subtitle: 'Pôle projets et expansion',
    text: 'Le Ghana concentre plusieurs projets structurants du groupe, notamment dans le stockage pétrolier, l’hôtellerie et l’extension industrielle à vocation régionale.',
    highlights: [
      'Dépôt pétrolier AMKO Energy Ghana',
      'Projets hôteliers à Accra',
      'Extension industrielle avec GCM Industries GH',
    ],
  },
  {
    title: 'Suisse',
    subtitle: 'Base stratégique internationale',
    text: 'La Suisse sert de point d’appui international pour AMKO Trading SA. Cette implantation donne au groupe une ouverture plus large sur les opérations de négoce et les échanges à dimension internationale.',
    highlights: [
      'Base de AMKO Trading SA à Genève',
      'Pilotage des activités internationales',
      'Appui au positionnement du groupe hors Afrique de l’Ouest',
    ],
  },
  {
    title: 'Dubaï',
    subtitle: 'Point de représentation AMKO',
    text: 'Dubaï complète le dispositif international de AMKO Trading avec une représentation qui renforce les connexions commerciales, la veille marché et la projection régionale du groupe.',
    highlights: [
      'Représentation internationale de AMKO',
      'Relais commercial et stratégique',
      'Ouverture sur les flux énergétiques internationaux',
    ],
  },
];

export const partners = [
  { title: 'Ecobank', category: 'Partenaires financiers', image: partnerEcobank },
  { title: 'CBA', category: 'Partenaires financiers', image: partnerCba },
  { title: 'Coris Bank', category: 'Partenaires financiers', image: partnerCorisBank },
  { title: 'Coris Assurances', category: 'Partenaires techniques', image: partnerCorisAssurances },
  { title: 'Coris Bourse', category: 'Partenaires financiers', image: partnerCorisBourse },
  { title: 'Moov Africa', category: 'Partenaires stratégiques', image: partnerMoovAfrica },
  { title: 'WBI', category: 'Partenaires institutionnels', image: partnerWbi },
  { title: 'ANEERE', category: 'Partenaires institutionnels', image: partnerAneere },
  {
    title: 'Ministère de la Transition énergétique, des Mines et des Carrières',
    category: 'Partenaires institutionnels',
    image: partnerMinistereTransition,
  },
  { title: '2IE', category: 'Partenaires techniques', image: partner2ie },
  { title: 'Mondragon Assembly', category: 'Partenaires techniques', image: partnerMondragonAssembly },
  { title: 'Yingli Solar', category: 'Partenaires stratégiques', image: partnerYingliSolar },
];

export const contactItems = [
  {
    title: 'Email',
    text: 'contact@adholding.com',
  },
  {
    title: 'Téléphone',
    text: '+226 70 20 97 18',
  },
  {
    title: 'Adresse',
    text: '01 BP 4928 Ouagadougou 01, Zone industrielle de Kossodo, Ouagadougou, Burkina Faso',
  },
];

export const mediaKit = [
  'Plaquette de présentation du groupe',
  'Visuels institutionnels issus de la plaquette',
  'Éléments de contact et d’actionnariat',
];

export const footerLinks = [
  { label: 'Mentions légales', path: '/mentions-legales' },
  { label: 'Politique générale du groupe', path: '/politique-generale' },
  { label: 'Plaquette groupe', path: groupInfo.plaquetteUrl },
];
