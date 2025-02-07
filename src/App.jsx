import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { TopNavBar } from "./Components/NavBar/TopNavBar";
import { LandingSection } from "./Components/LandingPage/LandingSection";
import { PackagesSection } from "./Components/PackagesSection/PackagesSection";
import { CountrySection } from "./Components/Countries Section/Countries-Section";

// onClick={()=>setMode(mode === "light" ? "dark" : "light")}

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
    <ThemeProvider theme={darkTheme}>
      <TopNavBar mode={mode} setMode={setMode} />
      <Home />
    </ThemeProvider>
  );
}

const Home = () => {
  return (
    <Grid>
      <LandingSection />
      <PackagesSection/>
      <CountrySection/>
    </Grid>
  );
};

export default App;
