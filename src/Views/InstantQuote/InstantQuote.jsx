// Views/InstantQuote/InstantQuote.jsx
import './InstantQuote.css'; // CSS import
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet";

function InstantQuote() {
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Helmet>
                <title>Instant Quote | Nate's Fence and Gate</title>
                <meta 
                    name="description" 
                    content="Get an instant fence quote using our virtual fence designer. Follow simple steps to design your fence and receive your estimate immediately." 
                />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            {isXsScreen || isSmScreen ? null : (
                <div
                    className='instant-quote-hero'
                    style={{
                        position: 'relative',
                        height: '80vh',
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
                            backgroundImage: "url('images/chain-link/chain-link-1-main.jpeg')",
                            backgroundSize: 'cover',
                            opacity: 0.3,
                            zIndex: -1,
                        }}
                    />
                    <div
                        className='content'
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div className='black-background' style={{ width: '65%', paddingTop: '20px' }}>
                            <header style={{
                                border: '2px solid #0283AB',
                                alignSelf: 'center',
                                backgroundColor: 'black',
                                color: 'white',
                                padding: '10px 20px',
                                opacity: 0.65,
                                fontSize: '2.5rem',
                                textAlign: 'center'
                            }}>
                                Virtual Fence Designer<br />Instant Fence Quote
                            </header>
                        </div>
                        <div className='instructions' style={{ borderTop: '3px solid #102942', width: '65%', marginTop: '20px' }}>
                            <h1 style={{ fontSize: '2rem' }}>
                                How to use our <span style={{ color: '#0283AB' }}>virtual fence builder</span>
                            </h1>
                            <ol style={{ textAlign: 'left', margin: '0 auto' }}>
                                <li>1. Enter your name, email, and phone number – click Next.</li>
                                <li>2. Enter the address at which you'd like to get a free fence quote – click Next.</li>
                                <li>3. Once you see your home, select the service you're seeking (i.e., Build a Fence, Add a Gate(s), or Fence Removal).</li>
                                <li>4. Use cursor to click first point for fence and move cursor to fence end point – click to set the end of fence.</li>
                                <li>5. Repeat step 4 until you have completed all sides of your fence.</li>
                                <li>6. Click <span className="red">red</span> Next button to add gates to your fence – Click <span className="red">red</span> Next button once you have added gate(s).</li>
                                <li>7. Select your fence material, style, color & height – Click <span className="red">red</span> Next button.</li>
                                <li>8. You will see your fence estimate INSTANTLY. Click <span className="red">red</span> Next button to complete.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}
            <iframe 
                src="https://qualify.mysalesman.com/?EC6C557F" 
                title="Instant Quote Form"
                style={{ width: '100%', height: isSmScreen || isXsScreen ? '600px' : '1000px', overflowX: 'scroll' }}
            ></iframe>
        </>
    );
}

export default InstantQuote;
