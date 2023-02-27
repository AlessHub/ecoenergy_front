import React from 'react';

import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import CardForum from '../components/layout/organization/CardForum';
import Footer from "../components/layout/navigation/Footer";
import { display } from '@mui/system';


const Forum = () => {
  return (
    <>
    <NavPublic/>
    <CardForum/>
    <Footer/>
    </>

  )
}

export default Forum
