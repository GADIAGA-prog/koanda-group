import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import SubsidiaryCard from '../components/SubsidiaryCard';
import { featuredProjects, groupInfo, homeCarousel, newsHighlights, stats, subsidiaries } from '../data/siteContent';

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeCarousel.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = homeCarousel[activeSlide];
  const highlightedSubsidiaries = subsidiaries.slice(0, 6);

  const visualProjects = featuredProjects.map((item, index) => ({
    ...item,
    image: homeCarousel[index % homeCarousel.length].image,
  }));

  return (
    <main className="page">
      <section className="hero-section home-hero" id="accueil-overview">
        <div className="hero-copy">
          <p className="section-tag">Accueil</p>
          <h1>{groupInfo.heroTitle}</h1>
          <p className="hero-lead">{groupInfo.heroText}</p>
          <p className="hero-text">{groupInfo.objective}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={groupInfo.plaquetteUrl} target="_blank" rel="noreferrer">
              Consulter la plaquette
            </a>
            <Link className="button button-secondary" to="/filiales">
              Découvrir les filiales
            </Link>
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
            <img src={currentSlide.image} alt={currentSlide.title} />
            <div className="carousel-copy">
              <p className="mini-text">Défilement automatique</p>
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

      <section className="section" id="mot-pdg">
        <div className="pdg-layout">
          <div className="pdg-copy">
            <p className="mini-text">{groupInfo.pdgName}</p>
            <p className="mini-text">{groupInfo.pdgRole}</p>
            <h3>{groupInfo.pdgTitle}</h3>
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
          title="Un aperçu visuel des filiales du groupe."
          text="La page d’accueil met en avant quelques entités clés avant la découverte détaillée de l’ensemble du portefeuille."
          split
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
          tag="Actualités"
          title="Les temps forts du groupe mis en avant sur un format plus visuel."
          text="Une sélection éditoriale légère pour faire ressortir les projets, les développements et les chantiers stratégiques du groupe."
          split
        />

        <div className="news-highlight-grid">
          {newsHighlights.map((item) => (
            <article className="news-highlight-card" key={item.title}>
              <div className="news-highlight-image">
                <img src={item.image} alt={item.title} />
              </div>

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
          title="Des projets phares présentés avec plus de matière visuelle."
          text="Le site met en avant les grands chantiers du groupe dans l’énergie, le stockage pétrolier, l’hôtellerie et la distribution."
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
