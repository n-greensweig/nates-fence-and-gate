import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fenceTypes } from "../../Constants/Constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonComponent from "../../Components/Button/Button";

import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";
import MobileFenceDetails from "../MobileFenceDetails/MobileFenceDetails";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function FenceDetails() {

    const { type } = useParams();
    const history = useHistory();

    const fenceType = fenceTypes.find(f => f.route === type) ? fenceTypes.find(f => f.route === type) :
        fenceTypes[0].cedarTypes.find(f => f.route === type); // Find the fence type that matches the route
    const name = fenceType.name; // Get the name of the fence type
    const images = fenceType.images; // Get the images of the fence type

    const isCedarPage = history.location.pathname === '/fence-details/cedar'; // Check if the current page is the Cedar Fence Details page

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (fenceType) {
            document.title = `${fenceType.name} Fence Details`;
        }
    }, [fenceType]);

    return (
        <div>
            {isXsScreen || isSmScreen ? <MobileFenceDetails /> :
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '3%' }}>{name}</h1>
                    {/* Conditionally render based on whether name === 'Cedar' */}

                    <div id="carousel-description"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            width: '100%',
                            // border: '2px solid green',
                        }}>

                        <div style={{
                            width: '100%',
                            height: '90%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // border: '2px solid blue',
                        }}>
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
                                    // border: '2px solid red',
                                }}
                            >{fenceType ? fenceType.description : null}</p>
                            <ButtonComponent type={'Quote'} />
                        </div>

                        <div style={{ width: 'fit-content' }}>
                            <ImageCarousel images={images} name={name} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}


export default FenceDetails;