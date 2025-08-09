import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-scale, .scroll-slide-left, .scroll-slide-right, .stagger-animate'
    );
    
    animatedElements.forEach((el) => {
      observer.current?.observe(el);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  // Function to manually trigger animations
  const triggerAnimation = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add('visible');
    });
  };

  return { triggerAnimation };
};

// Hook for staggered animations
export const useStaggerAnimation = (delay: number = 100) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, index * delay);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return containerRef;
};

export default useScrollAnimation;