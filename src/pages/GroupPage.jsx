import { Link } from 'react-router-dom';
import OrgChartExplorer from '../components/OrgChartExplorer';
import SectionHeading from '../components/SectionHeading';
import {
  engagementCards,
  governanceItems,
  groupInfo,
  orgChartNodes,
  subsidiaries,
  values,
} from '../data/siteContent';

function GroupPage() {
  const aboutImage =
    typeof groupInfo.aboutImage === 'string' ? { src: groupInfo.aboutImage } : groupInfo.aboutImage;

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
              src={aboutImage.src}
              alt="Visuel institutionnel Koanda Group illustrant les secteurs d'activité du groupe."
              style={{
                objectFit: aboutImage.fit ?? 'cover',
                objectPosition: aboutImage.position ?? 'center center',
                background: aboutImage.background ?? '#f6fbf6',
              }}
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

      <section className="section" id="organigramme">
        <SectionHeading
          tag="Organigramme"
          title="Consultez la structure organisationnelle du groupe."
          text="Recherchez une fonction, filtrez par type de structure et naviguez entre rattachements, pôles et entités liées sans quitter la page."
          split
        />

        <OrgChartExplorer nodes={orgChartNodes} subsidiaries={subsidiaries} />
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
          {engagementCards.map((item) => (
            <article className={`content-card commitment-card commitment-card-${item.theme}`} key={item.title}>
              <h3>{item.title}</h3>
              <p className="commitment-summary">{item.summary}</p>

              <div className="commitment-details">
                <p>{item.details}</p>
                {item.theme === 'certifications' ? (
                  <Link className="button button-ghost commitment-more-link" to="/certificats">
                    En savoir plus
                  </Link>
                ) : null}
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
