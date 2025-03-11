
import React, { useState, useEffect, useRef } from 'react';
import { cn } from './utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | 'fade-in'
    | 'fade-in-up'
    | 'fade-in-down'
    | 'scale-in'
    | 'float';
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation}` : 'opacity-0',
        className
      )}
      style={{ 
        animationDelay: delay > 0 ? `${delay}ms` : undefined,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};

interface AnimatedTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  threshold?: number;
  staggerDelay?: number;
  wordAnimation?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  tag = 'p',
  className,
  threshold = 0.1,
  staggerDelay = 50,
  wordAnimation = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const renderContent = () => {
    const Tag = tag;
    
    if (wordAnimation) {
      const words = text.split(' ');
      
      return (
        <Tag className={className}>
          {words.map((word, index) => (
            <span
              key={index}
              className={isVisible ? 'animate-fade-in inline-block' : 'opacity-0'}
              style={{ 
                animationDelay: `${index * staggerDelay}ms`,
                animationFillMode: 'forwards',
                marginRight: '0.25rem'
              }}
            >
              {word}
            </span>
          ))}
        </Tag>
      );
    }
    
    return (
      <Tag 
        className={cn(
          isVisible ? 'animate-fade-in' : 'opacity-0',
          className
        )}
        style={{
          animationFillMode: 'forwards'
        }}
      >
        {text}
      </Tag>
    );
  };

  return (
    <div ref={ref}>
      {renderContent()}
    </div>
  );
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return progress;
};
