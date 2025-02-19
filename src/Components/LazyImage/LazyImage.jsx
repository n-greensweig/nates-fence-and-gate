// Components/LazyImage.jsx
import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ''}
      alt={alt}
      style={style}
      // Optionally keep native lazy attribute as a fallback
      loading="lazy"
    />
  );
};

export default LazyImage;
