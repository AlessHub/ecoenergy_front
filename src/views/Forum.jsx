import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import Footer from "../components/layout/navigation/Footer";
import { display } from '@mui/system';


const Forum = () => {
  return (
    <>
    <div>
      <NavPublic/>
      
      <Card sx={{ maxWidth: "100%" ,display:"flex", alignItems:"center" }}>
      <div>
      <CardMedia
        component="img"
        alt="green iguana"
        width="50"
        height="150"
        image="https://www.shutterstock.com/image-illustration/3d-hand-opens-closes-water-600w-2123047748.jpg"
        
      />
      </div>

      <div>
      <CardContent sx={{ maxWidth: 700 }}>
        <Typography 
        sx={{
            fontSize: { xs: "12", md: "17" },
          }}
        gutterBottom variant="h3" 
        component="div">
          Saving
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum!
          <CardActions>
        <Button position="right" size="small">Learn More</Button>
      </CardActions>
        </Typography>
      </CardContent>
      </div>
    </Card>
    </div>
    <Footer/>
    </>

  )
}

export default Forum
