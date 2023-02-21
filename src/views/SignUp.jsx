import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import { Checkbox } from "@mui/material";

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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{ background: "" }}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
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
    </>
  );
};

export default SignUp;
