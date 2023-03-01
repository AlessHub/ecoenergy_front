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

import axios from "axios";

import { Email, Login } from "@mui/icons-material";

const SignUp = () => {

  const [formData, setFormData] = useState({
    name: '',
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
      const response = await axios.post('https://energy-production-b228.up.railway.app/api/register', formData);
      console.log(response.data);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    //   setRedirect(true);
    } catch (error) {
      setError(error.response.data.message);
    }
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
          name="name"
          value={formData.name}
        onChange={handleChange}
        required
          />

        <TextField sx={{minWidth: '30%'}}
          label="Email"
          type="email"
          name="email"
          value={formData.email}
        onChange={handleChange}
        required
          />

        <TextField sx={{minWidth: '30%'}}
          label="Password"
          type="password"
          name="password"
          value={formData.password}
        onChange={handleChange}
        required
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
