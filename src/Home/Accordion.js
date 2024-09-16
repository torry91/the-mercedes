import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({ title, children }) => (
    <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content">
        {title}
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
);

export default AccordionItem;
