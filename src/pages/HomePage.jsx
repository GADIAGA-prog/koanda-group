import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import SubsidiaryCard from '../components/SubsidiaryCard';
import {
  featuredProjects,
  groupInfo,
  homeCarousel,
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
        <SectionHeading
          tag={groupInfo.pdgTitle}
          title="Une parole institutionnelle pour ouvrir la lecture du groupe."
          text="Le bloc d’introduction présente le groupe dans un registre corporate et donne immédiatement un ancrage de direction."
          split
        />

        <div className="pdg-layout">
          <div className="pdg-copy">
            <p className="mini-text">{groupInfo.pdgName}</p>
            <h3>{groupInfo.pdgTitle}</h3>
            <p>{groupInfo.pdgMessage}</p>
          </div>

          <div className="pdg-visual-card">
            <img src={groupInfo.pdgPortrait} alt="Portrait institutionnel du groupe" />
            <p>{groupInfo.pdgVisualCaption}</p>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="apercu-filiales">
        <SectionHeading
          tag="Filiales"
          title="Un aperçu des filiales du groupe."
          text="Chaque carte reprend le secteur, le pays, un résumé synthétique et un accès vers une fiche plus détaillée."
          split
        />

        <div className="subsidiary-grid">
          {subsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>
      </section>

      <section className="section" id="projets-a-la-une">
        <SectionHeading
          tag="Projets à la une"
          title="Quelques projets phares mis en avant dans la plaquette."
          text="Le groupe déploie des projets structurants dans l’énergie, le stockage pétrolier, l’hôtellerie et la distribution."
          split
        />

        <div className="card-grid news-grid">
          {featuredProjects.map((item) => (
            <article className="content-card" key={item.title}>
              <p className="mini-text">Projet phare</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
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
