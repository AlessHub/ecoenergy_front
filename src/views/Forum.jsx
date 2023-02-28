import React from 'react';
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import GridForum from "../components/layout/organization/GridForum";
import Footer from "../components/layout/navigation/Footer";
import IconButton from "@mui/material/IconButton";
import {Box } from "@mui/material"
//tienes repeticion de card para darle una ideai visual despues del consumo de bd, o sea tienes que quitar despues.

const Forum = () => {
  return (
    <>
    <NavPublic/>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton href="profile">
    Back
        </IconButton>
        <IconButton variant="contained" color="primary" href="/newpost">
           Post
        </IconButton>
     
    </Box>
    <GridForum/>
    <GridForum/>
    <GridForum/>
    <GridForum/>
   
    <Footer/>
    </>

  )
}

export default Forum
