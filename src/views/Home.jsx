import React from 'react'
import NavPublic from '../components/layout/navigation/Navbar/NavPublic'
import NavLoggedIn from '../components/layout/navigation/Navbar/NavLoggedIn';
import { useState } from 'react';

const Home = () => {

  const[isLogin,setIsLogin]=useState(true);
  return (
    <>
        <NavPublic/>
        <h1>Holi</h1>
    </>
  )
}

export default Home