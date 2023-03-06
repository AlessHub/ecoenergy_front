import React from 'react';
import { Link as LinkReact } from "react-router-dom";

import { useState, useEffect } from "react";
import { Typography, Box, Container} from "@mui/material";
import Footer from "../components/layout/navigation/Footer";
import LinkButton from '../components/layout/navigation/LinkButton';

import CardAdvice from '../components/layout/organization/CardAdvice';

import TabsChoice from '../components/layout/navigation/TabsChoice'
import { advice } from '../services/user-service';
import NavPublic from '../components/layout/navigation/Navbar/NavPublic';



const Advices = () => {
  const [advices, setAdvices] = useState([])
 

  useEffect(() => {
  

    const getAdvices = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          };
        
        const { data } = await advice({headers});
        setAdvices(data)
      } catch (error) {
        console.error(error)
      }
    }
    getAdvices()
  }, [])

  
  return (
    <>
   <NavPublic/>
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


    
    <Box
        sx= {{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          gap:'1rem'
          }}>
          {advices.map((advice) => (   

    <CardAdvice text={advice.content} image='src/assets/avatar_template.png' />

          ))}
           
    
    </Box>

    </Container>
    <Footer/>
    </>
  )
}

export default Advices;
