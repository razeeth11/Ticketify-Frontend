import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Checkbox, Grid } from "@mui/material";
import { filterList } from "./data";

const Accordion = styled((props) => <MuiAccordion disableGutters {...props} />)(
  ({ theme }) => ({
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  })
);

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    padding: 18,
    margin: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const FilterSection = () => {
  const [expanded, setExpanded] = React.useState(0);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid
      sx={{
        background: "#eb662b",
        borderRadius: "5px",
        border: "1px solid white",
      }}
    >
      <Typography
        sx={{
          color: "#FFFFFF",
          fontWeight: 500,
          textAlign: "center",
          margin: 3,
        }}
      >
        When are you traveling?
      </Typography>
      {filterList.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary>
            <Typography sx={{ textTransform: "capitalize" }}>
              {item.type}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.options.map((item1, index1) => (
              <Box key={index1} sx={{ m: 0.5 }}>
                <Checkbox {...label} />
                {item1}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
};
