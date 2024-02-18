import { Carousel } from "react-responsive-carousel";

// Responsive imports
import { useTheme, useMediaQuery } from "@mui/material";

function ImageCarousel(props) {

    const images = props.images;
    const name = props.name;
    const origin = props.origin;
    const reviews = props.reviews; // assuming you pass an array of review objects with 'text' and 'author' properties

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Carousel
            showArrows={origin ? true : false}
            showThumbs={origin ? false : true}
            showStatus={false}
            infiniteLoop={true}
            interval={origin ? 10000 : 5000}
            width={'100%'}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '50%', left: 15, transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.5)', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.354 1.646a.5.5 0 0 1 0 .708L5.707 8l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                )
            }
            thumbWidth={100} // Adjust the width of the thumbnails
            thumbHeight={100} // Adjust the height of the thumbnails
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '50%', right: 15, transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.5)', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M5.646 1.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L10.293 8 5.646 3.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                )
            }
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
                        width: origin ? '100%' : '50%', // 100% on LandingPage view, 50% on FenceDetails view
                        marginLeft: "auto",
                        marginRight: "auto",
                    }} alt={`${name} fence`} />
                    {reviews && reviews[index] && (
                        <div style={{
                            position: 'absolute', // Keep the review positioned over the image
                            top: '50%', // Start at 50% of the parent div's height
                            left: '50%', // Start at 50% of the parent div's width
                            transform: 'translate(-50%, -50%)', // Adjust the position to the center
                            backgroundColor: 'rgba(255,255,255,0.7)', // Semi-transparent white background
                            color: 'black', // Text color
                            padding: isXsScreen || isSmScreen ? '30px' : '20px', // Padding inside the text block
                            textAlign: 'center', // Center the text within the text block
                            maxWidth: '80%', // Max width of the text block
                            boxSizing: 'border-box', // Include padding in the width calculation
                        }}>
                            <p style={{
                                margin: 0,
                                fontSize: '3rem',
                                marginBottom: '10px',
                                lineHeight: isXsScreen || isSmScreen ? 1 : null,
                            }}>
                                {reviews[index].source}
                                <div style={{
                                    borderTop: '2.5px solid black',
                                    width: '15%',
                                    margin: '0 auto',
                                }}></div>
                            </p>
                            <p style={{ marginBottom: '10%', }}>{reviews[index].text}</p>
                            <h2 style={{
                                margin: 0,
                                color: '#0283AB',
                                fontSize: '1.5rem',
                            }}>{reviews[index].author}</h2>
                        </div>
                    )}
                </div>
            ))}
        </Carousel>
    )
}

export default ImageCarousel;