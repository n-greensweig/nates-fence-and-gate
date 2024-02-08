import ButtonComponent from "../../Components/Button/Button";
import ReviewCarousel from "../../Components/ReviewCarousel/ReviewCarousel";

import { useEffect } from "react";

function LandingPage() {

    useEffect(() => {
        document.title = "Nate's Fence and Gate";
    }, []);

    return (
        <div>
            <div className='bg-hero h-screen'>
                <h1 className='text-white text-7xl'>Nate's Fence and Gate</h1>
                <p className='text-white text-3xl font-thin'>Top rated fence & deck contractor in Minnesota</p>
                <div className='flex flex-row justify-center'>
                    <ButtonComponent type="Types" />
                    <ButtonComponent type="Quote" />
                </div>
                <p className='text-white text-2xl font-normal'>Learn More (will be at bottom of hero)</p>
            </div>


            <div
                className='content'
                style={{
                    position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                }}
            >
                <div className="button-group" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: '20px',
                    gap: '20px',
                }}>


                </div>
            </div>

            <div className="bottom-section">

                <div className="top-container"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    <div className="column"
                        style={{
                            width: '50%',
                        }}
                    >
                        <p>At Nate's Fence and Gate, we believe in providing the best possible service to our customers. We take great pride in our work and are committed to providing our customers with the highest quality products and services.</p>
                    </div>
                    <div className="column"
                        style={{
                            width: '50%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex', // Add this line
                            flexDirection: 'column'
                        }}
                    >
                        <ReviewCarousel />
                    </div>
                </div>

                <div className="bottom-container getting-started">
                    <h2>Getting Started:</h2>
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

        </div>
    )
}

export default LandingPage;