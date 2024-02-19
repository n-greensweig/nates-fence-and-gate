// Imports for FAQ accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react';

// Responsive imports
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function FaqAccordion(props) {

    const [expanded, setExpanded] = useState(false);

    // Only expand the accordion if it is not already expanded
    const handleAccordionChange = () => setExpanded(!expanded);

    // Check the screen size for responsive design
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Accordion style={{ margin: '0 auto', width: isXsScreen || isSmScreen ? '80%' : '50%' }}>
            <AccordionSummary
                className="summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleAccordionChange}>
                <h3 style={{ fontWeight: expanded ? 'bold' : 'normal' }}>{props.question}</h3>
            </AccordionSummary>
            {expanded && (
                <AccordionDetails>
                    <p className="details">{props.answer}</p>
                </AccordionDetails>
            )}
        </Accordion>
    );
}

export default FaqAccordion;