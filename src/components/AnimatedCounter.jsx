import { useEffect, useRef, useState } from 'react';

function isNumeric(value) {
  return /^\d+$/.test(String(value));
}

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedCounter({ value, duration = 1800 }) {
  const [display, setDisplay] = useState(isNumeric(value) ? '0' : value);
  const containerRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isNumeric(value) || animatedRef.current) return;

    const target = parseInt(value, 10);
    const container = containerRef.current;
    if (!container) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;
        obs.disconnect();

        const start = performance.now();

        function step(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutQuart(progress);
          setDisplay(String(Math.round(eased * target)));

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }

        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );

    obs.observe(container);
    return () => obs.disconnect();
  }, [value, duration]);

  return <span ref={containerRef}>{display}</span>;
}

export default AnimatedCounter;
