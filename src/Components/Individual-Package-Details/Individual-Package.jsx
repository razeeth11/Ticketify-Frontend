import {
  Box,
  Button,
  Grid,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { indicationStyle } from "../Home-Category-Package/CategoryPackages";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ModeOfTravelRoundedIcon from "@mui/icons-material/ModeOfTravelRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShareIcon from "@mui/icons-material/Share";
import { useParams } from "react-router-dom";
import { flexColumn, flexRow, flexRowSpaceBetween } from "../../commonStyles";
import { tourPackageList } from "../PackagesSection/PackagesSection";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { BookingSectionContainer } from "./Booking-Section-Container";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect } from "react";
import { VerticalLinearStepper } from "./Itinerray-Section";
import { MapSectionIframe } from "../Map-Section/Map-Section-Iframe";
import { PackageQueryForm } from "./Package-Query-Form";

export const IndividualPackage = () => {
  const { country } = useParams();
  const theme = useTheme();
  const matchesmd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <Grid
      container
      sx={{
        p: { xs: "0 15px", md: "0 80px", lg: "0 100px" },
        ...flexColumn,
        gap: "20px",
      }}
    >
      {/* top page indication section */}
      <Grid item xs={12}>
        <Box sx={{ ...flexRow, gap: "10px", padding: "15px 5px" }}>
          <Typography sx={indicationStyle}>Home</Typography>
          <KeyboardArrowRightRoundedIcon />
          <Typography sx={indicationStyle}>Package</Typography>
          <KeyboardArrowRightRoundedIcon />
          <Typography
            sx={{ ...indicationStyle, textTransform: "capitalize", opacity: 1 }}
          >
            {country}
          </Typography>
        </Box>
      </Grid>

      {/* package title section */}
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              md: "28px",
              fontWeight: 500,
              maxWidth: "700px",
              textDecoration: "underline",
            },
          }}
        >
          Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine
          Tour
        </Typography>
      </Grid>

      {/* package details section */}
      <Grid item xs={12}>
        <Box sx={{ ...flexRowSpaceBetween }}>
          <Box sx={{ ...flexRow, gap: "20px" }}>
            <Box sx={{ ...flexRow, gap: "10px" }}>
              <Rating
                name="read-only"
                value={3}
                readOnly
                sx={{ fontSize: "16px" }}
              />
              <Typography sx={{ fontSize: "12px" }}>4.8</Typography>
            </Box>
            <Box sx={{ ...flexRow, gap: "10px" }}>
              <ModeOfTravelRoundedIcon
                sx={{ fontSize: "18px", color: "#717171" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  textTransform: "capitalize",
                  color: "#717171",
                }}
              >
                paris, france
              </Typography>
            </Box>
          </Box>
          <Box sx={{ ...flexRow, gap: "20px" }}>
            <Box sx={{ ...flexRow, gap: "5px" }}>
              <ShareIcon sx={{ fontSize: "24px", color: "#717171" }} />
              {!matchesmd && (
                <Typography
                  sx={{
                    fontSize: "14px",
                    textTransform: "capitalize",
                    color: "#717171",
                  }}
                >
                  Share
                </Typography>
              )}
            </Box>
            <Box sx={{ ...flexRow, gap: "5px" }}>
              <FavoriteRoundedIcon
                sx={{ fontSize: "24px", color: "#717171" }}
              />
              {!matchesmd && (
                <Typography
                  sx={{
                    fontSize: "14px",
                    textTransform: "capitalize",
                    color: "#717171",
                  }}
                >
                  wishlist
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* package image section */}
      <Grid container sx={{ position: "relative" }}>
        {tourPackageList.map((item, index) => (
          <Grid
            key={index}
            item
            xs={index === 0 ? 12 : 6}
            md={index === 0 ? 8 : 4}
            sx={{ display: matchesmd && index != 0 && "none" }}
          >
            <Box
              sx={{
                height: "300px",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                textAlign: "center",
                m: 1,
              }}
            ></Box>
          </Grid>
        ))}
        <Button
          sx={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            background: "#eb662b",
            color: "#FFFFFF",
            textTransform: "capitalize",
            borderRadius: "50px",
            padding: "10px 20px",
            width: "min-content",
            letterSpacing: "3px",
            whiteSpace: "nowrap",
          }}
        >
          <CollectionsRoundedIcon /> &nbsp; Gallery
        </Button>
      </Grid>

      {/* package description details */}
      <Grid
        container
        sx={{
          mt: { xs: 0, md: 3 },
          mb: 5,
          ...flexRowSpaceBetween,
          alignItems: "start",
        }}
      >
        {/* left container  */}

        <Grid item xs={12} md={7.5}>
          <Stack>
            {/* trips details section */}

            <Box sx={{ ...flexRowSpaceBetween, flexWrap: "wrap", gap: "15px" }}>
              {[1, 2, 3, 4].map((item, index) => (
                <Box key={index} sx={{ ...flexRow, gap: "10px" }}>
                  <AccessTimeRoundedIcon
                    sx={{
                      border: "0.5px solid #717171",
                      borderRadius: "5px",
                      p: "5px",
                      fontSize: "24px",
                    }}
                  />
                  <Box sx={{ ...flexColumn }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
                      Duration
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#717171" }}>
                      3 Days 4 Nights
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* package overview section */}

            <Grid item xs={12}>
              <Box sx={{ ...flexColumn, gap: "20px", m: "50px 0" }}>
                <Typography
                  sx={{ fontSize: { xs: "24px", md: "28px" }, fontWeight: 600 }}
                >
                  Tour Overview
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  The Phi Phi archipelago is a must-visit while in Phuket, and
                  this speedboat trip whisks you around the islands in one day.
                  Swim over the coral reefs of Pileh Lagoon, have lunch at Phi
                  Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and
                  Maya Bay, immortalized in "The Beach." Boat transfers, snacks,
                  buffet lunch, snorkeling equipment, and Phuket hotel pickup
                  and drop-off all included.
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 500 }}
                >
                  Tour Highlights
                </Typography>
                <ul>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <li
                      style={{ margin: "10px 0", fontSize: "14px" }}
                      key={index}
                    >
                      Experience the thrill of a speedboat to the stunning Phi
                      Phi Islands
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>

            {/* package includes details */}
            <Stack>
              <Typography
                sx={{ fontSize: { xs: "24px", md: "28px" }, fontWeight: 600 }}
              >
                What's included
              </Typography>
              <Grid container sx={{ m: "30px 0" }}>
                <Grid item xs={12} md={6}>
                  <Stack sx={{ gap: "15px", mb: 10 }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                      <Box
                        key={index}
                        sx={{ ...flexRow, alignItems: "start", gap: "10px" }}
                      >
                        <DoneRoundedIcon
                          sx={{
                            color: "#FFFFFF",
                            background: "#63B07A",
                            fontSize: "16px",
                            padding: "3px",
                            borderRadius: "50%",
                          }}
                        />
                        <Typography sx={{ fontSize: "14px" }}>
                          Mapla vanakam Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack sx={{ gap: "15px", mb: 10 }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                      <Box
                      key={index}
                        sx={{ ...flexRow, alignItems: "start", gap: "10px" }}
                      >
                        <CloseRoundedIcon
                          sx={{
                            color: "#FFFFFF",
                            background: "red",
                            fontSize: "16px",
                            padding: "3px",
                            borderRadius: "50%",
                          }}
                        />
                        <Typography sx={{ fontSize: "14px" }}>
                          Mapla vanakam Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>


            {/* itenirary section  */}
            <Stack sx={{gap:"40px",mb:10}}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px" },
                  fontWeight: 600,
                }}
              >
                Itinerary Overview
              </Typography>
              <VerticalLinearStepper />
            </Stack>


            {/* map ifram section */}

            <Stack sx={{gap:"30px",mb:10}}>
            <Typography
                sx={{
                  fontSize: { xs: "24px", md: "28px" },
                  fontWeight: 600,
                }}
              >
                Map Overview
              </Typography>
              <Box sx={{width:"100%",border:'1px solid #717171'}}>
              <MapSectionIframe/>
              </Box>
            </Stack>


            {/* package query form section */}

            <Stack sx={{p:2,border:"1px solid #717171"}}>
              <PackageQueryForm/>
            </Stack>
          </Stack>
        </Grid>

        {/* right container */}

        <Grid item xs={12} md={4}>
          <Box sx={{ m: "0 10px" }}>
            <BookingSectionContainer />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
