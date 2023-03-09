import React from "react";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import Slider from "../components/layout/navigation/Slider/Slider";
import ButtonGreen from "../components/layout/navigation/ButtonGreen";
import Footer from "../components/layout/navigation/Footer";
import { Typography } from "@mui/material";
import ElectricityPrices from "../components/layout/organization/ElectricityPrices";
import Box from '@mui/material/Box';



const Home = () => {
  
  return (
    <>
    <div>
    <NavPublic />
    <Box
  sx={{
    backgroundImage: 'url(src/assets/50288.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    padding: '20px'
  }}
>
  <Typography
    sx={{
      fontWeight: 'bold',
      margin: 5,
      position: 'absolute',
      top: '10%',
      left: '45%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      color: '#ffffff',
      fontSize: '3.5rem',
      textTransform: 'uppercase',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      letterSpacing: '2px',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width: 480px)': {
        fontSize: '2rem',
      }
    }}
    variant="h2"
  >
    EcoEnergy
  </Typography>
</Box>
<Typography sx={{ fontWeight: "800", margin: 5, textAlign:'center' }} variant="body1">
      We are dedicated to providing effective solutions to reduce energy and water consumption to people who need to reduce the bills. Our mission is to educate and provide practical tools so that people can make conscious and responsible decisions in their daily consumption, promoting a sustainable lifestyle committed to caring for the planet.
      </Typography>
      
      <Slider />
      <ButtonGreen to='/advice' text='Get Advice'/>
     
      <ElectricityPrices/>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
