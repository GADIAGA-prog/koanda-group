import SectionHeading from '../components/SectionHeading';
import { commitments, governanceItems, groupInfo, values } from '../data/siteContent';
import donFasoMeebo from '../assets/don-faso-meebo.png';

function GroupPage() {
  return (
    <main className="page">
      <section className="section page-top" id="qui-sommes-nous">
        <SectionHeading
          tag="Koanda Group"
          title="Une page dédiée à la gouvernance, à la vision et aux engagements du groupe."
        />

        <div className="about-layout">
          <div className="about-copy">
            <p><strong>Qui sommes-nous ?</strong></p>
            <p>{groupInfo.whoWeAre}</p>
            <p><strong>Vision :</strong> {groupInfo.vision}</p>
            <p><strong>Mission :</strong> {groupInfo.mission}</p>
          </div>

          <article className="about-visual-card">
            <img src={donFasoMeebo} alt="Action solidaire Don Faso Meebo avec des participants et bénéficiaires." />
          </article>
        </div>
      </section>

      <section className="section section-soft" id="gouvernance">
        <SectionHeading
          tag="Gouvernance"
          title="Des repères de gouvernance déjà prévus pour une lecture institutionnelle claire."
          text="La page est pensée pour accueillir la direction, l’organigramme simplifié, le comité de direction et les engagements de conformité."
          split
        />

        <div className="card-grid">
          {governanceItems.map((item) => (
            <article className="content-card" key={item.title}>
              <p className="mini-text">Gouvernance</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="valeurs">
        <SectionHeading
          tag="Valeurs"
          title="Des principes alignés avec une stratégie de croissance durable."
          text="Les valeurs ci-dessous structurent le récit institutionnel du groupe."
          split
        />

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

      <section className="section section-soft" id="engagements">
        <SectionHeading
          tag="Engagements"
          title="Qualité, environnement, responsabilité sociale et impact local."
          text="Les engagements du groupe peuvent intégrer des éléments de conformité et des certifications déjà mentionnées pour certaines filiales."
          split
        />

        <div className="card-grid">
          {commitments.map((item) => (
            <article className="content-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="mot-du-pdg">
        <SectionHeading
          tag={groupInfo.pdgTitle}
          title={groupInfo.pdgName}
          text={groupInfo.pdgRole}
          split
        />

        <div className="pdg-layout">
          <div className="pdg-copy">
            <h3>Mot du PDG</h3>
            <p>{groupInfo.pdgMessage}</p>
          </div>

          <article className="pdg-visual-card">
            <img src={groupInfo.pdgPortrait} alt={groupInfo.pdgVisualCaption} />
            <p className="mini-text">{groupInfo.pdgRole}</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default GroupPage;
