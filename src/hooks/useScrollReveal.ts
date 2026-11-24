import { useEffect } from 'react';

/**
 * 60fps Scroll Reveal Hook using native IntersectionObserver.
 * Dynamically reveals elements with silky smooth CSS transitions when scrolled into view.
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;

      const prefersReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const elements = document.querySelectorAll<HTMLElement>(
        '.reveal-init, .reveal-scale, .reveal-slide-left'
      );

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
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.08,
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });

      // Safety timeout: ensure visible elements never get stuck
      const safetyTimeout = setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(
            '.reveal-init:not(.is-revealed), .reveal-scale:not(.is-revealed), .reveal-slide-left:not(.is-revealed)'
          )
          .forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
              el.classList.add('is-revealed');
            }
          });
      }, 1800);

      return () => {
        observer.disconnect();
        clearTimeout(safetyTimeout);
      };
    } catch {
      document.querySelectorAll('.reveal-init, .reveal-scale, .reveal-slide-left').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }
  }, deps);
}
