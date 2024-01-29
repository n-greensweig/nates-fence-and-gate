import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fenceTypes } from "../../Constants/Constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function FenceDetails() {

    const { type } = useParams();

    const fenceType = fenceTypes.find(f => f.route === type); // Find the fence type that matches the route
    const name = fenceType.name; // Get the name of the fence type
    const route = fenceType.route; // Get the route of the fence type
    const images = fenceType.images; // Get the images of the fence type



    useEffect(() => {
        if (fenceType) {
            document.title = `${fenceType.name} Fence Details`;
        }
    }, [fenceType]);

    return (
        <div>
            <h1>{name} Fence Details</h1>
            {/* Conditionally render based on whether fenceType.name === 'Cedar' */}

            <div id="carousel-description"
                style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>

                {/* Image carousel component */}
                {/* Adjust props as needed */}
                <Carousel showArrows={true} showThumbs={true}>
                    {images.map((image, index) => (
                        <div key={index} style={{ textAlign: 'center' }}> {/* Centering images */}
                            <img src={image}
                                style={{
                                    border: '2px solid red',
                                    maxWidth: '100%',     // Maximum width is 100% of the container
                                    maxHeight: '500px',   // Maximum height
                                    width: 'auto',        // Width auto for maintaining aspect ratio
                                    height: 'auto',       // Height auto for maintaining aspect ratio
                                    objectFit: 'contain', // Ensures the image is scaled properly
                                    margin: 'auto',       // Center the image in the div
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Optional box shadow
                                }}
                                alt={`${name} fence`} />
                        </div>
                    ))}
                </Carousel>

                {/* Fence type description */}
                <p
                    style={{ border: '2px solid blue', }}
                >{fenceType.description}</p>

            </div>
        </div>
    );
}


export default FenceDetails;