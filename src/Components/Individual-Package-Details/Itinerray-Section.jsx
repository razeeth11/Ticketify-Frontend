
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { useState,useEffect } from "react";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { Box, Typography } from "@mui/material";

const steps = [
    {
      label: "Day 1",
      description: `For each ad campaign that you create, you can control how much
                  you're willing to spend on clicks and conversions, which networks
                  and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Day 2",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Day 3",
      description: `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`,
    },
  ];
  
  export const VerticalLinearStepper=()=>{
    const [activeStep, setActiveStep] = useState(0);
  
    const handleReset = (index) => {
      setActiveStep(index);
    };
  
    const CustomStepIcon = ({ icon }) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "#eb662b",
          color: "white",
        }}
      >
        {icon == 1 ? (
          <PlayCircleFilledWhiteRoundedIcon />
        ) : (
          <FiberManualRecordRoundedIcon />
        )}
      </Box>
    );
  
    return (
      <Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step
              key={step.label}
              sx={{
                "& .MuiStepIcon-root": {
                  color: "#eb662b",
                },
                "& .MuiStepIcon-root.Mui-completed": {
                  color: "#eb662b",
                },
              }}
            >
              <StepLabel
                StepIconComponent={CustomStepIcon}
                onClick={() => handleReset(index)}
                sx={{
                  cursor: "pointer",
                  "& .MuiStepLabel-label": {
                    color: "#eb662b !important", // Always apply this color
                    fontWeight: 500,
                  },
                  "& .Mui-disabled": {
                    cursor: "pointer", // Allow clicking even when 'disabled'
                  },
                  "& .MuiStepLabel-iconContainer": {
                    color: "#eb662b !important", // Ensure the icon matches the label color
                  },
                }}
              >
                {step.label}
              </StepLabel>
              <StepContent
                sx={{
                  "& .MuiStepContent-root": {
                    background: "#eb662b",
                  },
                }}
              >
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }