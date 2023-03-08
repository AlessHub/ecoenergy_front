import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
import { Link as LinkReact, useNavigate } from "react-router-dom";

import { Link as LinkMui, TextField, Button } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
// import LinkButton from "../components/layout/navigation/LinkButton";
// import Footer from "../components/layout/navigation/Footer";
// import ButtonGreen from '../components/layout/navigation/ButtonGreen';

import axios from "axios";
// import axios from "../api/axios";

import { login } from "../services/user-service";
import LinkButton from "../components/layout/navigation/LinkButton";

const LoginMui = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //redirect to..
  const navigate = useNavigate();

  //token
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //   const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      // console.log(response.data);

      const { data } = await login(formData);

      setUser(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        // setUser(response.data.user);
        navigate("/profile");
      } else {
        console.error("Token is missing from the response");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavPublic />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          padding: "6rem",
        }}
      >
        <Box
          component="form"
          sx={{
            p: 5,
            display: "flex",

            width: "50vw",
            margin: "auto",
            gap: "2rem",
            flexDirection: "column",

            alignItems: "center",
            "& .MuiTextField-root": {
              mb: 3,
              width: "100%",
            },
            "& .MuiButton-root": {
              width: "100%",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "main.primary",
              color: "main.primary",
            },
          }}
          onSubmit={handleSubmit}
        >
          <Typography color="main.tertiary" variant="h3">
            Log In
          </Typography>

          <TextField
            sx={{ minWidth: "30%" }}
            label="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
              backgroundColor: "main.tertiary",
              // color: "main.tertiary",
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
        </Box>
        <Typography variant="p">
          <LinkButton
            text="Forgot your password?"
            to="/"
            sx={{
              "&:hover": {
                color: "main.tertiary",
              },
            }}
            underline="none"
            color="main.secondary"
          />
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          variant="p"
        >
          New user?{" "}
          <LinkButton
            text="Sign Up"
            to="/signup"
            sx={{
              "&:hover": {
                color: "main.tertiary",
              },
            }}
            underline="none"
            color="main.secondary"
          />
        </Typography>
      </Box>
    </>
  );
};

export default LoginMui;
