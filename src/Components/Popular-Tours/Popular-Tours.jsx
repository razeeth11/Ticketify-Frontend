import {
  Box,
  Grid,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { flexColumn, flexRow, flexRowSpaceBetween } from "../../commonStyles";
import ModeOfTravelRoundedIcon from "@mui/icons-material/ModeOfTravelRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

export const countryList = [
  {
    image: "https://fastwaytours.com/wp-content/uploads/2023/10/paris-1.jpg",
    countryName: "france",
    tours: 67,
  },
  {
    image:
      "https://delivery.gfobcontent.com/api/public/content/09695c6a4a1c4bf9b20287ad2905dfe4?v=ee77d09d",
    countryName: "italy",
    tours: 54,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRHhVShQh-uKyz8Xkd5lID2jCcpU0Sjhrp2SzBb11bM4gP9pjdQKTgZ8SHKR_D0DjPdp6F_2FyFO8bDT6LnRtJfMPlup39ma2rph8w8ww",
    countryName: "australia",
    tours: 89,
  },
  {
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPnD7qZa34fpONMMu9S75mRDeFcHUcjsTxv5LuH=w675-h390-n-k-no",
    countryName: "singapore",
    tours: 35,
  },
  {
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPnD7qZa34fpONMMu9S75mRDeFcHUcjsTxv5LuH=w675-h390-n-k-no",
    countryName: "singapore",
    tours: 35,
  },
];

export const PopularTours = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "background.primary",
        color: "text.primary",
        mt:{xs:"80px",md:"100px"},
      }}
    >
      <Box
        sx={{ ...flexRowSpaceBetween, cursor: "pointer", mb: { xs: 2, md: 3 } }}
      >
        <Typography
          sx={{ fontSize: { xs: "24px", md: "28px" }, fontWeight: 500 }}
        >
          Top 5 Popular Trips
        </Typography>
      </Box>
      <PopularListSlider />
    </Grid>
  );
};

function PopularListSlider() {
  const theme = useTheme();
  const matchessm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesmd = useMediaQuery(theme.breakpoints.down("md"));
  const matcheslg = useMediaQuery(theme.breakpoints.down("lg"));
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: matchessm ? 1 : matchesmd ? 2 : matcheslg ? 3 : 5,
    slidesToScroll: matchessm ? 1 : matchesmd ? 2 : matcheslg ? 3 : 5,
    autoplay: false,
    speed: 1000,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {countryList.map((item, index) => (
        <Grid
          key={index}
          sx={{
            color: "#05073c",
            cursor: "pointer",
          }}
          // onClick={() => navigate(`/country/${item.countryName}`)}
        >
          <Box
            sx={{
              m: 0.5,
              border: "0.5px solid lightgrey",
              background: "#FFFFFF",
              p: 1,
              borderRadius: "5px",
            }}
          >
            <Box>
              <img
                src={item.image}
                alt={item.countryName}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </Box>
            <Box sx={{ ...flexColumn, gap: "10px", marginTop: "10px" }}>
              <Box sx={{ ...flexRow, gap: "5px" }}>
                <ModeOfTravelRoundedIcon
                  sx={{ fontSize: "18px", color: "#717171" }}
                />
                <Typography
                  sx={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                    color: "#717171",
                  }}
                >
                  paris, france
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                Centipede Tour - Guided Arizona Desert Tour by ATV
              </Typography>
              <Box sx={{ ...flexRow, gap: "10px" }}>
                <Rating
                  name="read-only"
                  value={3}
                  readOnly
                  sx={{ fontSize: "16px" }}
                />
                <Typography sx={{ fontSize: "12px" }}>4.8</Typography>
              </Box>
              <Box
                sx={{
                  ...flexRowSpaceBetween,
                  borderTop: "1px solid #717171",
                  p: "10px 0",
                }}
              >
                <Box sx={{ ...flexRow, gap: "5px" }}>
                  <AccessTimeRoundedIcon sx={{ fontSize: "20px" }} />
                  <Typography sx={{ fontSize: "12px" }}>4 days</Typography>
                </Box>
                <Box sx={{ ...flexRow, gap: "5px" }}>
                  <Typography sx={{ fontSize: "12px" }}>From</Typography>
                  <Typography sx={{fontWeight:600}}>$200</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Slider>
  );
}
