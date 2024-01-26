import { Grid, Paper, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

function TypeCard(props) {

    const cardStyle = {
        width: '100%',
        height: '100%',  // Ensure the Paper component fills the Grid item
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // This spreads out the content evenly
    };

    console.log(props.fenceType.image);

    // Needs handleClick function to route to the correct page

    return (
        <div>
            <Paper elevation={3} style={cardStyle}>
                <Card>
                    <CardActionArea>
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                {props.fenceType.name}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`${props.fenceType.image}`}
                            alt={`${props.fenceType.name} fence`}
                        />
                        <CardContent
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                {props.fenceType.description}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

        </div>
    )

}

export default TypeCard;