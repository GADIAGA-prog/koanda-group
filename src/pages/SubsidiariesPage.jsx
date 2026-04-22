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
  ['sati', 'alt', 'gcm-immobilier'].includes(item.slug),
);

const restaurantSubsidiaries = subsidiaries.filter((item) =>
  ['belchicken'].includes(item.slug),
);

function SubsidiariesPage() {
  return (
    <main className="page">
      <section className="section page-top" id="liste-filiales">
        <SectionHeading
          tag="Filiales"
          title="Une présentation centrale des entreprises du portefeuille."
          split
        />
      </section>

      <section className="section" id="hydrocarbures">
        <SectionHeading
          tag="Hydrocarbures"
          title="Trading et distribution pétrolière."
          split
        />

        <div className="subsidiary-grid subsidiary-grid-two">
          {hydrocarbonSubsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>
      </section>

      <section className="section section-soft" id="industrie">
        <SectionHeading
          tag="Industrie"
          title="Industrie, énergie et infrastructures."
          text="Des filiales positionnées sur l'acier, la cimenterie, le solaire et les travaux publics."
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
          tag="Logistique et immobilier"
          title="Transport, transit et promotion immobilière."
          text="Un bloc consacré aux activités de transport international, de logistique régionale et de développement immobilier."
          split
        />

        <div className="subsidiary-grid">
          {logisticsSubsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>
      </section>

      <section className="section section-soft" id="restauration">
        <SectionHeading
          tag="Restauration"
          title="Une filiale de restauration à part entière autour de Belchicken."
          text="Le groupe développe aussi un pôle restauration distinct, porté par les restaurants Belchicken et leur offre de restauration rapide."
          split
        />

        <div className="subsidiary-grid subsidiary-grid-two">
          {restaurantSubsidiaries.map((subsidiary) => (
            <SubsidiaryCard key={subsidiary.slug} subsidiary={subsidiary} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SubsidiariesPage;
