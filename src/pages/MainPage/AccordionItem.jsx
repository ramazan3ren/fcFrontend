import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionItem({ question, expanded, handleChange }) {
  return (
    <div>
      <Accordion
        sx={{ bgcolor: "#609966" }}
        onChange={handleChange(`panel${question.id}`)}
        expanded={expanded === `panel${question.id}`}
      >
        <AccordionSummary
          sx={{ borderRadius: "20px" }}
          expandIcon={<ExpandMoreIcon htmlColor="white" />}
          aria-controls={`panel${question.id}-content`}
          id={`panel${question.id}-header`}
        >
          <h1 className="font-montserrat text-white">{question.question}</h1>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#40513B", borderTopLeftRadius: "20px" ,borderTopRightRadius: "20px"}}>
          <p className="text-white">{question.answer}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
