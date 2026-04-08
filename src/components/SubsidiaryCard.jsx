import { Link } from 'react-router-dom';

function SubsidiaryCard({ subsidiary }) {
  return (
    <article className="subsidiary-card">
      <div className="subsidiary-card-watermark" aria-hidden="true">
        {subsidiary.logo ? (
          <img src={subsidiary.logo} alt="" />
        ) : (
          <span>{subsidiary.watermarkLabel ?? subsidiary.name}</span>
        )}
      </div>

      <div className="subsidiary-card-media">
        <img src={subsidiary.image} alt={`Illustration ${subsidiary.name}`} />
      </div>

      <div className="subsidiary-card-head">
        {subsidiary.logo ? (
          <img className="subsidiary-logo" src={subsidiary.logo} alt="" aria-hidden="true" />
        ) : (
          <span className="subsidiary-fallback-logo" aria-hidden="true">
            {subsidiary.name
              .split(' ')
              .slice(0, 2)
              .map((item) => item[0])
              .join('')}
          </span>
        )}

        <div>
          <p className="mini-text">{subsidiary.sector}</p>
          <h3>{subsidiary.name}</h3>
          <p className="subsidiary-country">{subsidiary.country}</p>
        </div>
      </div>

      <p>{subsidiary.summary}</p>

      <ul className="feature-list">
        {subsidiary.facts.slice(0, 2).map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>

      <div className="card-actions">
        <Link className="button button-secondary" to={`/filiales/${subsidiary.slug}`}>
          En savoir plus
        </Link>
        {subsidiary.externalLink ? (
          <a className="button button-ghost" href={subsidiary.externalLink} target="_blank" rel="noreferrer">
            {subsidiary.externalLabel ?? 'Lien externe'}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default SubsidiaryCard;
