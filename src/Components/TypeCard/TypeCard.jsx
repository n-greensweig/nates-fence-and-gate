import { Grid, Paper, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

function TypeCard(props) {

    console.log(props.fenceType.image);

    // Needs handleClick function to route to the correct page

    return (
        <div>

            <Grid item
            xs={12} sm={6} md={4} lg={3} xl={2}
            style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                border: '2px solid blue'
            }}
            >
                <Paper elevation={3} style={{ width: '100%', height: '100%' }}>
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
            </Grid>

        </div>
    )

}

export default TypeCard;