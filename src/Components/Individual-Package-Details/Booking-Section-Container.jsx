import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { flexColumn, flexRow, flexRowSpaceBetween } from "../../commonStyles";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import { useEffect, useState } from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const ticketCountStyle = {
  border: "1px solid red",
  p: "2px",
  width: "25px",
  height: "25px",
  border: "1px solid #e7e6e6",
};
const fontStyle = { fontSize: "14px" };
const ticketButtonStyle = {width:"100%",background:"#eb662b",color:"#FFFFFF",textTransform:"capitalize",padding:"15px",mt:2,borderRadius:"10px"}

export const BookingSectionContainer = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [youthCount, setYouthCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [buttonState, setButtonState] = useState(true);
  const [totalTicketAmount, setTotalTicketAmount] = useState(0);

  const price = [300, 240, 180];
  const adultCountMinus = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };
  const adultCountPlus = () => {
    setAdultCount(adultCount + 1);
  };
  const youthCountMinus = () => {
    if (youthCount > 0) {
      setYouthCount(youthCount - 1);
    }
  };
  const youthCountPlus = () => {
    setYouthCount(youthCount + 1);
  };
  const childCountMinus = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };
  const childCountPlus = () => {
    setChildCount(childCount + 1);
  };

    useEffect(() => {
        const totalAdultAmt = adultCount * price[0];
        const totalYouthAmt = youthCount * price[1];
        const totalChildAmt = childCount * price[2];

        setButtonState(adultCount == 0 && youthCount == 0 && childCount == 0)
        const totalRes = totalAdultAmt + totalYouthAmt + totalChildAmt;

        setTotalTicketAmount(totalRes);
    }, [adultCount, youthCount, childCount]);

  return (
    <Grid
      container
      sx={{
        p: 3,
        border: "1.5px solid #e7e6e6",
        borderRadius: "10px",
        ...flexColumn,
        gap: "20px",
      }}
    >
      <Grid
        xs={12}
        sx={{
          ...flexRow,
          justifyContent: "center",
          gap: "5px",
          whiteSpace: "nowrap",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
          Book your Tour Now!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            border: "1px solid #e7e6e6",
            borderRadius: "10px",
            ...flexRow,
            gap: "15px",
            flexDirection: "row",
            p: "10px",
          }}
        >
          <CalendarTodayRoundedIcon
            sx={{
              fontSize: "26px",
              background: "#e7e6e6",
              padding: "10px",
              borderRadius: "5px",
            }}
          />

          <Box sx={{ ...flexColumn, gap: "5px" }}>
            <Typography sx={{ whiteSpace: "nowrap", mr: 3 }}>
              Travel Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                disablePast
                minDate={dayjs().add(7, "day")}
                defaultValue={dayjs().add(7, "day")}
                format="MMMM D, YYYY"
                sx={{
                  height: "15px",
                  "& .MuiInputBase-root": {
                    border: "1px solid none", // Adds border
                    borderRadius: "8px", // Rounds the corners
                    fontSize: "14px", // Adjusts font size
                    fontWeight: 500, // Adjusts font weight
                    color: "#717171", // Changes text color
                    mt: "-19px",
                    ml: "-15px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Removes default outline
                  },
                  "& .MuiInputAdornment-root svg": {
                    color: "#eb662b",
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid xs={12}>
          <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
            Tickets
          </Typography>

          {/* ticket select section  */}
          <Stack sx={{ gap: "15px", m: "25px 0" }}>
            <Box sx={{ ...flexRowSpaceBetween }}>
              <Box sx={{ ...flexRow, gap: "5px" }}>
                <Typography sx={fontStyle}>Adult</Typography>
                <Typography sx={{ ...fontStyle, fontWeight: 500 }}>
                  ${price[0]}
                </Typography>
              </Box>
              <Box sx={{ ...flexRow, gap: "10px" }}>
                <IconButton sx={ticketCountStyle} onClick={adultCountMinus}>
                  <RemoveRoundedIcon />
                </IconButton>
                {adultCount}
                <IconButton sx={ticketCountStyle} onClick={adultCountPlus}>
                  <AddRoundedIcon />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ ...flexRowSpaceBetween }}>
              <Box sx={{ ...flexRow, gap: "5px" }}>
                <Typography sx={fontStyle}>Youth</Typography>
                <Typography sx={{ ...fontStyle, fontWeight: 500 }}>
                  ${price[1]}
                </Typography>
              </Box>
              <Box sx={{ ...flexRow, gap: "10px" }}>
                <IconButton sx={ticketCountStyle} onClick={youthCountMinus}>
                  <RemoveRoundedIcon />
                </IconButton>
                {youthCount}
                <IconButton sx={ticketCountStyle} onClick={youthCountPlus}>
                  <AddRoundedIcon />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ ...flexRowSpaceBetween }}>
              <Box sx={{ ...flexRow, gap: "5px" }}>
                <Typography sx={fontStyle}>Children</Typography>
                <Typography sx={{ ...fontStyle, fontWeight: 500 }}>
                  ${price[2]}
                </Typography>
              </Box>
              <Box sx={{ ...flexRow, gap: "10px" }}>
                <IconButton sx={ticketCountStyle} onClick={childCountMinus}>
                  <RemoveRoundedIcon />
                </IconButton>
                {childCount}
                <IconButton sx={ticketCountStyle} onClick={childCountPlus}>
                  <AddRoundedIcon />
                </IconButton>
              </Box>
            </Box>
          </Stack>

          {/* total calculation section */}
          <Grid container sx={{ borderTop: "1px solid #e7e6e6",padding:"20px 0" }}>
            <Box sx={{...flexRowSpaceBetween,width:"100%"}}>
              <Typography sx={{fontWeight:400}}>Total : </Typography>
              <Typography sx={{fontSize:"20px",fontWeight:400}}>$ {totalTicketAmount}</Typography>
            </Box>
            <Button sx={ticketButtonStyle} disabled={buttonState} >{buttonState ? "Select Tickets" : "Book now"}</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
