// Components/LazyImage/LazyImage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Skeleton } from '@mui/material';

function LazyImage({ src, alt, height = 140, width = '100%', srcSet, sizes, style, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  // Use IntersectionObserver to defer offscreen images
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      });
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      {/* Skeleton loader positioned over the image container */}
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width={typeof width === 'number' ? `${width}px` : width}
          height={typeof height === 'number' ? `${height}px` : height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          width={width}
          height={height}
          srcSet={srcSet}
          sizes={sizes}
          style={{
            display: loaded ? 'block' : 'none',
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
            ...style,
          }}
          {...rest}
        />
      )}
    </div>
  );
}

export default LazyImage;
