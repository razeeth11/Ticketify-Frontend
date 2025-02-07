import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image1 from "../../Images/image1.webp";
import Image2 from "../../Images/image2.avif";
import Image3 from "../../Images/image3.webp";
import Image4 from "../../Images/image4.jpeg";
import Image5 from "../../Images/image5.jpeg";
import Texture from "../../Images/shape.svg";
import { flexRow } from "../../commonStyles";
import { useEffect, useState } from "react";
import LocalActivityTwoToneIcon from "@mui/icons-material/LocalActivityTwoTone";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import DiamondTwoToneIcon from "@mui/icons-material/DiamondTwoTone";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";

export const LandingSection = () => {
  const theme = useTheme();
  const matches400 = useMediaQuery(theme.breakpoints.down(400));
  const [imageIndex, setImageIndex] = useState(0);
  const quotes = [
    {
      image: Image1,
      title: "Adventure Awaits",
      text: "Your gateway to extraordinary travel experiences.",
    },
    {
      image: Image2,
      title: "Explore, Dream, Discover",
      text: "The world is yours to explore.",
    },
    {
      image: Image3,
      title: "Journey Beyond Ordinary",
      text: "Redefine the way you travel.",
    },
    {
      image: Image4,
      title: "Wanderlust Unleashed",
      text: "Discover destinations that inspire.",
    },
    {
      image: Image5,
      title: "Your Next Escape",
      text: "Where will your journey take you?",
    },
  ];
  const services = [
    {
      image: LocalActivityTwoToneIcon,
      title: "Ultimate flexibility",
      text: "You're in control, with free cancellation and payment options to satisfy any plan or budget.",
    },
    {
      image: AutoAwesomeTwoToneIcon,
      title: "Memorable experiences",
      text: "Browse and book tours and activities so incredible, you'll want to tell your friends.",
    },
    {
      image: DiamondTwoToneIcon,
      title: "Quality at our core",
      text: "High-quality standards. Millions of reviews. A tourz company.",
    },
    {
      image: EmojiEventsTwoToneIcon,
      title: "Award-winning support",
      text: "New price? New plan? No problem. We're here to help, 24/7.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex < quotes.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* landing image section  */}
      <Grid
        container
        sx={{
          height: { xs: "300px", md: "600px" },
        }}
      >
        <Grid
          sx={{
            ...flexRow,
            justifyContent: "center",
            backgroundImage: `url(${quotes[imageIndex].image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <Grid>
            <img
              src={Texture}
              style={{
                width: "100%",
                position: "absolute",
                bottom: -1,
                left: 0,
              }}
            />
          </Grid>
          <Grid sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "60px" },
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            >
              {quotes[imageIndex].title}
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "#FFFFFF" }}>
              {quotes[imageIndex].text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* landing services section  */}

      <Grid container spacing={4} sx={{ mt: { xs: 3, md: 10 } }}>
        {services.map((item, index) => (
          <Grid item xs={matches400 ? 12 : 6} sm={6} md={3}>
            <item.image sx={{ fontSize: "40px" }} />
            <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
