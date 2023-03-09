import React from "react";
import { Link } from "react-router-dom";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import GridForum from "../components/layout/organization/GridForum";
import Footer from "../components/layout/navigation/Footer";
import { Box, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinkButton from "../components/layout/navigation/LinkButton";

const Forum = () => {
  return (
    <>
      <NavPublic />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2rem",
          }}
        >
          
          <Link to="/profile">
            <KeyboardBackspaceIcon sx={{ color: "main.tertiary" }} />
          </Link>
          <Link to="/postForum">
            <AddCircleIcon sx={{ color: "main.tertiary" }} />
          </Link>
        </Box>

        <Typography color="main.tertiary" variant="h3">
          Forum
        </Typography>

        <Typography
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'end',
            marginRight:'7rem',
            mt: '1rem'
          }}
          variant="p"
        >
          Read our... {' '}
          <LinkButton
            text="Community Policy"
            to="/communityPolicy"
            color='main.buttons'
          />
        </Typography>

        <GridForum />
      </Box>
      <Footer sx={{ display: "flex", mb: "0" }} />
    </>
  );
};

export default Forum;
