
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement>(options = { threshold: 0.1, triggerOnce: true }) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) observer.unobserve(element);
        }
      },
      { threshold: options.threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return { ref, isVisible };
}
