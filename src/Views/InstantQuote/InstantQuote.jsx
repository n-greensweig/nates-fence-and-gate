import './InstantQuote.css'; // CSS import

// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function InstantQuote() {

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <h1>How to use our <span className="red">virtual fence builder</span></h1>
            <ol>
                <li>1. Enter your Name, Email & Phone Number – Click Next.</li>
                <li>2. Enter your Address City, State Zip Code – Click Find Your Home.</li>
                <li>3. Once you see your home, click Add Your First Fence.</li>
                <li>4. Use cursor to click first point for fence and move cursor to fence end point – click to set the end of fence.</li>
                <li>5. Repeat step 4 until you have completed all sides of your fence.</li>
                <li>6. Click <span className="red">RED</span> Add Gate button to add gates to your fence – Click <span className="red">RED</span> Next button once you have added gates.</li>
                <li>7. Select your fence material, style, color & height – Click <span className="red">RED</span> Next button.</li>
                <li>8. You will see your fence ESTIMATE INSTANTLY. Click <span className="red">RED</span> Next button.</li>
            </ol>
            <iframe src="http://myfence.mysalesman.com/?partnerCode=1226a28ae4ce" title="Instant Quote Form"
                style={{ width: '100%', height: isSmScreen || isXsScreen ? '600px' : '1000px', overflowX: 'scroll' }}></iframe>
        </>
    )
}

export default InstantQuote;