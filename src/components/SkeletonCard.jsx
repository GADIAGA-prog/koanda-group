function SkeletonCard({ hasImage = true }) {
  return (
    <article className="content-card skeleton-card" aria-hidden="true">
      {hasImage && <div className="skeleton skeleton-image" />}
      <div className="skeleton-body">
        <div className="skeleton skeleton-line skeleton-line--short" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line skeleton-line--medium" />
        <div className="skeleton skeleton-line skeleton-line--short" />
      </div>
    </article>
  );
}

export function SkeletonGrid({ count = 3, hasImage = true }) {
  return (
    <div className="news-public-grid" role="status" aria-label="Chargement des articles...">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} hasImage={hasImage} />
      ))}
    </div>
  );
}

export default SkeletonCard;
