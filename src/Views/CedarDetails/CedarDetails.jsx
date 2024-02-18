import { fenceTypes } from "../../Constants/Constants";
import TypeCard from "../../Components/TypeCard/TypeCard";

// Responsive imports
import { Grid } from "@mui/material";

function CedarDetails() {

    const cedarTypes = fenceTypes[0].cedarTypes;

    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '20px', margin: '0 auto', }}>
            <Grid container spacing={2} style={{ maxWidth: '1400px' }}>
                {cedarTypes.map((cedarType, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <TypeCard fenceType={cedarType} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )

}

export default CedarDetails;