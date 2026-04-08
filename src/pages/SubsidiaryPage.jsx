import { Link, Navigate, useParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { subsidiaries } from '../data/siteContent';

function SubsidiaryPage() {
  const { slug } = useParams();
  const subsidiary = subsidiaries.find((item) => item.slug === slug);

  if (!subsidiary) {
    return <Navigate to="/filiales" replace />;
  }

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
            <img src={subsidiary.image} alt={`Visuel ${subsidiary.name}`} />
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

      {subsidiary.gallery?.length ? (
        <section className="section section-soft">
          <SectionHeading
            tag="Visuels"
            title="Des images directement liées à l’activité de la filiale."
            text="Cette galerie reprend les visuels fournis pour mieux illustrer les installations, les produits ou les réalisations de la filiale."
            split
          />

          <div className="subsidiary-gallery-grid">
            {subsidiary.gallery.map((image, index) => (
              <article className="content-card subsidiary-gallery-card" key={`${subsidiary.slug}-gallery-${index + 1}`}>
                <img src={image} alt={`Visuel ${index + 1} de ${subsidiary.name}`} />
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default SubsidiaryPage;
