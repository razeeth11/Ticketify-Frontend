import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import WorldMap from "../../Images/worldmap.png";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { flexColumn, flexRow } from "../../commonStyles";

export const ContactSection = () => {
  const iconStyle = {
    fontSize: { xs: "18px", md: "28px" },
    background: "lightgrey",
    padding: "5px",
    borderRadius: "50%",
    color: "white",
  };
  const iconBoxStyle = {
    ...flexRow,
    gap: "10px",
    fontSize: "20px",
    fontWeight: 500,
  };
  const containerStyle = {
    ...flexColumn,
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    height: "100%",
  };
  const inputStyle = {
    borderRadius: 0,
    border: "1px solid #717171",
    outline: "none",
    padding: "10px",
    fontSize: "16px",
    width: "96%",
  };
  const buttonStyle = {
    borderRadius: 0,
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    background: "#eb662b",
    color: "white",
    letterSpacing: "5px",
    fontWeight: 700,
  };
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${WorldMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: { xs: "1000px", md: "800px" },
        mt: { xs: "80px", md: "80px" },
      }}
    >
      <Grid item xs={12} md={6}>
        <Box sx={containerStyle}>
          <Typography
            sx={{ fontSize: { xs: "24px", md: "32px" }, fontWeight: 600 }}
          >
            Stay Connected With us
          </Typography>
          <Box sx={iconBoxStyle}>
            <CallRoundedIcon sx={iconStyle} />
            +91 6836483044
          </Box>
          <Box sx={iconBoxStyle}>
            <EmailRoundedIcon sx={iconStyle} />
            mail@tourify.com
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={containerStyle}>
          <Box
            sx={{
              ...flexColumn,
              gap: "25px",
              width: { xs: "300px", sm: "450px" },
              padding: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "24px", fontWeight: 500, textAlign: "center" }}
            >
              Book Your Dream Vacay Today!
            </Typography>
            <input type="text" placeholder="Name *" style={inputStyle} />
            <input
              type="text"
              placeholder="City of Residence *"
              style={inputStyle}
            />
            <input type="email" placeholder="Email *" style={inputStyle} />
            {/* <Box>
              <Country /> */}
              <input
                type="number"
                placeholder="Phone number *"
                style={{ ...inputStyle }}
              />
            {/* </Box> */}
            <input
              type="text"
              placeholder="Tour Destination *"
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Date of Travel *"
              onFocus={(e) => (e.target.type = "date")}
              style={inputStyle}
            />
            <input
              type="number"
              placeholder="No of People *"
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Vacation Type *"
              style={inputStyle}
            />
            <Button sx={buttonStyle}>submit</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

function Country() {
  const [selected, setSelected] = useState("");
  return (
    <div style={{ width: "101%" }}>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        searchable={true}
        placeholder="Country Code *"
      />
    </div>
  );
}
