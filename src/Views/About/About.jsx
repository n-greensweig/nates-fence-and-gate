// Responsive imports
import { useTheme, useMediaQuery } from "@mui/material";
import Faq from "../FAQ/FAQ";

import { useEffect } from 'react';

function About() {

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        document.title = "About";
    }, []);

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

            {/* Galvanized steel info */}
            <div style={{ marginTop: '5%', }}>
                <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', }}>Galvanized steel fence posts offer several advantages over wood posts:</h1>
                <ol style={{ textAlign: 'left' }}>
                    <li><span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Corrosion Resistance:</span> Galvanized steel is coated with a layer of zinc, providing excellent corrosion resistance.
                        This protects the post from rust and deterioration caused by exposure to the elements.</li>
                    <li><span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Longevity:</span> The galvanization process significantly extends the lifespan of steel posts, making them more durable and
                        able to withstand harsh weather conditions over an extended period.</li>
                    <li><span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Low Maintenance:</span> Galvanized steel posts require minimal maintenance compared to wood posts.
                        They don't rot, warp, or decay, reducing the need for regular upkeep and replacements.</li>
                    <li><span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Strength and Stability:</span> Galvanized steel is inherently strong, providing robust support for the fence. This strength is crucial in
                        maintaining the stability of the fence, especially in areas prone to high winds or heavy loads.</li>
                    <li><span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Drivability:</span> With our driven system we are eliminating one of the most common issues with fence post here in Minnesota and that’s
                        frost heaving. Us driving post 4’+ beneath our frost line ensures their will not be any heaving, heaving has near 0% to occur when a post is driven
                        properly and to depth due to its minimal soil disruption.</li>
                </ol>
                <img src="images/galvanized-steel/galvanized-steel.JPEG" alt="Galvanized steel fence post"
                    style={{ width: '100%', height: 'auto' }} />
            </div>

            {/* FAQ section */}
            <div style={{ marginTop: '5%' }}>
                <Faq />
            </div>

        </div>
    )
}

export default About;