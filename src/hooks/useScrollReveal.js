import { useEffect } from 'react';

const REVEAL_CLASS = 'sr-visible';
const SELECTOR = '[data-sr]';

let observer = null;

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add(REVEAL_CLASS);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  );

  return observer;
}

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const obs = getObserver();
    const elements = document.querySelectorAll(`${SELECTOR}:not(.${REVEAL_CLASS})`);

    for (const el of elements) {
      obs.observe(el);
    }
  });
}
