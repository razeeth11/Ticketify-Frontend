import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { TopNavBar } from "./Components/NavBar/TopNavBar";
import { LandingSection } from "./Components/LandingPage/LandingSection";
import { PackagesSection } from "./Components/PackagesSection/PackagesSection";
import { CountrySection } from "./Components/Countries Section/Countries-Section";
import { PopularTours } from "./Components/Popular-Tours/Popular-Tours";
import { ReviewSection } from "./Components/Reviews-Section/Review-Section";
import { ContactSection } from "./Components/Contact-Section/Contact-Section";


function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            background: {
              primary: "#FFFFFF",
            },
            text: {
              primary: "#05073c",
              secondary: "#717171",
            },
          }
        : {
            background: {
              primary: "#152238",
            },
            text: {
              primary: "#FFFFFF",
              secondary: "#ddd3ec",
            },
          }),
    },
  });

  return (
    <>
      <TopNavBar mode={mode} setMode={setMode} />
      <Home />
    </>
  );
}

const Home = () => {
  return (
    <>
      <LandingSection />
    <Grid sx={{p: { xs: "0 15px 40px 15px", md: "0px 80px 0 80px" },}}>
      <PackagesSection/>
      <CountrySection/>
      <PopularTours/>
      <ReviewSection/>
    </Grid>
      <ContactSection/>
    </>
  );
};

export default App;
