import React from 'react';
import { Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import Footer from '../components/layout/navigation/Footer';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SliderItem from "../components/layout/slider/SliderItem";
import SliderHours from '../components/layout/slider/SliderHours';
import SliderGrados from '../components/layout/slider/SliderGrados';
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
    <NavPublic/>

    <Container sx={{p:{xs:7, sm:7, md:7, xl:7}, display:'flex', flexDirection:'column', alignItems:'center' }}>

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
    
    <Container sx={{p:{xs:7, sm:7, md:7, xl:7}, display:'flex', flexDirection:'column', alignItems:'center', mt:-8 }}>
    <Box display="flex"
         justifyContent="left"
         alignItems="center">
        <TvIcon sx={{ color: green[500], fontSize: 40, mr:3  }}/>
         Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    <Box display="flex"
         justifyContent="left"
         alignItems="center">
        <EmojiObjectsIcon sx={{ color: green[500], fontSize: 40, mr:3  }}/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    <Box display="flex"
         justifyContent="left"
         alignItems="center">
        <MicrowaveIcon sx={{ color: green[500], fontSize: 40, mr:3 }}/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    <Box display="flex"
         justifyContent="left"
         alignItems="center">
        <ComputerIcon sx={{ color: green[500], fontSize: 40, mr:3  }}/>
        Cantidad
        <SliderItem/> 
         Horas
        <SliderHours/>
    </Box>
    <Box display="flex"
        justifyContent="left"
         alignItems="center">
        <AcUnitIcon sx={{ color: green[500], fontSize: 40, mr:3  }}/>
        Cantidad
        <SliderItem/> 
         Grados
        <SliderGrados/>
    </Box>
    <Box display="flex"
        justifyContent="left"
         alignItems="center">
        <KitchenIcon sx={{ color: green[500], fontSize: 40, mr:3 }}/>
        Cantidad
        <SliderItem/> 
         Grados
        <SliderGrados/>
    
    </Box>
    <Box display="flex"
        justifyContent="left"
         alignItems="center">
        <WhatshotIcon sx={{ color: green[500], fontSize: 40, mr:3  }}/>
        Cantidad
        <SliderItem/> 
         Grados
        <SliderGrados/>
    </Box>
    </Container>
    <Container sx={{p:{xs:7, sm:7, md:7, xl:7} ,flexDirection:'column', alignItems:'center', display:'flex', mt:-6 }}>
    <Box>
    <FormControl fullWidth sx={{  m: 1, width: '40ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">¿Cuanto es la factura de la luz?</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">'€'</InputAdornment>}
          />
        </FormControl>
        <FormControl  sx={{  m: 1, width: '40ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">¿Cuanto es la factura del agua?</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">'€'</InputAdornment>}
          />
        </FormControl>
    </Box>
    <Button
        variant="contained"
        sx={{
          mt:5,
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
        Quiero ahorrar
      </Button>
    </Container>
   
    
    <Footer/> 

    </>
  )
}

export default SliderView
