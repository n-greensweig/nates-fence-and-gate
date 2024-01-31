import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fenceTypes } from "../../Constants/Constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonComponent from "../../Components/Button/Button";

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
        <div style={{ /*border: '2px solid green'*/ }}>
            <h1 style={{ fontSize: '2rem' }}>{name}</h1>
            {/* Conditionally render based on whether fenceType.name === 'Cedar' */}

            <div id="carousel-description"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: '100%',
                }}>

                {/* Image carousel component */}
                {/* Adjust props as needed */}
                <Carousel showArrows={true}
                    showThumbs={true}
                    showStatus={false}
                    infiniteLoop={true}
                    interval={3000}
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
                                    // width: 'auto',        // Width auto for maintaining aspect ratio
                                    height: 'auto',       // Height auto for maintaining aspect ratio
                                    objectFit: 'contain', // Ensures the image is scaled properly
                                    margin: 'auto',       // Center the image in the div
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional box shadow
                                    // marginLeft: '0px',
                                    // border: '2px solid blue',
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
                    border: '2px solid blue',
                }}>
                    {/* Fence type description */}
                    <p
                        style={{
                            // border: '2px solid blue',
                            // marginRight: '20%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'justify',
                            paddingBottom: '5%',
                            fontSize: '1.2em'
                        }}
                    >{fenceType.description}</p>
                    <ButtonComponent type={'Quote'} />
                </div>

            </div>
        </div>
    );
}


export default FenceDetails;