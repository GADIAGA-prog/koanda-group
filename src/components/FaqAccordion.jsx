import { useState } from 'react';

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="faq-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </button>

      <div className="faq-body" role="region">
        <div className="faq-body-inner">
          <div className="faq-body-content">{answer}</div>
        </div>
      </div>
    </div>
  );
}

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="faq-section" role="list">
      {items.map((item, index) => (
        <div key={item.question} role="listitem">
          <FaqItem
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
