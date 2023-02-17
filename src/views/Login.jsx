import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button,} from "@mui/material";

import { Login } from "@mui/icons-material";

const LoginMui = () => {
  const [username, setUsername] = useState("");
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
          width: "100%",
        },
      
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password "
        type="password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Button sx={{mb:1, color:"white"}} type="submit" color="primary" variant="contained">
        Login
      </Button><LinkReact to='/NavLoggedIn.jsx'></LinkReact>

      <Typography sx= {{ mt:1, color:"green"}}variant="p">Forgot your password?</Typography>
      <Typography sx= {{ mt:1,display:"flex", flexDirection:"row", gap:1,}}variant="p">New user? <Typography sx= {{ mt:0,  color:"green"}}variant="p"> Sign up</Typography>
     </Typography>

    
    </Box>
    
      
     
    
   
  );
};

export default LoginMui;