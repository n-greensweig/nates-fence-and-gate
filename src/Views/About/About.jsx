// Views/About/About.jsx
import { useTheme, useMediaQuery } from "@mui/material";
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Faq from "../FAQ/FAQ";

function About() {
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        // Additional side-effects can be added here if needed.
    }, []);

    return (
        <div className='w-screen'>
            <Helmet>
                <title>About | Nate's Fence and Gate</title>
                <meta name="description" content="Learn about Nate's Fence and Gate: our goal, standards, and why we use galvanized steel posts for a unique and affordable fence experience." />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <div className='bg-xl-hero-about bg-no-repeat bg-center h-96 flex flex-col justify-center'>
                <h1 className='text-white text-7xl -translate-y-10'>About</h1>
                <h2 
                    className='text-white text-3xl -translate-y-5 font-thin'
                    style={{ padding: isXsScreen || isSmScreen ? '2% 2%' : null }}
                >
                    Nate's Fence and Gate strives to give homeowners a unique and affordable fence experience.
                </h2>
            </div>

            <div 
                className="flex justify-evenly py-10 bg-slate-100" 
                style={{ flexDirection: isSmScreen || isXsScreen ? 'column' : 'row' }}
            >
                <div className="w-1/3 sm:w-full xs:w-full sm:mb-16 xs:mb-16">
                    <h2 className='text-3xl'>Our Goal</h2>
                    <p className='mt-4 text-xl text-left xs:mr-8 ml-8'>
                        Our goal is to provide everyone with a comfortable outdoor living space, security for pets and children, and to add curb appeal to your property! Whatever your home needs may be, we've got you covered.
                    </p>
                </div>

                <div className="w-1/3 sm:w-full xs:w-full">
                    <h2 className='text-3xl'>Our Standards</h2>
                    <p className='mt-4 text-xl text-left xs:mr-8 ml-8'>
                        We offer innovative post-pounding methods for every type of fence we install. What others consider upgrades, we consider standard. When it comes to materials, we drive thicker gauge steel into the ground for all of our fence systems, with all posts being driven 4-5’ deep. We do <strong>NOT</strong> subcontract our jobs. Any fence we install is done in-house, and we pride ourselves on the quality control of each of our installations. This allows us to streamline a smooth process from consultation to installation! 🛠️🏡
                    </p>
                </div>
            </div>

            <div style={{ borderBottom: '4px solid #0283AB', width: '100%' }}></div>

            <div className='pt-10'>
                <h1 className='text-3xl mb-10'><strong>Why we use galvanized steel posts:</strong></h1>
                <div className='flex w-screen justify-evenly'>
                    <img 
                        src="images/galvanized-steel/galvanized-steel-1.JPEG" 
                        alt="Galvanized steel fence post" 
                        className='w-1/4 mb-14 sm:w-1/3 xs:w-1/3'
                    />
                    <img 
                        src="images/galvanized-steel/galvanized-steel-2.JPEG" 
                        alt="Galvanized steel fence post" 
                        className='w-1/4 mb-14 sm:w-1/3 xs:w-1/3'
                    />
                </div>
                <ol className='w-2/3 m-auto mb-10 text-left'>
                    <li className='text-xl pb-5 border-b-4'>
                        <strong>Corrosion Resistance</strong>: Galvanized steel is coated with a layer of zinc, which provides excellent corrosion resistance. This protection safeguards the post from rust and deterioration resulting from exposure to the elements.
                    </li>
                    <li className='text-xl pb-5 pt-5 border-b-4'>
                        <strong>Longevity</strong>: The galvanization process significantly extends the lifespan of steel posts, making them more durable and capable of withstanding harsh weather conditions over an extended period.
                    </li>
                    <li className='text-xl pb-5 pt-5 border-b-4'>
                        <strong>Low Maintenance</strong>: Galvanized steel posts require minimal maintenance compared to wood posts. They do not rot, warp, or decay, thereby reducing the need for regular upkeep and replacements.
                    </li>
                    <li className='text-xl pb-5 pt-5 border-b-4'>
                        <strong>Strength and Stability</strong>: Galvanized steel is inherently strong, providing robust support for the fence. This strength is crucial for maintaining the stability of the fence, especially in areas prone to high winds or heavy loads.
                    </li>
                    <li className='text-xl pb-5 pt-5 border-b-4'>
                        <strong>Drivability</strong>: With our driven system, we are eliminating one of the most common issues with fence posts here in Minnesota: frost heaving. Driving posts 4 feet or more beneath our frost line ensures there will not be any heaving, as heaving has a near 0% occurrence rate when a post is driven properly and to the correct depth, thanks to its minimal soil disruption.
                    </li>
                </ol>
            </div>

            <div style={{ borderBottom: '4px solid #102942', width: '100%' }}></div>

            <div className='py-1 bg-slate-100 pb-16'>
                <Faq />
            </div>
        </div>
    );
}

export default About;
