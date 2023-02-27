import React from 'react';
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import GridForum from "../components/layout/organization/GridForum";
import Footer from "../components/layout/navigation/Footer";

//tienes repeticion de card para darle una ideai visual despues del consumo de bd, o sea tienes que quitar despues.

const Forum = () => {
  return (
    <>
    <NavPublic/>
    <GridForum/>
    <GridForum/>
    <GridForum/>
    <GridForum/>
    <Footer/>
    </>

  )
}

export default Forum
