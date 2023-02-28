import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";

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
    <NavPublic></NavPublic>
    <Typography color="main.tertiary" variant="h3">Log In</Typography>
    <Box
      component="form"
      sx={{
        p: 5,
        display: "flex",
        maxWidth: "500px",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": {
          mb: 3,
          width: "100%",
        },
        "& .MuiButton-root": {
          width: "100%",
        },   "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "main.primary",
          color:'main.primary'
        },
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password "
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Button
        type="submit"
        sx={{
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
        variant="contained"
      >
        Login
      </Button>
      <LinkReact to="/NavLoggedIn.jsx"></LinkReact>

      <Typography sx={{ mt: 1, color: "green" }} variant="p">
        Forgot your password?
      </Typography>
      <Typography
        sx={{ mt: 1, display: "flex", flexDirection: "row", gap: 1 }}
        variant="p"
      >
        New user?{" "}
        <Typography sx={{ mt: 0, color: "green" }} variant="p">
          {" "}
          Sign up
        </Typography>
      </Typography>
    </Box>
    </>
  );
};

export default LoginMui;
