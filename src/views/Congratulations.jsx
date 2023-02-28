import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Button } from "@mui/material";


import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import { FormatAlignJustify, Height } from '@mui/icons-material';
import { height } from '@mui/system';
import { Link } from 'react-router-dom';


 function Congratulations() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", bgcolor: "#5DB075", minHeight: "100vh", alignItems: "center"}}>
    <Card sx={{ maxWidth: 345, height: 400, bgcolor: "white", borderRadius: 2 }}>
      <CardActionArea>
        <CardContent sx={{ display: "flex",flexDirection: "column",alignItems:"center", justifyContent: "space-evenly", height:"25rem" }}>
          <Typography gutterBottom variant="h5" component="div">
           Congratulation
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Congratulations on your registration with our app for reducing water and electricity bills!
          
          </Typography>
          <Link to="/">
          <Button  
          type="submit"
          sx={{ width: "15vw",
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
        More Info
      </Button >
      </Link>
      
      <Link to='/'>close </Link>
     
        </CardContent>
      </CardActionArea>
   
    </Card>
    
    </Box>
  );
}

export default Congratulations;
       