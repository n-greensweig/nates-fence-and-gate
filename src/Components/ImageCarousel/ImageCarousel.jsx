// Components/ImageCarousel/ImageCarousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTheme, useMediaQuery } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel({ images, name, origin, reviews }) {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Set fixed container height based on screen size
  const imageContainerHeight = isXsScreen ? '250px' : isSmScreen ? '350px' : '500px';

  // Only show thumbnails if there are 10 or fewer images and not in origin view.
  const shouldShowThumbs = origin ? false : images.length <= 10;

  // Shared style for navigation arrows.
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

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={origin ? 10000 : 5000}
      showStatus={false}
      showThumbs={shouldShowThumbs}
      showIndicators
      emulateTouch
      swipeable
      dynamicHeight={false}
      width="100%"
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
          <img
            src={image}
            alt={`${name} fence`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          />
          {reviews && reviews[index] && (
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
              }}
            >
              <h3 style={{
                margin: 0,
                fontSize: isXsScreen || isSmScreen ? '1.5rem' : '2rem',
                marginBottom: '10px'
              }}>
                {reviews[index].source}
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
                {reviews[index].text}
              </p>
              <h4 style={{
                margin: 0,
                color: '#0283AB',
                fontSize: isXsScreen || isSmScreen ? '12px' : '1.2rem'
              }}>
                {reviews[index].author}
              </h4>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
