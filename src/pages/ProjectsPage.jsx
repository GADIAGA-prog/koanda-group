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
              Plusieurs projets phares, des investissements en cours et plusieurs réalisations
              traduisent la vision de croissance, d’exécution et de transformation portée par Koanda Group.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="projets-en-cours">
        <SectionHeading
          tag="Projets en cours"
          title="Les projets majeurs actuellement portés par le groupe."
          text=""
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
          text=""
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
          text=""
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
