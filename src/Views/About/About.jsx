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
        <div className='w-screen'>
            <div className='3xl:bg-3xl-hero-about xl:bg-xl-hero-about h-96 flex flex-col justify-center'>
                <h1 className='text-white text-7xl -translate-y-10'>About</h1>
                <h2 className='text-white text-3xl -translate-y-5 font-thin'>Nate's Fence and Gate strives to give homeowners a unique and affordable fence experience</h2>
            </div>

            <div className="flex justify-evenly py-10 bg-slate-100" style={{
                flexDirection: isSmScreen || isXsScreen ? 'column' : 'row',
            }}>

                <div className="w-1/3 sm:w-full xs:w-full">

                    <h2 className='text-3xl'>Our Goal</h2>
                    <p className='mt-4 text-xl text-left xs:mr-8 ml-8'>Our goal is to provide everyone a comfortable outdoor living space, security for pets, children,
                        privacy from busy roads, neighbors and add curb appeal to your property! Whatever your home
                        fencing needs may be we got you covered.</p>
                </div>

                <div className="w-1/3 sm:w-full xs:w-full">
                    <h2 className='text-3xl'>Our Standards</h2>
                    <p className='mt-4 text-xl text-left xs:mr-8 ml-8'>We offer innovative post pounding methods on every type of fence we install.
                        What others consider upgrades, we consider run of the mill. When it comes to materials,
                        we drive thicker gauge steel in the ground for all of our fence systems and all posts are driven 4-5’ deep.
                        We do <strong>NOT</strong> subcontract our jobs. Any fence we install is done in house, and we pride ourselves on the quality control of
                        each of our installs. This allows us to streamline a smooth process from consultation to installation! 🛠️🏡</p>
                </div>
            </div>

            {/* Galvanized steel info */}
            <div className='pt-10'>
                <h1 className='text-3xl mb-10'><strong>Why we use galvanized steel posts:</strong></h1>
                <ol className='w-2/3 m-auto mb-10 text-left'>
                    <li className='text-xl pb-5 border-b-4'><strong>Corrosion Resistance</strong>: Galvanized steel is coated with a layer of zinc, providing excellent corrosion resistance.
                        This protects the post from rust and deterioration caused by exposure to the elements.</li>
                    <li className='text-xl pb-5 pt-5 border-b-4'><strong>Longevity</strong>: The galvanization process significantly extends the lifespan of steel posts, making them more durable and
                        able to withstand harsh weather conditions over an extended period.</li>
                    <li className='text-xl pb-5 pt-5 border-b-4'><strong>Low Maintenance</strong>: Galvanized steel posts require minimal maintenance compared to wood posts.
                        They don't rot, warp, or decay, reducing the need for regular upkeep and replacements.</li>
                    <li className='text-xl pb-5 pt-5 border-b-4'><strong>Strength and Stability</strong>: Galvanized steel is inherently strong, providing robust support for the fence. This strength is crucial in
                        maintaining the stability of the fence, especially in areas prone to high winds or heavy loads.</li>
                    <li className='text-xl pb-5 pt-5 border-b-4'><strong>Drivability</strong>: With our driven system we are eliminating one of the most common issues with fence post here in Minnesota and that’s
                        frost heaving. Driving post 4’+ beneath our frost line ensures their will not be any heaving, as heaving has near 0% occurrence rate when a post is driven
                        properly and to depth due to its minimal soil disruption.</li>
                </ol>
                <div className='flex w-screen justify-evenly'>
                    <img src="images/galvanized-steel/galvanized-steel-1.JPEG" alt="Galvanized steel fence post" className='w-1/3'>
                    </img>
                    <img src="images/galvanized-steel/galvanized-steel-2.JPEG" alt="Galvanized steel fence post" className='w-1/3'>
                    </img>
                </div>
            </div>

            {/* FAQ section */}
            <div className='py-14 bg-slate-100'>
                <Faq />
            </div>

        </div>
    )
}

export default About;