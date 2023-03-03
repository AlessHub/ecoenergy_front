import React from 'react';
import { Link as LinkReact } from "react-router-dom";
import NavLoggedIn from "../components/layout/navigation/Navbar/NavLoggedIn";
import { useState } from "react";
import { Typography, Box, Container} from "@mui/material";
import Footer from "../components/layout/navigation/Footer";
import LinkButton from '../components/layout/navigation/LinkButton';
import ButtonGreen from '../components/layout/navigation/ButtonGreen';
import CardAdvice from '../components/layout/organization/CardAdvice';
import TabsChoice from '../components/layout/navigation/TabsChoice'


const Advices = () => {
  return (
    <>
   <NavLoggedIn/>
    <Container
    
    sx= {{
      display:'flex', 
      flexDirection:'column', 
      justifyContent: 'space-around', 
      gap: 1, 
      margin: 1, 
      scrollMarginBottom: 2 }}>
    
     <LinkReact to='/'><LinkButton 
            text='Back'/></LinkReact>
            

    <Box
        sx= {{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '1rem',
          mb: '1rem',
          }}>
            <Typography  
          color="main.tertiary" 
          sx={{ mb: 1}} 
          variant="h3">
            
            Advices
   
        </Typography>
           
        <TabsChoice />
        
    </Box>

    

    <CardAdvice text='Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica'/>
          <CardAdvice/>
    <CardAdvice text='Text' type='Water' image='src/assets/avatar_template.png'/>
    <CardAdvice/>
    <CardAdvice/>
    </Container>
    <Footer/>
    </>
  )
}

export default Advices;
