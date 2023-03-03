import React, { useState } from "react";
import Container from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import LinkButton from "../components/layout/navigation/LinkButton";
import Footer from "../components/layout/navigation/Footer";
import ButtonGreen from '../components/layout/navigation/ButtonGreen';

import axios from "axios";

import { Login } from "@mui/icons-material";

const LoginMui = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://energy-production-b228.up.railway.app/api/login', formData);
      console.log(response.data);
      setUser(response.data.user);
      localStorage.getItem('token', response.data.token);
    //   setRedirect(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  


  return (
    <>
    <NavPublic/>
    <Container
      component="form"
      sx={{
        display: "flex",
        mt: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "center",
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "main.primary",
          color:'main.primary'
        },
        gap: 2
      }}
      onSubmit={handleSubmit}
    >

    <Typography color="main.tertiary" variant="h3">
      Log In
      </Typography>
    
      <TextField sx={{minWidth: '30%'}}
        label="Username"
        value={formData.email}
        onChange={handleChange}

      />
      <TextField sx={{minWidth: '30%'}}
        label="Password "
        type="current-password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <ButtonGreen
            text='Log In'/>
      <LinkReact to="/NavLoggedIn.jsx"></LinkReact>
      <Typography 
        variant="p">
        <LinkButton text='Forgot your password?' to='/' sx={{
                "&:hover": {
                  color: "main.tertiary",
                },
              }}
              underline="none"
              color="main.secondary"/>
      </Typography>
      <Typography sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        variant="p">

        New user?{" "}

        
      <LinkButton text='Sign Up' to="/signup" sx={{
                "&:hover": {
                  color: "main.tertiary",
                },
              }}
              underline="none"
              color="main.secondary"/>

      </Typography>
    </Container>
    <Footer/>

    </>
  );
};

export default LoginMui;
