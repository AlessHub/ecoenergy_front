import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Menu from "@mui/material/Menu";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import { Link as LinkMui, TextField, Button } from "@mui/material";

import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import { Checkbox } from "@mui/material";
import Footer from "../components/layout/navigation/Footer";
import ButtonGreen from "../components/layout/navigation/ButtonGreen";
import LinkButton from "../components/layout/navigation/LinkButton";

import axios from "axios";

import { Email, Login } from "@mui/icons-material";
import { register } from "../services/user-service";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
      const {data} = await register(
        
        formData
      );
      console.log(data);
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/profile");
    } catch (error) {
      // setError(error.data.message);
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
          margin: "auto",
          maxWidth: "500px",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": {
            mb: 3,
            width: "100%",
          },
          "& .MuiButton-root": {
            width: "50%",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "main.primary",
            color: "main.primary",
          },
        }}
        onSubmit={handleSubmit}
      >
        <Typography color="main.tertiary" variant="h3">
            Sign Up
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
        <button type="submit">

        sign up
        </button>
      </Box>      
      

      <Box sx={{ display: "flex", textAlign: "start", alignItems: "center" }}>
        <Checkbox defaultChecked color="success" />
        <Typography
          sx={{ mt: 0, color: "black", fontSize: "0.7rem" }}
          variant="body"
        >
          I would like to receive your newsletter and other promotional
          information
        </Typography>
      </Box>

      {/* <ButtonGreen text="Sign up" /> */}
      {/* <LinkReact to="/NavLoggedIn.jsx"></LinkReact> */}
      <Typography
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        variant="p"
      >
        Already registered?{" "}
        <LinkButton
          text="Log In"
          to="/login"
          sx={{
            "&:hover": {
              color: "main.tertiary",
            },
          }}
          underline="none"
          color="main.secondary"
        />
      </Typography>
    </>
  );
};

export default SignUp;
