import SectionHeading from '../components/SectionHeading';
import SubsidiaryCard from '../components/SubsidiaryCard';
import { subsidiaries } from '../data/siteContent';

const hydrocarbonSubsidiaries = subsidiaries.filter((item) =>
  ['amko-trading', 'eco-oil'].includes(item.slug),
);

const industrySubsidiaries = subsidiaries.filter((item) =>
  ['faso-energy', 'gcm-industries', 'tpb-sa'].includes(item.slug),
);

const logisticsSubsidiaries = subsidiaries.filter((item) =>
  ['sati', 'alt', 'gcm-immobilier', 'belchicken'].includes(item.slug),
);

function SubsidiariesPage() {
  return (
    <main className="page">
      <section className="section page-top" id="liste-filiales">
        <SectionHeading
          tag="Filiales"
          title="Une présentation centrale des entreprises du portefeuille."
          text="Chaque carte de filiale reprend un pays, un secteur, un résumé de 2 à 4 lignes et un bouton En savoir plus."
          split
        />
      </section>

      <section className="section" id="hydrocarbures">
        <SectionHeading
          tag="Hydrocarbures"
          title="Trading et distribution pétrolière."
          text="Un premier ensemble de filiales orientées vers le négoce et la distribution de produits pétroliers."
          split
        />

        <div className="subsidiary-grid">
          {hydrocarbonSubsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>
      </section>

      <section className="section section-soft" id="industrie">
        <SectionHeading
          tag="Industrie"
          title="Industrie, énergie et infrastructures."
          text="Des filiales positionnées sur l’acier, la cimenterie, le solaire et les travaux publics."
          split
        />

        <div className="subsidiary-grid">
          {industrySubsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>
      </section>

      <section className="section" id="logistique-immobilier">
        <SectionHeading
          tag="Logistique, immobilier et services"
          title="Transport, transit, immobilier et restauration."
          text="Un troisième bloc consacré aux activités de transport international, de logistique, de promotion immobilière et de restauration."
          split
        />

        <div className="subsidiary-grid">
          {logisticsSubsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SubsidiariesPage;
