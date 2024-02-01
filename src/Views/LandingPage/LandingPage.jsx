import ButtonComponent from "../../Components/Button/Button";

function LandingPage() {
    return (
        <div>
            <div
                className='instant-quote-hero'
                style={{
                    position: 'relative',
                    height: '100vh',
                    backgroundSize: 'cover'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: "url('images/cedar/craftsman/craftsman-1.jpeg')",
                        backgroundSize: 'cover',
                        opacity: .3,
                        zIndex: -1,
                    }}
                />
                <div
                    className='content'
                    style={{
                        position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    }}
                >
                    <header style={{
                        fontSize: '2.5rem',
                        color: '#102942',
                    }}>Welcome to Nate's Fence and Gate
                    </header>

                    {/* Change text below */}
                    <h1 style={{
                        fontSize: '2rem',
                        color: '#102942',
                    }}>THE BEST FENCE & DECK CONTRACTOR IN THE TWIN CITIES METRO AREA</h1>

                    <div className="button-group" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: '20px',
                        gap: '20px',
                    }}>

                        <ButtonComponent type="Types" />
                        <ButtonComponent type="Quote" />
                    </div>
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
                        <p>{'[Image and review carousel here]'}</p>
                        <img src="images/cedar/craftsman/craftsman-1.jpeg" alt="Cedar fence"
                            style={{
                                height: '100px',
                                width: '100px',
                                alignSelf: 'center',
                            }}
                        />
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