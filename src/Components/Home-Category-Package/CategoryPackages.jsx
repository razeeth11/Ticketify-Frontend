import { Box, Card, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import IndiaImage from "../../Images/indiaimage.webp";
import { useParams } from "react-router-dom";
import { flexRow, flexRowSpaceBetween } from "../../commonStyles";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { FilterSection } from "./Filter-Section";
import { TourCard } from "./Tour-Card";
import { useEffect } from "react";

export const indicationStyle = { fontSize: "12px", fontWeight: 500, opacity: 0.4 };
export const CategoryPackage = () => {
  const theme = useTheme();
  const { country } = useParams();
  const matcheslg = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const textStyles = { fontSize: { xs: "12px", md: "16px" }, fontWeight: 400 };

  return (
    <Grid container>
      {/* main image grid starts*/}
      <Grid
        item
        xs={12}
        sx={{
          ...flexRow,
          justifyContent: "center",
          backgroundImage: `url(${IndiaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "300px", md: "600px" },
        }}
      >
        <Card
          sx={{
            fontSize: { xs: "24px", md: "28px" },
            color: "#FFFFFF",
            fontWeight: 500,
            textTransform: "capitalize",
            background:"#eb662b",
            padding:"10px 30px",
            borderRadius:"50px"
          }}
        >
          {country} Packages
        </Card>
      </Grid>

      {/* main image grid ends*/}
      <Grid
        item
        xs={12}
        sx={{ margin: { md: "0px 80px" }, borderBottom: "1px solid #717171" }}
      >
        <Box sx={{ ...flexRow, gap: "10px", padding: "15px 5px" }}>
          <Typography sx={indicationStyle}>Home</Typography>
          <KeyboardArrowRightRoundedIcon />
          <Typography sx={indicationStyle}>Package</Typography>
          <KeyboardArrowRightRoundedIcon />
          <Typography
            sx={{ ...indicationStyle, textTransform: "capitalize", opacity: 1 }}
          >
            {country} Packages
          </Typography>
        </Box>
      </Grid>
      <Grid container sx={{ margin: { xs: "0px", md: "30px 80px" } }}>
        <Grid item xs={0} lg={2.5}>
          {!matcheslg && (
            <Box sx={{position:"sticky",top:"80px"}}>
              <FilterSection />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} lg={9.5} sx={{}}>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ ...flexRowSpaceBetween, padding: "10px" }}>
                <Typography sx={textStyles}>434 Results</Typography>
                <Box sx={{ ...flexRow, gap: "5px" }}>
                  <Typography sx={textStyles}>Sort by :</Typography>
                  <Typography>Relevance</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ padding: "10px" }}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <Grid item xs={12} sm={6} lg={4} xl={4} key={index}>
                    <TourCard />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
