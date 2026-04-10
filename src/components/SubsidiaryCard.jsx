import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SubsidiaryCard({ subsidiary }) {
  const gallery = subsidiary.gallery?.length ? subsidiary.gallery : [subsidiary.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [subsidiary.slug]);

  useEffect(() => {
    if (gallery.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % gallery.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [gallery]);

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
        {gallery.map((image, index) => (
          <img
            key={`${subsidiary.slug}-${index}`}
            className={index === activeImageIndex ? 'is-active' : ''}
            src={image}
            alt={`Illustration ${subsidiary.name}`}
          />
        ))}
        {gallery.length > 1 ? (
          <div className="subsidiary-card-dots" aria-hidden="true">
            {gallery.map((_, index) => (
              <span
                key={`${subsidiary.slug}-dot-${index}`}
                className={index === activeImageIndex ? 'is-active' : ''}
              />
            ))}
          </div>
        ) : null}
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
