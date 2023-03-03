import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Menu from "@mui/material/Menu";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import { Link as LinkMui, TextField, Button } from "@mui/material";

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

  const navigate = useNavigate();


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
      console.log(response.data);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
 

  return (
    <>

<NavPublic />      

<Box
  component="form"
  sx={{
    p: 5,
    display: "flex",
    margin: 'auto',
    maxWidth: "500px",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": {
      mb: 3,
      width: "100%",
    },
    "& .MuiButton-root": {
      width: "50%",
    },   "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "main.primary",
      color:'main.primary'
    },
  }}
  onSubmit={handleSubmit}
>
  <Typography  color="main.tertiary" sx={{ mb: 4}} variant="h3">
    Welcome
  </Typography>

  <TextField
    label="Name"
    type="text"
    name="name"
    value={formData.name}
  onChange={handleChange}
  required
    />

  <TextField
    sx={{ background: "" }}
    label="Email"
    type="email"
    name="email"
    value={formData.email}
  onChange={handleChange}
  required
    />

  <TextField
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

  <Button
            sx={{
              mt:2,
              textTransform: "capitalize",
              backgroundColor: "main.primary",
              "&:hover": {
                backgroundColor: "main.primary",
                borderColor: "main.primary",
                boxShadow: "none",
                color: "main.secondary",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "main.primary",
                borderColor: "main.primary",
                color: "main.secondary",
              },
              "&:focus": {
                boxShadow: "0 0 0 0.2rem main.primary",
              },
            }}
            type="submit"
    color="primary"
    variant="contained"
    >
    Sign up
  </Button>
  <LinkReact to="/NavLoggedIn.jsx"></LinkReact>
</Box>
{error && (
<div className="mt-6 text-center text-red-500">
{error}
</div>
)}
{user && (
<div className="mt-6 text-center">
<h3 className="text-gray-700 font-medium">User Details</h3>
<p><strong className="text-gray-700">Name:</strong> {user.name}</p>
<p><strong className="text-gray-700">Email:</strong> {user.email}</p>
</div>
)}
    
</>
);
};

export default SignUp;
