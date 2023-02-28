import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button, Container } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import { Checkbox } from "@mui/material";
import Footer from "../components/layout/navigation/Footer";
import ButtonGreen from '../components/layout/navigation/ButtonGreen';
import LinkButton from "../components/layout/navigation/LinkButton";

import { Email, Login } from "@mui/icons-material";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the username and password
    // If successful, redirect the user to the dashboard page
  };

  return (
    <>
      <NavPublic />
      <Container
        component="form"
        sx={{
          display: "flex",
          maxWidth: "500px",
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
        <Typography  
        color="main.tertiary" variant="h3">
          Sign Up
        </Typography>

        <TextField sx={{minWidth: '30%'}}
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField sx={{minWidth: '30%'}}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField sx={{minWidth: '30%'}}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box sx={{display:'flex', textAlign:'start', alignItems:'center'}}>
          <Checkbox defaultChecked color="success" />
          <Typography
            sx={{ mt: 0, color: "black", fontSize: "0.7rem" }}
            variant="body"
          >
            I would like to receive your newsletter and other promotional
            information
          </Typography>
        </Box>

        <ButtonGreen
            text='Sign up'/>
        <LinkReact to="/NavLoggedIn.jsx"></LinkReact>
        <Typography
        variant="p">

        Already registered?{" "}

        <LinkButton text='Log In'/>
        </Typography>
    
      </Container>
      <Footer/>
    </>
  );
};

export default SignUp;
