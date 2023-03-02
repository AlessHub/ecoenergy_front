import React from 'react';
import { Typography } from "@mui/material";
import NavLoggedIn from "../components/layout/navigation/Navbar/NavLoggedIn";
import Footer from '../components/layout/navigation/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SliderItem from "../components/layout/slider/SliderItem";
import SliderHours from '../components/layout/slider/SliderHours';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ComputerIcon from '@mui/icons-material/Computer';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';


const SliderView = () => {
  return (
    <>
    <NavLoggedIn/>

    <Container sx={{p:{xs:7, sm:7, md:7, xl:7} ,display:'flex', flexDirection:'column', alignItems:'center'}}>

    <Typography
        sx={{ fontWeight: "regular", mt: 10 }}
        variant="h3"
        color="main.primary">
¿Quieres cambiar el mundo? 
        </Typography>
        <Typography
        sx={{ fontWeight: "bold", mt: 0 }}
        variant="h5"
        color="main.primary">
Comience con su mentalidad.
        </Typography>
        <Typography
        sx={{ fontWeight: "bold", mt: 3 }}
        variant="p"
        color="main.tertiary">   
Cuéntanos cuántos dispositivos usas y el tiempo estimado de uso general para que podamos ayudarte a ahorrar recursos naturales y económicos de forma personalizada. 
    </Typography>
    </Container>
    
    <Container sx={{pl:{xs:4, sm:4, md:4, xl:4}, mr:{xs:2, sm:2, md:2, xl:2}, mt: -8}}>
    <Box display="flex"
         justifyContent="left"
         alignItems="center">
        <TvIcon/>
         Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    <Box display="flex"
         justifyContent="left"
         alignItems="center">
        <EmojiObjectsIcon/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    <Box display="flex"
         justifyContent="left"
         alignItems="center">
        <MicrowaveIcon/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    <Box display="flex"
        justifyContent="left"
         alignItems="center">
        <AcUnitIcon/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    <Box display="flex"
        justifyContent="left"
         alignItems="center">
        <KitchenIcon/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    
    </Box>
    <Box display="flex"
        justifyContent="left"
         alignItems="center">
        <WhatshotIcon/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    
    <Box display="flex"
         justifyContent="left"
         alignItems="center">
        <ComputerIcon/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    
    </Container>
   
    
    <Footer/> 

    </>
  )
}

export default SliderView
