import {
  Avatar,
  Box,
  Card,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { flexColumn, flexRow } from "../../commonStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { countryList } from "../Popular-Tours/Popular-Tours";

export const ReviewSection = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "background.primary",
        color: "text.primary",
        mt: { xs: "100px", md: "200px" },
      }}
    >
      <Box
        sx={{
          ...flexRow,
          justifyContent: "center",
          cursor: "pointer",
          mb: { xs: 5, md: 10 },
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "24px", md: "28px" }, fontWeight: 500 }}
        >
          Customers Review
        </Typography>
      </Box>
      <ReviewList />
    </Grid>
  );
};

function ReviewList() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
          <Card
            sx={{
              background: "#FFFFFF",
              p: 3,
              maxWidth:"300px",
              margin:"0 auto"
            }}
          >
            <Box>
              <Avatar
                src={item.image}
                alt={item.countryName}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  margin: "0 auto",
                }}
              />
            </Box>
            <Box
              sx={{
                ...flexColumn,
                alignItems: "center",
                gap: "5px",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <Box sx={{ ...flexRow, gap: "5px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    textTransform: "capitalize",
                    color: "#eb662b",
                    fontWeight: 500,
                  }}
                >
                  Customer name
                </Typography>
              </Box>
              <Box sx={{ ...flexRow, gap: "10px" }}>
                <Rating
                  name="read-only"
                  value={3}
                  readOnly
                  sx={{ fontSize: "16px" }}
                />
                <Typography sx={{ fontSize: "12px" }}>4.8</Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "20px" },
                  fontWeight: 500,
                  textTransform: "capitalize",
                  mt: 3,
                  maxWidth: "450px",
                  lineHeight: "30px",
                }}
              >
                I had an amazing experience with this company. The service was
                top-notch, and the staff was incredibly friendly. I highly
                recommend them!
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Slider>
  );
}
