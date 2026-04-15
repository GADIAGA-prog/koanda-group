import { groupInfo } from '../data/siteContent';

function LegalPage() {
  return (
    <main className="page">
      <section className="section page-top legal-grid">
        <article className="content-card">
          <p className="mini-text">Éditeur</p>
          <h1>Mentions légales</h1>
          <p>{groupInfo.legalName}</p>
          <p>{groupInfo.postBox}</p>
          <p>{groupInfo.address}</p>
          <p>{groupInfo.phone}</p>
          <p>{groupInfo.contactEmail}</p>
        </article>

        <article className="content-card">
          <p className="mini-text">Confidentialité</p>
          <h3>Données et formulaires</h3>
          <p>
            Les formulaires de contact du site sont fournis à titre de prise de contact. Les données saisies servent uniquement à préparer un email vers les équipes de Koanda Group.
          </p>
        </article>

        <article className="content-card">
          <p className="mini-text">Documents</p>
          <h3>Ressources corporate</h3>
          <p>
            Le site peut mettre à disposition une présentation corporate, des publications institutionnelles et d’autres
            ressources destinées à présenter les activités, les implantations et les engagements du groupe.
          </p>
        </article>
      </section>
    </main>
  );
}

export default LegalPage;
