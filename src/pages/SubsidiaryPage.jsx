import { Link, Navigate, useParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { subsidiaries } from '../data/siteContent';

function SubsidiaryPage() {
  const { slug } = useParams();
  const subsidiary = subsidiaries.find((item) => item.slug === slug || item.aliases?.includes(slug));

  if (!subsidiary) {
    return <Navigate to="/filiales" replace />;
  }

  if (slug !== subsidiary.slug) {
    return <Navigate to={`/filiales/${subsidiary.slug}`} replace />;
  }

  const heroImage = typeof subsidiary.image === 'string' ? { src: subsidiary.image } : subsidiary.image;
  const gallery = subsidiary.gallery?.map((item) => (typeof item === 'string' ? { src: item } : item)) ?? [];

  return (
    <main className="page">
      <section className="section subsidiary-hero-section">
        <div className="subsidiary-detail-layout">
          <div className="subsidiary-detail-copy">
            <p className="section-tag">{subsidiary.sector}</p>
            <h1>{subsidiary.name}</h1>
            <p className="hero-lead">{subsidiary.summary}</p>
            <p><strong>Pays :</strong> {subsidiary.country}</p>
            <p>{subsidiary.description}</p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/filiales">
                Retour aux filiales
              </Link>
              {subsidiary.externalLink ? (
                <a className="button button-secondary" href={subsidiary.externalLink} target="_blank" rel="noreferrer">
                  {subsidiary.externalLabel ?? 'Lien externe'}
                </a>
              ) : null}
            </div>
          </div>

          <div className="subsidiary-detail-media">
            <img
              src={heroImage.src}
              alt={heroImage.alt ?? `Visuel ${subsidiary.name}`}
              style={{
                objectFit: heroImage.fit ?? 'cover',
                objectPosition: heroImage.position ?? 'center center',
                background: heroImage.background ?? '#f6fbf6',
              }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          tag="Informations clés"
          title="Des repères synthétiques sur la filiale."
          text="Chaque fiche filiale peut servir de point d’entrée avant l’ajout ultérieur de contenus plus détaillés."
          split
        />

        <div className="detail-facts-grid">
          {subsidiary.facts.map((fact) => (
            <article className="content-card" key={fact}>
              <p>{fact}</p>
            </article>
          ))}
        </div>
      </section>

      {subsidiary.focusCards?.length ? (
        <section className="section section-soft">
          <SectionHeading
            tag="Développement"
            title="Activités, implantations, résultats et ambition."
            text="Une lecture plus claire de la filiale, avec ses métiers, ses points d’ancrage et sa trajectoire d’expansion."
            split
          />

          <div className="subsidiary-focus-grid">
            {subsidiary.focusCards.map((item) => (
              <article className="content-card subsidiary-focus-card" key={item.title}>
                {item.image ? (
                  <div className="subsidiary-focus-media">
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
                ) : null}
                <div className="subsidiary-focus-copy">
                  <p className="mini-text">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {subsidiary.markets?.length ? (
        <section className="section section-soft">
          <SectionHeading
            tag="Détails par pays"
            title="Une lecture séparée des implantations Eco Oil."
            text="Les informations sont distinguées entre le Burkina Faso et la Côte d’Ivoire pour donner un aperçu plus clair des activités et des ambitions sur chaque marché."
            split
          />

          <div className="card-grid">
            {subsidiary.markets.map((market) => (
              <article className="content-card" key={market.title}>
                <p className="mini-text">{market.country}</p>
                <h3>{market.title}</h3>
                <p>{market.summary}</p>
                <p>{market.description}</p>
                <ul className="feature-list">
                  {market.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {gallery.length ? (
        <section className="section section-soft">
          <SectionHeading
            tag="Visuels"
            title="Des images directement liées à l’activité de la filiale."
            text="Cette galerie reprend les visuels fournis pour mieux illustrer les installations, les produits ou les réalisations de la filiale."
            split
          />

          <div className="subsidiary-gallery-grid">
            {gallery.map((image, index) => (
              <article className="content-card subsidiary-gallery-card" key={`${subsidiary.slug}-gallery-${index + 1}`}>
                <img
                  src={image.src}
                  alt={image.alt ?? `Visuel ${index + 1} de ${subsidiary.name}`}
                  style={{
                    objectFit: image.fit ?? 'cover',
                    objectPosition: image.position ?? 'center center',
                    background: image.background ?? '#f6fbf6',
                  }}
                />
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default SubsidiaryPage;
