import { Box, Card, Rating, Typography } from "@mui/material";
import { flexColumn, flexRow, flexRowSpaceBetween } from "../../commonStyles";
import ModeOfTravelRoundedIcon from "@mui/icons-material/ModeOfTravelRounded";
import IndiaImage from "../../Images/indiaimage.webp";

export const TourCard = () => {
    return (
      <Card sx={{borderRadius:"10px"}}>
        <Box sx={{ height: "200px" }}>
          <img
            src={IndiaImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ ...flexColumn, gap: "10px", p:2 }}>
          <Box sx={{ ...flexRowSpaceBetween }}>
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
                fontSize: "12px",
                textTransform: "capitalize",
                color: "#717171",
              }}
            >
              4 Days 3 Nights
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              textTransform: "capitalize",
            }}
          >
            Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine
            Tour
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
          <Typography sx={{ fontSize: "14px" }}>
            The Phi Phi archipelago is a must-visit while in Phuket, and this
            speedboat trip.
          </Typography>
        </Box>
      </Card>
    );
  };