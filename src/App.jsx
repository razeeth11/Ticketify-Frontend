import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { TopNavBar } from "./Components/NavBar/TopNavBar";
import { LandingSection } from "./Components/LandingPage/LandingSection";

// onClick={()=>setMode(mode === "light" ? "dark" : "light")}

function App() {
  const [mode, setMode] = useState("dark");
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
    <Grid
      sx={{
        backgroundColor: "background.primary",
        color: "text.primary",
        padding: { xs: "20px", md: "20px 40px" },
      }}
    >
      <LandingSection />
    </Grid>
  );
};

export default App;
