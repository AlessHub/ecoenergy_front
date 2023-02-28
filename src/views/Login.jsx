import React, { useState } from "react";
import Container from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import LinkButton from "../components/layout/navigation/LinkButton";
import Footer from "../components/layout/navigation/Footer";
import ButtonGreen from '../components/layout/navigation/ButtonGreen';

import { Login } from "@mui/icons-material";

const LoginMui = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the username and password
    // If successful, redirect the user to the dashboard page
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField sx={{minWidth: '30%'}}
        label="Password "
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonGreen
            text='Log In'/>
      <LinkReact to="/NavLoggedIn.jsx"></LinkReact>
      <Typography 
        variant="p">
        <LinkButton text='Forgot your password?'/>
      </Typography>
      <Typography
        variant="p">

        New user?{" "}

        <LinkButton text='Sign up'/>

      </Typography>
    </Container>
    <Footer/>

    </>
  );
};

export default LoginMui;
