import { useParams } from "react-router-dom";
import { fenceTypes } from "../../Constants/Constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonComponent from "../../Components/Button/Button";

function MobileFenceDetails() {
  const { type } = useParams();

  const fenceType = fenceTypes.find(f => f.route === type) ? 
    fenceTypes.find(f => f.route === type) : 
    fenceTypes[0].cedarTypes.find(f => f.route === type);
  const name = fenceType.name;
  const images = fenceType.images;
  const altDescriptions = fenceType.altDescriptions;

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
      <h1 style={{ fontSize: '2rem' }}>{name}</h1>
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
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                style={{
                  maxWidth: '100%',
                  maxHeight: '500px',
                  height: 'auto',
                  objectFit: 'contain',
                  margin: 'auto',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
                alt={altDescriptions && altDescriptions[index] ? altDescriptions[index] : `${name} fence`}
              />
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
            {fenceType.description}
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
