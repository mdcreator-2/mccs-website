import { useState, useEffect, useRef } from 'react';

/**
 * Custom React hook that uses IntersectionObserver to detect when an element enters the viewport.
 * Useful for triggering entrance animations, scroll reveals, and lazy loading.
 *
 * @param {Object} [options] - Configuration options.
 * @param {number|number[]} [options.threshold=0.15] - Percentage of target visibility before triggering.
 * @param {boolean} [options.triggerOnce=true] - If true, stays revealed permanently once seen.
 * @param {string} [options.rootMargin='0px'] - Margin around the root element.
 * @returns {{
 *   ref: React.MutableRefObject<any>,
 *   isInView: boolean
 * }}
 */
const useScrollReveal = ({
  threshold = 0.15,
  triggerOnce = true,
  rootMargin = '0px',
} = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // If triggerOnce is enabled and element has already been revealed, skip observing
    if (triggerOnce && hasTriggeredRef.current) {
      return undefined;
    }

    const node = ref.current;
    if (!node) {
      return undefined;
    }

    // Graceful fallback for environments lacking IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      hasTriggeredRef.current = true;
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            hasTriggeredRef.current = true;
            observer.unobserve(node);
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, rootMargin]);

  return {
    ref,
    isInView,
  };
};

export default useScrollReveal;
