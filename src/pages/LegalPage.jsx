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
          <h3>Plaquette groupe</h3>
          <p>
            Le site peut relayer la plaquette de présentation 2025 ainsi que des supports médias ou corporate téléchargeables.
          </p>
        </article>
      </section>
    </main>
  );
}

export default LegalPage;
