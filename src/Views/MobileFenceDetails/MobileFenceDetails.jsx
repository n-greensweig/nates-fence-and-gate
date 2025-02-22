import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonComponent from "../../Components/Button/Button";

import AdaptiveImage from "../../Components/adaptiveImage/AdaptiveImage";
import { fenceGalleries } from '../../fenceImages'
import fenceData from '../../Constants/fenceData'


function MobileFenceDetails() {
  const { type } = useParams();


  const arrowButtonStyle = {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer'
  };

  return (
    <div>
      <style>
        {`
          .carousel .control-dots {
            margin-top: 0;
          }
        `}
      </style>
      <h1 style={{ fontSize: '2rem' }}>{type ? type.charAt(0).toUpperCase() + type.slice(1) : ""}</h1>
      <div
        id="carousel-description"
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          interval={5000}
          autoPlay={true}
          width={'100%'}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowButtonStyle, left: 15 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M5.646 1.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L10.293 8 5.646 3.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            )
          }
        >
          {fenceGalleries[type].map((image, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <AdaptiveImage images={image} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '300px', height: '300px' }} />
            </div>
          ))}
        </Carousel>

        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              paddingBottom: '5%',
            }}
            className='mt-4 text-xl text-left xs:mr-8 ml-8'
          >
            {fenceData[type].description}
          </p>
        </div>
      </div>
      <div className="sm:mb-16 xs:mb-14 sm:mt-8 xs:mt-6">
        <ButtonComponent type={'Quote'} />
      </div>
    </div>
  );
}

export default MobileFenceDetails;
