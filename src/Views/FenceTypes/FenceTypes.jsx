import { useEffect } from "react";
import { Grid } from "@mui/material";
import TypeCard from "../../Components/TypeCard/TypeCard";

import { fenceTypes } from "../../Constants/Constants"; // global fenceTypes variable

// Responsive imports
import { useMediaQuery, useTheme } from "@mui/material";


function FenceTypes() {

    useEffect(() => {
        document.title = "Fence Types";
    }, []);

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <header style={{ fontSize: '2.5rem' }}>Fence Types</header>
            <p style={{
                fontSize: '1rem',
            }}>
                Choosing the perfect fence is as unique as your needs and interests.
                Explore our wide range of fence types, tailored to match your individual
                requirements and preferences.
            </p>

            <div className="content" style={{ marginTop: isXsScreen || isSmScreen ? '5%' : '3%', fontSize: '2rem' }}>
                <Grid container spacing={2} minHeight={'5vh'} xs={12} sm={6} md={4} lg={3}
                    style={{
                        marginTop: '0px',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '20px 10px',
                    }}
                >
                    {fenceTypes.map((fenceType, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}
                                style={{
                                    height: '500px', // Make wider than it is tall on small screens?
                                }}
                            >
                                <TypeCard key={index} fenceType={fenceType} />
                            </Grid>
                        )
                    })}
                </Grid>

            </div>
        </div>
    )
}

export default FenceTypes;