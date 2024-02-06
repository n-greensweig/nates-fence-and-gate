import { fenceTypes } from "../../Constants/Constants";
import TypeCard from "../../Components/TypeCard/TypeCard";

// Responsive imports
import { useMediaQuery, useTheme, Grid } from "@mui/material";

function CedarDetails() {

    const cedarTypes = fenceTypes[0].cedarTypes;

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className="container">

            <Grid container spacing={2} minHeight={'5vh'} xs={12} sm={6} md={4} lg={3}
                style={{
                    marginTop: '0px',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '16px',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '20px 10px',
                }}
            >
                {cedarTypes.map((cedarType, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}
                            style={{
                                height: '500px', // Make wider than it is tall on small screens?
                                padding: '0px',
                            }}
                        >
                            <TypeCard key={index} fenceType={cedarType} />
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )

}

export default CedarDetails;