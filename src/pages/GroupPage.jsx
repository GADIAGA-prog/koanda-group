import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { engagementCards, governanceItems, groupInfo, values } from '../data/siteContent';
import donFasoMeebo from '../assets/don-faso-meebo.png';

function GroupPage() {
  const [openCommitment, setOpenCommitment] = useState(0);

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
            <img
              src={donFasoMeebo}
              alt="Action solidaire Don Faso Meebo avec des participants et bénéficiaires."
            />
          </article>
        </div>
      </section>

      <section className="section section-soft" id="gouvernance">
        <SectionHeading
          tag="Gouvernance"
          title="Des repères de gouvernance déjà prévus pour une lecture institutionnelle claire."
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
          text="Les engagements du groupe intègrent des exigences de conformité, de qualité et des certifications déjà visibles dans certaines filiales."
          split
        />

        <div className="card-grid commitments-grid">
          {engagementCards.map((item, index) => (
            <article
              className={`content-card commitment-card commitment-card-${item.theme} ${
                openCommitment === index ? 'is-open' : ''
              }`}
              key={item.title}
            >
              <div className="commitment-card-head">
                <p className="mini-text">Engagement</p>
                <button
                  type="button"
                  className="commitment-plus-button"
                  aria-expanded={openCommitment === index}
                  aria-label={
                    openCommitment === index
                      ? `Réduire le contenu ${item.title}`
                      : `Afficher plus de contenu pour ${item.title}`
                  }
                  onClick={() => setOpenCommitment(openCommitment === index ? -1 : index)}
                >
                  <span>{openCommitment === index ? '-' : '+'}</span>
                </button>
              </div>

              <h3>{item.title}</h3>
              <p className="commitment-summary">{item.summary}</p>

              <div className="commitment-details" hidden={openCommitment !== index}>
                <p>{item.details}</p>
                <a className="button button-ghost commitment-more-link" href="#contact">
                  En savoir plus
                </a>
              </div>
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
