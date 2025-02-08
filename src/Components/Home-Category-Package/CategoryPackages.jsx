import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import IndiaImage from "../../Images/indiaimage.webp";
import InternationalImage from "../../Images/internationalimage.webp";
import HoneymoonImage from "../../Images/honeymoonimage.jpg";
import EuropeImage from "../../Images/europeimage.webp";
import EducationalImage from "../../Images/eduationalimage.webp";
import { useParams } from "react-router-dom";
import { flexRow, flexRowSpaceBetween } from "../../commonStyles";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { FilterSection } from "./Filter-Section";
import { TourCard } from "./Tour-Card";

export let Image;
export const CategoryPackage = () => {
  const { packageCategory } = useParams();
  const theme = useTheme();
  const matcheslg = useMediaQuery(theme.breakpoints.down("lg"));
  switch (packageCategory) {
    case "india tour packages":
      Image = IndiaImage;
      break;
    case "international tour packages":
      Image = InternationalImage;
      break;
    case "honeymoon tour packages":
      Image = HoneymoonImage;
      break;
    case "europe tour packages":
      Image = EuropeImage;
      break;
    case "educational tour packages":
      Image = EducationalImage;
      break;
  }

  const indicationStyle = { fontSize: "12px", fontWeight: 500, opacity: 0.4 };
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
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "300px", md: "600px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "36px" },
            color: "#FFFFFF",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          {packageCategory}
        </Typography>
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
            {packageCategory}
          </Typography>
        </Box>
      </Grid>
      <Grid container sx={{ margin: { xs: "0px", md: "30px 80px" } }}>
        <Grid item xs={0} lg={2.5}>
          {!matcheslg && (
            <Box>
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
