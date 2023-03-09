import React from "react";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import Slider from "../components/layout/navigation/Slider/Slider";
import ButtonGreen from "../components/layout/navigation/ButtonGreen";
import Footer from "../components/layout/navigation/Footer";
import { Typography } from "@mui/material";
import ElectricityPrices from "../components/layout/organization/ElectricityPrices";


const Home = () => {
  
  return (
    <>
    <div>
    <NavPublic />
      <Typography
        sx={{ fontWeight: "bold", mt: 1 }}
        variant="h2"
        color="rgba(13, 105, 66, 0.65)"
      >
        EcoEnergy
      </Typography>

      <Slider />
      <ButtonGreen text='Get Started'/>
      <Typography sx={{ fontWeight: "800", margin: 5, textAlign:'justify' }} variant="body1">
      We are dedicated to providing effective solutions to reduce energy and water consumption in homes and businesses. Our mission is to educate and provide practical tools so that people can make conscious and responsible decisions in their daily consumption, promoting a sustainable lifestyle committed to caring for the planet.
      </Typography>
      
      <ElectricityPrices/>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
