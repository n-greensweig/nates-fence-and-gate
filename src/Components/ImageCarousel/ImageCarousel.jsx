import { Carousel } from "react-responsive-carousel";

function ImageCarousel(props) {

    const images = props.images;
    const name = props.name;

    return (

        // Image carousel component
        // Adjust props as needed
        <Carousel showArrows={true}
            showThumbs={true}
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
                            marginRight: "auto",

                        }}
                        alt={`${name} fence`} />
                </div>
            ))}
        </Carousel>
    )

}

export default ImageCarousel;