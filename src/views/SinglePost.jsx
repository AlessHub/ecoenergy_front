
import { useParams } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Stack } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import Footer from "../components/layout/navigation/Footer";
import { forumSingle } from "../services/user-service";

const endpoint = "http://127.0.0.1:8000/api";


function SinglePost() {
  const baseUrl = import.meta.env.VITE_IMAGES_URL;

  const [post, setPost] = useState()
  const { id } = useParams();

  useEffect(() => {
    const getSinglepost = async () => {
      if (id) {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        // const response = await axios.get(`${endpoint}/forums/${id}`, { headers });
        const {data} = await forumSingle(id, {headers});
        setPost(data);
      }
    };
  
    getSinglepost();
  }, [id]);
  



  return (
    <>
      <NavPublic/>
      <Box sx={{margin:'10px', minHeight:'100vh'}}>
      <CardMedia
        sx={{ height: 100, borderRadius: "5px"}}
        
        image={baseUrl+post?.image}
        title={post?.title}
        
        />
        
      <Stack direction={{ xs: 'column', sm: 'row', md: 'row', lg:'row' }} sx={{margin:'5px'}}>
        <Stack padding={2}>
          <h1>{post?.title}</h1>
          <p>{post?.description}</p>
        </Stack>
       
      </Stack>

        </Box>
      <Footer/>

    </>
  )
}

export default SinglePost