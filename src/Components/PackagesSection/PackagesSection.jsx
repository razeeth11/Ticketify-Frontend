import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { flexColumn } from "../../commonStyles";
import IndiaImage from "../../Images/indiaimage.webp";
import InternationalImage from "../../Images/internationalimage.webp";
import HoneymoonImage from "../../Images/honeymoonimage.jpg";
import EuropeImage from "../../Images/europeimage.webp";
import EducationalImage from "../../Images/eduationalimage.webp";
import { Link } from "react-router-dom";

const tourPackageList = [
  {
    image: IndiaImage,
    name: "india tour packages",
  },
  {
    image: InternationalImage,
    name: "international tour packages",
  },
  {
    image: HoneymoonImage,
    name: "honeymoon tour packages",
  },
  {
    image: EuropeImage,
    name: "europe tour packages",
  },
  {
    image: EducationalImage,
    name: "educational tour packages",
  },
];

export const PackagesSection = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "background.primary",
        color: "text.primary",
        mt:{xs:"80px",md:"100px"},
      }}
    >
      <Typography
        sx={{ fontSize: {xs:"24px",md:"28px"}, fontWeight: 500, color: "text.primary", mb: 3 }}
      >
        Tour Packages
      </Typography>
      <Grid container>
        {tourPackageList.map((item, index) => (
          <Grid
            key={index}
            item
            xs={index === 0 ? 12 : 6}
            md={index === 0 ? 8 : 4}
          >
            <Box
              sx={{
                height: { xs: "200px", md: "300px" },
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                textAlign: "center",
                m: 1,
              }}
            >
              <Box
                sx={{
                  ...flexColumn,
                  justifyContent: "center",
                  background: "rgba(60, 60, 60, 0.5)",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "32px" },
                    color: "#FFFFFF",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  {item.name}
                </Typography>
                <Link to={`/packages/${item.name}`}>
                  <Button
                    sx={{
                      background: "#eb662b",
                      color: "#FFFFFF",
                      padding: "5px 25px",
                      borderRadius: "0",
                      letterSpacing: "3px",
                      mt: 2,
                    }}
                  >
                    TOURS
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
