import { commitments, groupInfo, values } from '../data/siteContent';

function PolicyPage() {
  return (
    <main className="page">
      <section className="section page-top">
        <article className="content-card">
          <p className="mini-text">Politique générale</p>
          <h1>Politique générale du groupe</h1>
          <p>
            {groupInfo.legalName} inscrit son développement dans une logique de croissance durable, d’exigence
            opérationnelle et de création de valeur locale. Le groupe agit dans des secteurs structurants avec une
            volonté constante de bâtir des projets utiles, crédibles et pérennes.
          </p>
          <p>
            Cette politique générale s’appuie sur la diversification des activités, la qualité d’exécution, la
            recherche de partenariats solides et l’ancrage territorial des investissements portés par le groupe.
          </p>
        </article>

        <div className="card-grid">
          <article className="content-card">
            <p className="mini-text">Vision</p>
            <p>{groupInfo.vision}</p>
          </article>

          <article className="content-card">
            <p className="mini-text">Mission</p>
            <p>{groupInfo.mission}</p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="values-grid four-cols">
          {values.map((item) => (
            <article className="value-card" key={item.title}>
              <div className="value-icon">{item.title.slice(0, 1)}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card-grid">
          {commitments.map((item) => (
            <article className="content-card" key={item}>
              <p className="mini-text">Engagement</p>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PolicyPage;
