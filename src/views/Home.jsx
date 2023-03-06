import React from "react";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import Slider from "../components/layout/navigation/Slider/Slider";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Footer from "../components/layout/navigation/Footer";
import ElectricityPrices from "../components/layout/organization/ElectricityPrices";
import LinkButton from "../components/layout/navigation/LinkButton";
import ButtonGreen from "../components/layout/navigation/ButtonGreen";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  

  return (
    <>
    <div>
    <NavPublic />
      <Typography
        sx={{ fontWeight: "bold", mt: 1 }}
        variant="h2"
        color="main.tertiary"
      >
        EcoEnergy
      </Typography>
      <Typography sx={{ fontWeight: "500", mt: 3 }} variant="body1">
        Consequat velit qui adipisicing sunt do reprehenderit ad la Consequat
        velit qui adipisicing sunt.
      </Typography>

      <Slider />
      <ButtonGreen text='Get Started'/>
      {/* <Button
        variant="contained"
        sx={{
          mt:2,
          mb: 5,
          textTransform: 'capitalize',
          backgroundColor: "main.primary",
          "&:hover": {
            backgroundColor: "main.primary",
            borderColor: "main.primary",
            boxShadow: "none",
            color: "main.secondary"
          },
          "&:active": {
            boxShadow: "none",
            backgroundColor: "main.primary",
            borderColor: "main.primary",
            color: "main.secondary"
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem main.primary",
          },
        }}
        href="#contained-buttons"
      >
        Get Started
      </Button> */}
      <ElectricityPrices/>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
