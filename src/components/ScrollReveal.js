import { useState, useEffect, useRef } from "react";

export default function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let revealTimer;
    const reveal = () => setVisible(true);

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return undefined;
    }

    const fallbackTimer = window.setTimeout(reveal, Math.max(1200, delay + 800));
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(fallbackTimer);
          revealTimer = window.setTimeout(reveal, delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => {
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(revealTimer);
      obs.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
