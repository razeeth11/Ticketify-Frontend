import "./App.css";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router";
import { TopNavBar } from "./Components/NavBar/TopNavBar";
import { LandingSection } from "./Components/LandingPage/LandingSection";
import { PackagesSection } from "./Components/PackagesSection/PackagesSection";
import { CountrySection } from "./Components/Countries Section/Countries-Section";
import { PopularTours } from "./Components/Popular-Tours/Popular-Tours";
import { ReviewSection } from "./Components/Reviews-Section/Review-Section";
import { ContactSection } from "./Components/Contact-Section/Contact-Section";
import { CategoryPackage } from "./Components/Home-Category-Package/CategoryPackages";

function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages/:packageCategory" element={<CategoryPackage />} />
        <Route path="/:country/allPackages" element={<CountryPackages />} />
        <Route path="/package/:packageName" element={<IndividualPackage />} />
      </Routes>
    </>
  );
}

const Home = () => {
  return (
    <>
      <LandingSection />
      <Grid sx={{ p: { xs: "0 15px 40px 15px", md: "0px 80px 0 80px" } }}>
        <PackagesSection />
        <CountrySection />
        <PopularTours />
        <ReviewSection />
      </Grid>
      <ContactSection />
    </>
  );
};  

function CountryPackages(){
  return(
    <Grid>
      CountryPackages
    </Grid>
  )
}
function IndividualPackage(){
  return(
    <Grid>
      IndividualPackage
    </Grid>
  )
}

export default App;
