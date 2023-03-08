import React from "react";
import { Container, Typography, Box, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import AvatarPlaceholder from '../../src/assets/avatar_template.png'
import NavLoggedIn from "../components/layout/navigation/Navbar/NavLoggedIn";
import ButtonGreen from "../components/layout/navigation/ButtonGreen";
import Footer from "../components/layout/navigation/Footer";

const NewUserProfile = () => {
  return (
    <>
      <NavLoggedIn />
      
      
      <Container className="picsandname" 
      sx={{
        display: "flex",
        height: "73vh",
        width: "100vw",
        flexDirection: "column",
        gap: "0px",
        alignItems:"center",
        justifyContent:"center"
      }}>
       
      <CardMedia
        component="img"
        alt="thumbnail"
        image={AvatarPlaceholder}
        sx={{
          overflow:'none', 
            zIndex:"1",
            height: '340px',            
            maxWidth: '300px',
            mt:"70px"
        
            }}>
              
            </CardMedia>
    
    
      
     
        <Typography
          className="name"
          color="main.tertiary"
          variant="h4"
        >
          Victoria Robertson
        </Typography>

        <Typography
          className="pol"
          sx={{ color: "green", textAlign: "justify", marginBottom:"100px" }}>
          Reduced carbon emission (value)
        </Typography>
         

       
        </Container>
        <Container className="getstarted" 
        sx={{ display:"flex",
      
        marginTop:"50px",
        marginBottom:"100px",
        height:"200px",
        width:"200px",
        borderRadius:"200px",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        bgcolor:"main.primary",
        color:"white"}}>
          <Typography
          className="pol"
          sx={{ color: "white" }}>
       Get Started 
        </Typography>
         
        </Container>
      
        <Container
        className="buttons"
        sx={{
          display: "flex",
          height: "10vh",
          width: "30vw",
          flexDirection: "row",
          gap: "2px",
          alignItems:"center",
          justifyContent:"center",
          bgcolor:"none",
          gap:"20px",
          marginBottom:"40px"
        }}
      >

        <ButtonGreen text="Details" component={Link} to="/NavLoggedIn.jsx" />

        <ButtonGreen text="Advice" component={Link} to="/NavLoggedIn.jsx" />
        </Container>
      
      <Footer />
    </>
  );
};

export default NewUserProfile;
