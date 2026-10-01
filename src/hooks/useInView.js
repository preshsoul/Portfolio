import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.22) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8%" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return [ref, visible];
}
