import SectionHeading from '../components/SectionHeading';
import { caseStudies, groupInfo, projectsInProgress, realizations } from '../data/siteContent';

function ProjectsPage() {
  return (
    <main className="page">
      <section className="section page-top">
        <SectionHeading
          tag="Projets et réalisations"
          title="Des projets structurants dans l’énergie, l’industrie, la logistique, l’immobilier et l’hôtellerie."
          text="Koanda Group pilote des projets structurants avec une volonté de répondre durablement aux besoins des marchés africains."
          split
        />

        <div className="about-layout">
          <div className="projects-visual-card">
            <img src={groupInfo.projectsImage} alt="Projets et réalisations du groupe" />
          </div>

          <div className="about-copy">
            <p>
              Cette page regroupe les projets phares, les investissements en cours et quelques réalisations visibles
              mises en avant dans la plaquette du groupe.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="projets-en-cours">
        <SectionHeading
          tag="Projets en cours"
          title="Les projets majeurs actuellement mis en avant."
          text="Les cartes ci-dessous reprennent les principaux projets annoncés par le groupe."
          split
        />

        <div className="timeline-grid">
          {projectsInProgress.map((project) => (
            <article className="timeline-card" key={project.title}>
              <span className="timeline-step">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft" id="realisations">
        <SectionHeading
          tag="Réalisations"
          title="Des réalisations visibles dans plusieurs secteurs."
          text="Le groupe valorise ses avancées industrielles, logistiques, pétrolières, immobilières et hôtelières."
          split
        />

        <div className="card-grid">
          {realizations.map((item) => (
            <article className="content-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="etudes-de-cas">
        <SectionHeading
          tag="Études de cas"
          title="Trois lectures transversales des projets du groupe."
          text="Ces mini études de cas permettent de mettre en avant la cohérence de la stratégie du groupe."
          split
        />

        <div className="card-grid three-cols">
          {caseStudies.map((item) => (
            <article className="content-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
