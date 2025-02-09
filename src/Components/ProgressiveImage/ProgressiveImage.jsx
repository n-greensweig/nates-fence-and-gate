// Components/ProgressiveImage/ProgressiveImage.jsx
import React, { useState, useEffect, useRef } from 'react';

const ProgressiveImage = ({
  lowSrc,      // URL for the low-quality (blurry) image
  mediumSrc,   // URL for the medium-quality image
  highSrc,     // URL for the high-quality image
  alt,
  width,
  height,
  style,
  ...rest
}) => {
  const [inView, setInView] = useState(false);
  const [mediumLoaded, setMediumLoaded] = useState(false);
  const [highLoaded, setHighLoaded] = useState(false);
  const containerRef = useRef(null);

  // Defer loading the medium and high images until the component scrolls into view
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
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Low-quality image: Always rendered and blurred; fades out when the medium loads */}
      <img
        src={lowSrc}
        alt={alt}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(10px)',
          transition: 'opacity 0.5s ease-out',
          opacity: mediumLoaded ? 0 : 1,
        }}
      />
      {/* Medium-quality image: Loaded when in view; fades in over the low-quality version.
          Once the high-quality image loads, this fades out. */}
      {inView && (
        <img
          src={mediumSrc}
          alt={alt}
          onLoad={() => setMediumLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-out',
            opacity: mediumLoaded ? (highLoaded ? 0 : 1) : 0,
          }}
        />
      )}
      {/* High-quality image: Loaded when in view; fades in once loaded */}
      {inView && (
        <img
          src={highSrc}
          alt={alt}
          onLoad={() => setHighLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-out',
            opacity: highLoaded ? 1 : 0,
          }}
          {...rest}
        />
      )}
    </div>
  );
};

export default ProgressiveImage;
