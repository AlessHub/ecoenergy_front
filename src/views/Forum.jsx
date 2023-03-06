import React from 'react';
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import GridForum from "../components/layout/organization/GridForum";
import Footer from "../components/layout/navigation/Footer";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';



const Forum = () => {
  return (
    <>
      <NavPublic/>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: '64px' }}>
        <IconButton href="profile" margin-left="30">
        <Link to='/profile'>Back
          </Link>
        </IconButton>
        <IconButton variant="contained" margin-rigth='30' color="primary" >
          <Link to='/postForum'>Post
          </Link>
          
        </IconButton>
      </Box>
      <GridForum/>
      <Footer sx={{ display:'flex',mb:'0'}}/>
    </>
  )
}

export default Forum;