// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function About() {

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 5%',
        }}>
            <h1 style={{ fontSize: '2.5rem' }}>About</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2.5%' }}>Nate's Fence and Gate strives to give homeowners a unique and affordable fence experience.</h2>
            <div className="content" style={{
                display: 'flex',
                flexDirection: isSmScreen || isXsScreen ? 'column' : 'row',
            }}>

                <div className="content-left" style={{
                    display: 'flex', flexDirection: 'column',
                    width: isSmScreen || isXsScreen ? '100%' : '50%',
                    textAlign: 'left'
                }}>

                    <h2 style={{ fontWeight: 'bold' }}><i>Our Goal</i></h2>
                    <p>Our goal is to provide everyone a comfortable outdoor living space, security for pets, children,
                        privacy from busy roads, neighbors and add curb appeal to your property! Whatever your home
                        fencing needs may be we got you covered.</p>
                </div>

                <div className="content-right" style={{
                    display: 'flex', flexDirection: 'column',
                    width: isSmScreen || isXsScreen ? '100%' : '50%',
                    textAlign: 'left'
                }}>

                    <h2 style={{ fontWeight: 'bold' }}><i>Our Standards</i></h2>
                    <p>We offer innovative post pounding method on all our installations on every type of fence we install.
                        What others would consider upgrades is our standard run of the mill. When it comes to materials,
                        we drive thicker gauge steel in the ground for all of our fence systems and all post are driven 4-5’
                        in depth. We do NOT subcontract our jobs, we pride ourselves on quality control any fence installed by us is
                        done in house! Which allows us to streamline a smooth process from consultation to installation!

                        At our company, we take pride in using innovative post pounding methods for all fence installations.
                        Unlike others, what they consider upgrades, we consider standard. We use thicker gauge steel and drive
                        the posts 4-5' deep. We also don't subcontract our jobs, ensuring quality control. Our in-house team ensures
                        a smooth process from consultation to installation! 🛠️🏡</p>

                </div>

            </div>
        </div>
    )
}

export default About;