// FaqAccordion.jsx
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function FaqAccordion(props) {
  const [expanded, setExpanded] = useState(false);

  // Toggle accordion expansion
  const handleAccordionChange = () => setExpanded(!expanded);

  // Responsive design checks
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
        onClick={handleAccordionChange}
      >
        <h3 style={{ fontWeight: expanded ? 'bold' : 'normal' }}>{props.question}</h3>
      </AccordionSummary>
      {expanded && (
        <AccordionDetails>
          <div className="details" dangerouslySetInnerHTML={{ __html: props.answer }} />
        </AccordionDetails>
      )}
    </Accordion>
  );
}

export default FaqAccordion;
