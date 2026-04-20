import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import SubsidiaryCard from '../components/SubsidiaryCard';
import {
  featuredProjects,
  groupInfo,
  homeCarousel,
  homeSectors,
  newsHighlights,
  partners,
  signaturePillars,
  stats,
  subsidiaries,
} from '../data/siteContent';

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeCarousel.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = homeCarousel[activeSlide];
  const currentSlideImage =
    typeof currentSlide.image === 'string' ? { src: currentSlide.image } : currentSlide.image;
  const featuredPartners = [...partners.slice(0, 6), ...partners.slice(0, 6)];
  const getPartnerCardClassName = (title) =>
    `partner-logo-card is-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const highlightedSubsidiaries = subsidiaries.filter((item) =>
    ['amko-trading', 'eco-oil', 'gcm-industries', 'faso-energy', 'belchicken'].includes(
      item.slug,
    ),
  );

  const visualProjects = featuredProjects.map((item, index) => ({
    ...item,
    image: item.image ?? homeCarousel[index % homeCarousel.length].image,
  }));

  return (
    <main className="page">
      <section className="hero-section home-hero" id="accueil-overview">
        <div className="hero-copy">
          <p className="section-tag">Koanda Group</p>
          <h1>{groupInfo.heroTitle}</h1>
          <p className="hero-lead">{groupInfo.heroText}</p>
          <p className="hero-text">{groupInfo.objective}</p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/koanda-group">
              Découvrir le groupe
            </Link>
            <Link className="button button-secondary" to="/filiales">
              Explorer les filiales
            </Link>
            <Link className="button button-ghost" to="/projets-et-realisations">
              Voir les projets
            </Link>
          </div>

          <div className="pill-row home-sector-pills" aria-label="Secteurs d'activité">
            {homeSectors.map((sector) => (
              <span className="info-pill" key={sector}>
                {sector}
              </span>
            ))}
          </div>

          <div className="hero-note-card">
            <p className="mini-text">Positionnement</p>
            <h3>Une signature fondée sur la vision, l’exécution et l’impact.</h3>
            <p>
              Koanda Group articule investissements, développement d’activités et déploiement
              opérationnel dans des secteurs essentiels à la transformation des marchés africains.
            </p>
          </div>

          <div className="hero-stats" id="chiffres-cles">
            {stats.map((item) => (
              <article className="metric-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-media">
          <article className="carousel-card">
            <img
              src={currentSlideImage.src}
              alt={currentSlide.title}
              style={{
                objectFit: currentSlideImage.fit ?? 'cover',
                objectPosition: currentSlideImage.position ?? 'center center',
                background: currentSlideImage.background ?? '#f6fbf6',
              }}
            />
            <div className="carousel-copy">
              <p className="mini-text">Temps fort</p>
              <h3>{currentSlide.title}</h3>
              <p>{currentSlide.text}</p>
            </div>
          </article>

          <div className="carousel-dots" aria-label="Navigation du carrousel">
            {homeCarousel.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`carousel-dot ${activeSlide === index ? 'is-active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={item.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft home-signature-section">
        <SectionHeading
          tag="Signature"
          title="Un groupe pensé pour construire, structurer et durer."
          text=""
          split
        />

        <div className="summary-grid">
          {signaturePillars.map((item) => (
            <article className="content-card summary-card premium-summary-card" key={item.title}>
              <p className="mini-text">Pilier</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="home-trust-strip">
          <div className="home-trust-copy">
            <p className="mini-text">Partenaires & institutions</p>
            <h3>Des relations solides au service de la croissance et de l’exécution.</h3>
          </div>

          <div className="partners-marquee" aria-label="Partenaires du groupe">
            <div className="partners-track">
              {featuredPartners.map((item, index) => (
                <article className={getPartnerCardClassName(item.title)} key={`${item.title}-${index}`}>
                  <img src={item.image} alt={`Logo ${item.title}`} />
                  <p className="mini-text">{item.title}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="mot-pdg">
        <div className="pdg-layout">
          <div className="pdg-copy">
            <p className="mini-text">{groupInfo.pdgTitle}</p>
            <h3>{groupInfo.pdgName}</h3>
            <p>{groupInfo.pdgMessage}</p>
          </div>

          <div className="pdg-visual-card">
            <img src={groupInfo.pdgPortrait} alt={`Portrait de ${groupInfo.pdgName}`} />
            <p>{groupInfo.pdgVisualCaption}</p>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="apercu-filiales">
        <SectionHeading
          tag="Filiales"
          title="Des filiales pensées comme des plateformes de croissance."
          text="Chaque entité répond à une logique claire de marché, d’exécution et de création de valeur. L’ensemble compose un portefeuille cohérent, lisible et crédible."
        />

        <div className="subsidiary-grid">
          {highlightedSubsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>

        <div className="section-actions home-section-actions">
          <Link className="button button-secondary" to="/filiales">
            Voir toutes les filiales
          </Link>
        </div>
      </section>

      <section className="section" id="actualites-groupe">
        <SectionHeading
          tag="Actualités & ressources"
          title="Les initiatives, avancées et publications qui rythment la trajectoire du groupe."
          text=""
          split
        />

        <div className="news-highlight-grid">
          {newsHighlights.map((item) => (
            <article className="news-highlight-card" key={item.title}>
              {typeof item.image === 'string' ? (
                <div className="news-highlight-image">
                  <img src={item.image} alt={item.title} />
                </div>
              ) : (
                <div className="news-highlight-image">
                  <img
                    src={item.image.src}
                    alt={item.image.alt ?? item.title}
                    style={{
                      objectFit: item.image.fit ?? 'cover',
                      objectPosition: item.image.position ?? 'center center',
                      background: item.image.background ?? '#f6fbf6',
                    }}
                  />
                </div>
              )}

              <div className="news-highlight-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className="button button-news" to={item.to}>
                  En savoir +
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projets-a-la-une">
        <SectionHeading
          tag="Projets à la une"
          title="Des projets emblématiques qui traduisent l’ambition du groupe."
          text="Énergie, stockage pétrolier, hôtellerie et distribution: ces projets donnent à voir la capacité de Koanda Group à structurer et porter des actifs d’envergure."
          split
        />

        <div className="card-grid news-grid">
          {visualProjects.map((item) => (
            <article className="content-card project-visual-card" key={item.title}>
              <div className="content-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="content-card-copy">
                <p className="mini-text">Projet phare</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark final-message">
        <p>{groupInfo.finalMessage}</p>
      </section>
    </main>
  );
}

export default HomePage;
