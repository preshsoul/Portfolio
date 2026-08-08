import { useEffect, useState } from "react";

export default function PageProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const requestFrame = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 16));
    const cancelFrame = window.cancelAnimationFrame || window.clearTimeout;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      setProgress(nextProgress);
    };

    const handleScroll = () => {
      if (frame) return;

      frame = requestFrame(() => {
        frame = 0;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) cancelFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="page-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
