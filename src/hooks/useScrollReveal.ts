import { useEffect } from 'react';

/**
 * Lightweight IntersectionObserver hook for viewport-triggered reveals.
 * Safe fallback: reveals all elements if reduced motion or any issue occurs.
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;

      const prefersReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const elements = document.querySelectorAll<HTMLElement>('.reveal-init, .reveal-scale, .reveal-slide-left');

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        elements.forEach((el) => el.classList.add('is-revealed'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '40px 0px 40px 0px',
          threshold: 0.05,
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 80) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    } catch {
      // Fallback: reveal all elements safely
      document.querySelectorAll('.reveal-init, .reveal-scale, .reveal-slide-left').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }
  }, deps);
}
