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
    </main>
  );
}

export default SubsidiaryPage;
