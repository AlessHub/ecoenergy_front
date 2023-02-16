import React from "react";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import NavLoggedIn from "../components/layout/navigation/Navbar/NavLoggedIn";
import Slider from "../components/layout/navigation/Slider/Slider";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Typography
        sx={{ fontWeight: "bold", mt: 10 }}
        variant="h4"
        color="main.tertiary"
      >
        EcoEnergy
      </Typography>
      <Typography sx={{ fontWeight: "500", mt: 3 }} variant="body1">
        Consequat velit qui adipisicing sunt do reprehenderit ad la Consequat
        velit qui adipisicing sunt.
      </Typography>
      <NavPublic />
      <Slider />
      <Button
        variant="contained"
        sx={{
          mt:2,
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
      </Button>
      <h1>Holi</h1>
    </>
  );
};

export default Home;
