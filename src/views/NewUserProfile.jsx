import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Button } from "@mui/material";


import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import { FormatAlignJustify, Height } from '@mui/icons-material';
import { height } from '@mui/system';
import { Link } from 'react-router-dom';


 function NewUserProfile() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", bgcolor: "#5DB075", minHeight: "100vh", alignItems: "center"}}>
    <Card sx={{ maxWidth: "80vw", height: "80vh", bgcolor: "white", borderRadius: 2, justifyContent:"center", alignItems:"center" }}>
     
        <CardContent sx={{ display: "flex",flexDirection: "column",alignItems:"center", justifyContent: "space-evenly", height:"25rem", mt: "10%"}}>

        <Card className='circle' sx= {{ display:"flex",width: "30%",minHeight: "18%", flexDirection: "row",bgcolor: "red",justifyContent:"space-between",borderRadius:"50%"}}></Card>

          <Typography variant="body2" color="text.secondary">
          Victoria Pepino
          </Typography>
         

          <Card className='circle' sx= {{ display:"flex",width: "30%",minHeight: "20%", flexDirection: "row",bgcolor: "yellow",justifyContent:"space-between",borderRadius:"50%"}}></Card>

          <Card className='buttonContainer' sx= {{ display:"flex",width: "40vw",minHeight: "80vh", flexDirection: "row",bgcolor: "white",justifyContent:"space-between", alignItems:"center", }}>

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
        variant="contained">
        More Info
      </Button >
      </Link>
   
      
       
      
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
      </Card>
    
     
        </CardContent>
      
   
    </Card>
    
    </Box>
  );
}

export default NewUserProfile;
       
