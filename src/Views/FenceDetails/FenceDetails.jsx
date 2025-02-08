// Views/FenceDetails/FenceDetails.jsx
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fenceTypes } from "../../Constants/Constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonComponent from "../../Components/Button/Button";
import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";
import MobileFenceDetails from "../MobileFenceDetails/MobileFenceDetails";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet";

function FenceDetails() {
    const { type } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);

    const fenceType = fenceTypes.find(f => f.route === type)
        ? fenceTypes.find(f => f.route === type)
        : fenceTypes[0].cedarTypes.find(f => f.route === type); // Find the fence type that matches the route

    const name = fenceType.name; // Get the name of the fence type
    const images = fenceType.images; // Get the images of the fence type
    const isCedarPage = location.pathname === '/fence-details/cedar'; // Check if the current page is the Cedar Fence Details page

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (fenceType) {
            document.title = `${fenceType.name} Fence Details`;
        }
    }, [fenceType]);

    // Create a dynamic canonical URL based on the current path
    const canonicalUrl =
        process.env.NODE_ENV === "production"
            ? `https://www.natesfenceandgate.com${location.pathname}`
            : window.location.href;

    return (
        <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>
            {isXsScreen || isSmScreen ? (
                <MobileFenceDetails />
            ) : (
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '3%' }}>{name}</h1>
                    {/* Conditionally render based on whether name === 'Cedar' */}
                    <div
                        id="carousel-description"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '90%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {/* Fence type description */}
                            <p
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    fontSize: '1.2em',
                                    textAlign: 'left',
                                    padding: isCedarPage ? '0% 20% 3% 20%' : '0% 10% 3% 10%',
                                    margin: '0 auto',
                                }}
                            >
                                {fenceType ? fenceType.description : null}
                            </p>
                            <ButtonComponent type={'Quote'} />
                        </div>
                        <div style={{ width: 'fit-content' }}>
                            <ImageCarousel images={images} name={name} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FenceDetails;
