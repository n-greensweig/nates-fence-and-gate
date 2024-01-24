// Imports for FAQ accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react';

function FaqAccordion(props) {

    const [expanded, setExpanded] = useState(false);

    // Only expand the accordion if it is not already expanded
    const handleAccordionChange = () => setExpanded(!expanded);

    return (
        <Accordion style={{ margin: '0 10%'}}>
            <AccordionSummary
            className="summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleAccordionChange}>
                <h3>{props.question}</h3>
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