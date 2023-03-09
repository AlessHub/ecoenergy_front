import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import Footer from "../components/layout/navigation/Footer";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import LinkButton from "../components/layout/navigation/LinkButton";




const CommunityPolicy = () => {
  

  return (
    <>
    <NavPublic/>
        
    <Container className="policycontainer" sx= {{ display:"flex",flexDirection:"column", Width:"100vw",minHeight:"65%",  gap: "10px", bgcolor:"white", alignItems:"center"}}>
    <Typography color="main.tertiary" sx={{ mb: 1, mt:4 }} variant="h3">
          Community Policy
        </Typography>
        <Typography className="pol" sx={{   textAlign:"justify", ml: '3rem' , mr: '3rem'}} variant="p">
          {" "}
          Como parte de nuestro compromiso de crear una comunidad acogedora y solidaria,
          hemos desarrollado un conjunto de pautas para los usuarios de nuestra aplicación.
          Queremos que nuestra aplicación sea un lugar donde todos puedan sentirse cómodos compartiendo sus pensamientos e ideas,
          por eso queremos asegurarnos de que todos sean tratados con respeto en nuestra comunidad en línea.
          Nuestra política prohíbe el acoso de cualquier tipo y queremos que todos se sientan seguros en nuestra comunidad.
          También queremos dejar en claro que no toleraremos comportamientos irrespetuosos hacia otros usuarios o administradores del sitio.
          Por ejemplo, no se permiten comentarios que sean demasiado negativos o despectivos, y no permitimos ataques personales contra otros usuarios.
        </Typography>

        <Typography
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: '1rem'
           
          }}
          variant="p"
        >
          Visit our... {' '}
          <LinkButton
            text="Forum"
            to="/forum"
            color='main.buttons'
          />
        </Typography>
        
   
   </Container>
  <Footer sx={{display:"flex",mb:"0",}}></Footer>
   
  </>
 
  );
};

export default CommunityPolicy;