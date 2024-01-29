import { useEffect } from "react";
import { Grid } from "@mui/material";
import TypeCard from "../../Components/TypeCard/TypeCard";

// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";


function FenceTypes() {

    const fenceTypes = [
        {
            name: 'Cedar',
            description: `We build all of our wood privacy fences with cedar wood on galvanized steel post. 
            The best part is you don’t need to sacrifice the natural beautiful look of a wood fence for the strength of steel, as we conceal the post with a cover board.`,
            image: 'images/cedar/craftsman/craftsman-1.jpeg',
            route: 'cedar'
        },
        {
            name: 'Vinyl',
            description: `Vinyl fencing is the perfect fence for those who want complete privacy and zero maintenance. 
            Available in white or tan featuring a 2x7 rail and 7/8” picket for a stronger more appealing fence.`,
            image: 'images/vinyl/vinyl-3.jpeg',
            route: 'vinyl'
        },
        {
            name: 'Ornamental',
            description: `Our steel ornamental option is a wonderful option for those looking for an open concept, 
            and maintenance free with its sleek powder coated black finish it goes with any property.`,
            image: 'images/ornamental/ornamental-1.jpeg',
            route: 'ornamental'
        },
        {
            name: 'Chain Link',
            description: `Chain link is perfect for creating a contained and safe, environment for children and pets. 
            We build our chain link with 8 gauge black vinyl wire for greater strength compared to box store quality chain link.`,
            image: 'images/chain-link/chain-link-1-main.jpeg',
            route: 'chain-link'
        },
        {
            name: 'Custom',
            description: `Do you have personal design you’d like to try? 
            Send us some photos and we will be more than willing to brainstorm solutions for you.`,
            image: 'images/custom/custom-2.jpeg',
            route: 'custom'
        },
    ];

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
            <p style={{ fontSize: '1rem' }}>Choosing the perfect fence is as unique as your needs and interests.
                Explore our wide range of fence types, tailored to match your individual
                requirements and preferences.</p>

            <div className="content" style={{ marginTop: '10%', fontSize: '2rem' }}>
                <p>View Fence Types</p>
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
                    {fenceTypes.map((fenceType, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}
                                style={{
                                    height: '500px', // Make wider than it is tall on small screens?
                                    padding: '0px',
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