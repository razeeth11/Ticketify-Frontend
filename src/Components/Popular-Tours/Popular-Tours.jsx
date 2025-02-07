import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { flexRowSpaceBetween } from "../../commonStyles";

const countryList = [
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
];

export const PopularTours = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "background.primary",
        color: "text.primary",
        p: { xs: "40px 15px", md: "40px 80px" },
      }}
    >
      <Box sx={{ ...flexRowSpaceBetween, cursor: "pointer", mb: 5 }}>
        <Typography
          sx={{ fontSize: { xs: "24px", md: "28px" }, fontWeight: 500 }}
        >
          Top 4 Popular Trips
        </Typography>
      </Box>
      <PopularListSlider />
    </Grid>
  );
};

function PopularListSlider() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchessm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesmd = useMediaQuery(theme.breakpoints.down("md"));
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: matchessm ? 1 : 4,
    //   slidesToScroll:  matchessm ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {countryList.map((item, index) => (
        <Box
          key={index}
          sx={{
            minWidth: "250px",
            borderRadius: 0,
            background: "#FFFFFF",
            color: "#05073c",
            cursor: "pointer",
            border: "0.5px solid lightgrey",
          }}
          // onClick={() => navigate(`/country/${item.countryName}`)}
        >
          <Box>
            <img
              src={item.image}
              alt={item.countryName}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ p: 1.5 }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 500,
                textTransform: "capitalize",
              }}
            >
              {item.countryName}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                textTransform: "capitalize",
                color: "#717171",
              }}
            >
              {item.tours}+ tours
            </Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
}
