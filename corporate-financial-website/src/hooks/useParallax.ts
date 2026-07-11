import { useState, useEffect } from 'react';

interface ParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

/**
 * Custom hook for parallax scrolling effect
 * @param options - Parallax configuration options
 * @returns Transform value for parallax effect
 */
export const useParallax = (elementRef: React.RefObject<HTMLElement>, options: ParallaxOptions = {}) => {
  const { speed = 0.5, disabled = false } = options;
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    if (disabled || !elementRef.current) return;

    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = elementRef.current.offsetTop;
      const scrolled = scrollTop - elementTop;
      const parallaxValue = scrolled * speed;
      
      setTransform(parallaxValue);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef, speed, disabled]);

  return transform;
};