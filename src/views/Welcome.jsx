import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button,} from "@mui/material";

import { Email, Login } from "@mui/icons-material";

const WelcomeMui = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the username and password
    // If successful, redirect the user to the dashboard page
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": {
          mb: 3,
          width: "100%",
        },
        "& .MuiButton-root": {
          width: "50%",
        },
      
      }}
      onSubmit={handleSubmit}
    >
        <Typography sx= {{ mb:4, color:"black"}}variant="h3">Welcome</Typography>

      <TextField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

    <TextField sx= {{ background:""}}
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
      <Typography sx= {{ mt:0, color:"black"}}variant="p">I would like to receive your newsletter and other promotional information</Typography>

      <Button sx={{mt:2, color:"white"}} type="submit" color="primary" variant="contained">
        Sign up
      </Button><LinkReact to='/NavLoggedIn.jsx'></LinkReact>

      
      

    
    </Box>
    
      
     
    
   
  );
};

export default WelcomeMui;
