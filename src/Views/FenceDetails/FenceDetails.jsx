import { useParams, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ButtonComponent from "../../Components/Button/Button";
import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";
import MobileFenceDetails from "../MobileFenceDetails/MobileFenceDetails";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import { fenceGalleries } from '../../fenceImages'
import fenceData from '../../Constants/fenceData'


function FenceDetails() {
    const { type } = useParams();
    const location = useLocation();
    const description = fenceData[type].description

    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
                    <h1 style={{ fontSize: '2rem', margin: '3% 0' }}>{type ? type.charAt(0).toUpperCase() + type.slice(1) : ""}</h1>
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
                            <p
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    fontSize: '1.2em',
                                    textAlign: 'left',
                                    padding: '0% 10% 3% 10%',
                                    margin: '0 auto',
                                }}
                            >
                                {description ? description : null}
                            </p>
                            <ButtonComponent type={'Quote'} />
                        </div>
                        <div style={{ width: '1000px', marginRight: '5%', maxWidth: '50%', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}>
                            <ImageCarousel images={fenceGalleries[type]} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FenceDetails;
