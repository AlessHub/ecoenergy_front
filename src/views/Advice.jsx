import React from "react";
import { Link as LinkReact } from "react-router-dom";

import { useState, useEffect } from "react";
import { Typography, Box, Container } from "@mui/material";
import Footer from "../components/layout/navigation/Footer";
import LinkButton from "../components/layout/navigation/LinkButton";

import CardAdvice from "../components/layout/organization/CardAdvice";

import TabsChoice from "../components/layout/navigation/TabsChoice";
import { adviceAll } from "../services/user-service";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";

const Advice = () => {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    const getAdvice = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const { data } = await adviceAll({ headers });
        setAdvice(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAdvice();
  }, []);

  

  return (
    <>
      <NavPublic />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          gap: 3,
          margin: 2,
          scrollMarginBottom: 2,
        }}
      >
        {/* <Box
        sx= {{
          display: 'flex',
          flexDirection: 'column',          
          mt: '1rem',
          mb: '1rem',
        }}>
           
            <LinkReact to='/'><LinkButton 
                   text='Back'/></LinkReact>
        
    </Box> */}

        <Typography color="main.tertiary" sx={{ mb: 1 }} variant="h3">
          Advice
        </Typography>

        <TabsChoice />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            minHeight: "80vh",
            gap: "4rem",
          }}
        >
          {advice.map((advice) => (
            <CardAdvice
              text={advice.content}              
            />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Advice;
