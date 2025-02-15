import { useParams } from "react-router-dom";
import { fenceTypes } from "../../Constants/Constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonComponent from "../../Components/Button/Button";

function MobileFenceDetails() {

    const { type } = useParams();

    const fenceType = fenceTypes.find(f => f.route === type) ? fenceTypes.find(f => f.route === type) :
        fenceTypes[0].cedarTypes.find(f => f.route === type); // Find the fence type that matches the route
    const name = fenceType.name; // Get the name of the fence type
    const images = fenceType.images; // Get the images of the fence type

    return (

        <div>
            <h1 style={{ fontSize: '2rem' }}>{name}</h1>
            {/* Conditionally render based on whether name === 'Cedar' */}

            <div id="carousel-description"
                style={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    justifyContent: 'flex-start',
                    width: '100%',
                }}>

                {/* Image carousel component */}
                {/* Adjust props as needed */}
                <Carousel showArrows={true}
                    showThumbs={true} // responsive
                    showStatus={false}
                    infiniteLoop={true}
                    interval={5000}
                    autoPlay={true}
                    width={'100%'}
                >

                    {/* Make so users can click into images? */}
                    {images.map((image, index) => (
                        <div key={index} style={{ /*border: '2px solid red',*/ }}> {/* Align images to the left */}
                            <img src={image}
                                style={{
                                    maxWidth: '100%',     // Maximum width is 100% of the container
                                    maxHeight: '500px',   // Maximum height
                                    height: 'auto',       // Height auto for maintaining aspect ratio
                                    objectFit: 'contain', // Ensures the image is scaled properly
                                    margin: 'auto',       // Center the image in the div
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional box shadow
                                    width: 300,
                                    marginLeft: "auto",
                                    marginRight: "auto"

                                }}
                                alt={`${name} fence`} />
                        </div>
                    ))}
                </Carousel>

                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {/* Fence type description */}
                    <p
                        style={{
                            textAlign: 'left',
                            paddingBottom: '5%',
                        }}
                        className='mt-4 text-xl text-left xs:mr-8 ml-8'
                    >{fenceType.description}</p>
                </div>

            </div>
            <div className="sm:mb-16 xs:mb-14">
                <ButtonComponent type={'Quote'} />
            </div>
        </div>
    );
}

export default MobileFenceDetails;
