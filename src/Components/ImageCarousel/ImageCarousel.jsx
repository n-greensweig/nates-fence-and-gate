import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTheme, useMediaQuery } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AdaptiveImage from '../adaptiveImage/AdaptiveImage';

function ImageCarousel({ images, reviews }) {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const imageContainerHeight = isXsScreen ? '250px' : isSmScreen ? '350px' : '500px';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalDuration = reviews && reviews.length > 0 ? 8000 : 5000;


  const arrowButtonStyle = {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer'
  };

  const handleCarouselChange = (index) => {
    setFade(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setFade(false)
    }, 300)
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: imageContainerHeight }}>
      <Carousel
        autoPlay
        infiniteLoop
        interval={intervalDuration} // now dynamic based on reviews prop
        showStatus={false}
        showThumbs={false}
        showIndicators
        emulateTouch
        swipeable
        dynamicHeight={false}
        width="100%"
        onChange={handleCarouselChange}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowButtonStyle, left: 15 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.354 1.646a.5.5 0 0 1 0 .708L5.707 8l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowButtonStyle, right: 15 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M5.646 1.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L10.293 8 5.646 3.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index} style={{ position: 'relative', overflow: 'hidden', width: '100%', height: imageContainerHeight }}>
            <AdaptiveImage images={image} style={{ height: '100%' }} />
          </div>
        ))}
      </Carousel>

      {reviews && reviews[currentIndex] && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: isXsScreen || isSmScreen ? '5px' : '20px',
            textAlign: 'center',
            width: '70%',
            opacity: fade ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 10
          }}
        >
          <h3 style={{
            margin: 0,
            fontSize: isXsScreen || isSmScreen ? '1.5rem' : '2rem',
            marginBottom: '10px'
          }}>
            {reviews[currentIndex].source}
          </h3>
          <hr style={{
            borderTop: isXsScreen || isSmScreen ? '1.5px solid #000' : '2px solid #000',
            width: '15%',
            margin: '0 auto 10px auto'
          }} />
          <p style={{
            margin: '0 0 10px 0',
            fontSize: isXsScreen || isSmScreen ? '12px' : '1rem'
          }}>
            {reviews[currentIndex].text}
          </p>
          <h4 style={{
            margin: 0,
            color: '#0283AB',
            fontSize: isXsScreen || isSmScreen ? '12px' : '1.2rem'
          }}>
            {reviews[currentIndex].author}
          </h4>
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
