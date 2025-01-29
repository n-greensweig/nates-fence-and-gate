// Components/TypeCard/TypeCard.jsx
import { Paper, Card, CardActionArea, CardMedia, CardContent, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function TypeCard(props) {

    const location = useLocation();

    const cardStyle = {
        width: '100%',
        height: '100%',  // Ensure the Paper component fills the Grid item
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // This spreads out the content evenly
    };

    const navigate = useNavigate();
    const isCedarPage = location.pathname === '/fence-details/cedar';

    // handleClick function to route to the correct page
    const handleClick = route => {
        navigate(`/fence-details/${route}`);
        window.scrollTo(0, 0);
    };

    const handleCedarClick = () => {
        navigate('/fence-details/cedar');
        window.scrollTo(0, 0);
    };

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{ marginBottom: isXsScreen || isSmScreen ? '5%' : null }}>
            <Paper elevation={isCedarPage || isXsScreen || isSmScreen ? 1 : 3} style={cardStyle}
                onClick={() => {
                    props.fenceType.route === 'cedar' ? handleCedarClick() : handleClick(props.fenceType.route)
                }}
            >
                {/* Need to make cards stretch horizontally on XS and SM screens */}
                <Card
                    style={{
                        height: isCedarPage ? (isXsScreen || isSmScreen ? 'auto' : '450px') : 'auto',
                        margin: '0px',
                        paddingTop: '10px',
                        borderBottom: isXsScreen || isSmScreen ? "10px solid #0283AB" : null,
                    }}
                    className="bg-slate-100 hover:bg-slate-200 cursor-pointer"
                >
                    <CardActionArea>
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '0px',
                            }}
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                <h1>{props.fenceType.name}</h1>
                                {isXsScreen || isSmScreen ? <p style={{
                                    textAlign: 'center',
                                    fontSize: '.6em',
                                    padding: '1% 5%',
                                    color: '#2F4F4F',
                                }}>{props.fenceType.introDescription}</p> : null}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`${props.fenceType.mainImage}`} // Already using absolute path
                            alt={`${props.fenceType.name} fence`}
                        />
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'left',
                                paddingBottom: '10px',
                            }}
                        >
                            {isXsScreen || isSmScreen ? null :
                                <Typography variant="body2" color="text.secondary">
                                    {props.fenceType.introDescription}
                                </Typography>
                            }
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

        </div>
    )

}

export default TypeCard;
