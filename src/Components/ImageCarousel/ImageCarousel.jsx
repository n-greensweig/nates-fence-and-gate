import { Carousel } from "react-responsive-carousel";

function ImageCarousel(props) {

    const images = props.images;
    const name = props.name;
    const source = props.source;
    const reviews = props.reviews; // assuming you pass an array of review objects with 'text' and 'author' properties

    return (
        <Carousel
            showArrows={source ? false : true}
            showThumbs={source ? false : true}
            showStatus={false}
            infiniteLoop={true}
            interval={source ? 10000 : 5000}
            autoPlay={true}
            width={'100%'}
        >
            {images.map((image, index) => (
                <div key={index} style={{ position: 'relative' }}>
                    <img src={image} style={{
                        maxWidth: '100%', // Keep the image width within the container
                        maxHeight: '800px', // Increase max height for bigger images
                        height: 'auto', // Maintain aspect ratio
                        objectFit: 'contain', // Adjust as needed
                        margin: 'auto', // Center the image
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional: for styling
                        width: source ? '100%' : '300px', // 100% on LandingPage view, 300px on FenceTypes view
                        marginLeft: "auto",
                        marginRight: "auto",
                    }} alt={`${name} fence`} />
                    {reviews && reviews[index] && (
                        <div style={{
                            position: 'absolute', // Position the review over the image
                            bottom: 0, // Align to the bottom of the parent div
                            backgroundColor: 'rgba(255,255,255,0.7)', // Semi-transparent white background
                            color: 'black', // Text color
                            padding: '20px', // Padding inside the text block
                            width: '100%', // Take full width of the parent div
                            boxSizing: 'border-box', // Include padding in the width calculation
                        }}>
                            <h2 style={{ margin: 0 }}>{reviews[index].author}</h2>
                            <p style={{ margin: 0 }}>{reviews[index].text}</p>
                            <p style={{ margin: 0 }}>{reviews[index].source}</p>
                        </div>
                    )}
                </div>
            ))}
        </Carousel>
    )
}

export default ImageCarousel;