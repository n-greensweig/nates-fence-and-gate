import ButtonComponent from "../../Components/Button/Button";
import ReviewCarousel from "../../Components/ReviewCarousel/ReviewCarousel";

import { useEffect } from "react";

function LandingPage() {

    useEffect(() => {
        document.title = "Nate's Fence and Gate";
    }, []);

    return (
        <div className='w-full h-full'>
            <div className='bg-hero h-screen flex flex-col space-y-5 justify-center'>
                <h1 className='text-white text-7xl'>Nate's Fence and Gate</h1>
                <p className='text-white text-3xl font-thin'>Top-rated fence contractor in Minnesota</p>
                <div className='flex flex-row justify-center'>
                    <ButtonComponent type="Types" />
                    <ButtonComponent type="Quote" />
                </div>
                <p className='text-white text-2xl font-normal'>Learn More (will be at bottom of hero)</p>
            </div>

            <div className='flex flex-row bg-slate-100 h-50vh py-14'>
                <div className='w-1/2 flex justify-center '>
                    <div className='w-1/2'>
                        <h2 className='text-3xl text-left border-l-4 border-nates-light-blue pl-24'>We believe in providing the best possible service to our customers. Taking great pride in our work, we are committed to providing our customers with the highest quality products and services.
                        </h2>
                    </div>
                </div>
                <div className='w-1/2'>
                    <ReviewCarousel />
                </div>
            </div>

            <div className="bottom-container getting-started mt-14">
                <h2 className='text-4xl'>Choose from our many different fence types</h2>
                <div className="button-divs"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '100%',
                        gap: '20px',

                    }}
                >

                    <div className="fence-types-group">
                        <p>View our fencing types</p>
                        {/* Change button text to just 'Fence Types' */}
                        <ButtonComponent type="Types" />
                    </div>
                    <div className="quote-groups">
                        <p>Get an instant quote</p>
                        <ButtonComponent type="Quote" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default LandingPage;