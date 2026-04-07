function SectionHeading({ tag, title, text, split = false }) {
  return (
    <div className={`section-head ${split ? 'split-head' : ''}`}>
      <div>
        <p className="section-tag">{tag}</p>
        <h2>{title}</h2>
      </div>
      {text ? <p className="lead side-copy">{text}</p> : null}
    </div>
  );
}

export default SectionHeading;
