import React from 'react';
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import CardForumOscuro from '../components/layout/organization/CardForumOscuro';
import CardForumClaro from '../components/layout/organization/CardForumClaro';
import Footer from "../components/layout/navigation/Footer";

//tienes repeticion de card para darle una ideai visual despues del consumo de bd, o sea tienes que quitar despues.

const Forum = () => {
  return (
    <>
    <NavPublic/>
    <CardForumOscuro/>
    <CardForumClaro/>
    <CardForumOscuro/>
    <Footer/>
    </>

  )
}

export default Forum
