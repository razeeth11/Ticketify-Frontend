import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { flexRowSpaceBetween } from "../../commonStyles";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  {
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMchaaCzZGyDmXFVv7-VI05ouLTCpMABzzXoae6=w675-h390-n-k-no",
    countryName: "south korea",
    tours: 57,
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRPOO_I43JLYxe_3AO8ppfq4o9CeuMFAn53-dCYi_JylEM2wMJ-LiYOhqStAh0xDZiIdG5I59Rb8oDre1Vmx1HcMlyNhQZnpkA3RL77wQ",
    countryName: "egypt",
    tours: 90,
  },
  {
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQRO4eHdJOYXVW_9OfzyVlwQO4GHbaofuJ1kbyIVxyYdEnVRc_ZrkuPG9-hPRz7PaKcMa28EIycGMBnW0VFlEfoNSYnFwArxNyeV_eDmA",
    countryName: "germany",
    tours: 40,
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ3mqMbzV7TMbcKf1Kekhe_e-YYfJjEeTQxr5eV-asnHv61yqUTLxrb0Q_-vdtmlSnBVEwnjEoz8EkiuRfHH1isV3_5Mteq7bF3pj-wPg",
    countryName: "netherlands",
    tours: 49,
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR2d9FlM4co456nbrT5p1TVWYM8gIoNt5HNxJ5UEeoPWZDdd9LtR82pCrjJiyHTPHZOVpwghRqssLNTpSaFNkdiyNpClq0FLeqJma-rcA",
    countryName: "china",
    tours: 78,
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSGeHu8Bqk8KjF5fV6TBDnkmSXgn-J4p0MY6aNEOILS2rQWf78HWbHhLzLae74eE0MXmrNExDJl3Pqc_m7h9pWZsU7Yol1wZGqwTf-Big",
    countryName: "austria",
    tours: 32,
  },
];
export const CountrySection = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "background.primary",
        color: "text.primary",
        mt:{xs:"80px",md:"100px"},
      }}
    >
      <Box sx={{ ...flexRowSpaceBetween, cursor: "pointer", mb: {xs:2,md:3} }}>
        <Typography
          sx={{ fontSize: { xs: "24px", md: "28px" }, fontWeight: 500 }}
        >
          Trending Countries
        </Typography>
        <Typography>See All</Typography>
      </Box>
      <CountryListSlider />
    </Grid>
  );
};

function CountryListSlider() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchessm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesmd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesxl = useMediaQuery(theme.breakpoints.down("xl"));
  const settings = {
    dots:true,
    infinite: true,
    slidesToShow: matchessm ? 1 : matchesmd ? 3 : matchesxl ? 3 : 6,
    slidesToScroll: 1,
    autoplay:true,
    speed:1000,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {countryList.map((item, index) => (
        <Stack
          key={index}
          sx={{
            background: "#FFFFFF",
            color: "#05073c",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/packages/${item.countryName}/package-category`)}
        >
          <Card sx={{m:0.5,borderRadius:"10px"}}>
          <Box>
            <img
              src={item.image}
              alt={item.countryName}
              style={{ width: "100%", height: "200px", objectFit: "cover",borderRadius:"10px 10px 0 0" }}
            />
          </Box>
          <Box sx={{padding:"10px 15px"}}>
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
          </Card>
        </Stack>
      ))}
    </Slider>
  );
}