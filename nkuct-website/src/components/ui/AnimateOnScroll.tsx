'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimateOnScroll({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = '',
  style = {}
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : ''}`.trim()}
      style={{
        ...style,
        opacity: isVisible ? undefined : 0,
        animationDelay: `${delay}ms`,
        ...(isVisible ? {} : { transform: 'translateY(20px)' }),
      }}
    >
      {children}
    </div>
  );
}
