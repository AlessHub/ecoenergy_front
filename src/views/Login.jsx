import React, { useState, useEffect, useRef } from "react";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import LinkButton from "../components/layout/navigation/LinkButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Link as LinkMui,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,  
} from "@mui/material";
import { login } from "../services/user-service";
import ButtonGreen from "../components/layout/navigation/ButtonGreen";


const LoginMui = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);  
  const navigate = useNavigate();  
  const [token, setToken] = useState("");    
  const [openModal, setOpenModal] = useState(false);
  
  const timerRef = useRef(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCloseModal = () => {
    clearTimeout(timerRef.current);
    setOpenModal(false);
    navigate("/profile");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login(formData);
      setUser(data);

      if (data.token) {
        localStorage.setItem("token", data.token);       
          setOpenModal(true);  
          timerRef.current = setTimeout(handleCloseModal, 2000);          
        
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

          <ButtonGreen
            text='Log In'
          />
        </Box>
        <Typography variant="p">
         
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
            color='main.buttons'
          />
        </Typography>
      </Box>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <Box
        sx={{
          "&:hover": {
            color: "main.primary",
          },
        }}
        underline="none"
        color="main.secondary"
        >
        <DialogTitle>Login Successful!</DialogTitle>
        <DialogContent>
          <p>You have successfully logged in.</p>
        </DialogContent>        
        </Box>
      </Dialog>

    </>
  );
};

export default LoginMui;
