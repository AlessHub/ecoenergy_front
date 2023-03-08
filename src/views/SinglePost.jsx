import React, { useState, useEffect } from "react";

import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import Footer from "../components/layout/navigation/Footer";

import { Link, useParams } from "react-router-dom";

import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { forumSingle } from "../services/user-service";
import Comments from "../components/layout/organization/Comments";

function SinglePost() {
  const baseUrl = import.meta.env.VITE_IMAGES_URL;

  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getSinglepost = async () => {
      if (id) {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const { data } = await forumSingle(id, { headers });
        setPost(data);
      }
    };

    getSinglepost();
  }, [id]);

  return (
    <>
      <NavPublic />
      <Box
        sx={{
          margin: "10px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",          
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "90%",
            marginTop: "0.5rem",
          }}
        >
          <Link to="/forum">
            <KeyboardBackspaceIcon sx={{ color: "main.tertiary" }} />
          </Link>
        </Box>

        <Typography  sx={{textAlign:'start', width:'90%'}}>
          {new Date(
            post?.created_at.slice(0, 16).replace("T", " ")
          ).toLocaleString()}
        </Typography>

        <Typography sx={{fontWeight:'900', fontSize:'3rem'}}>
        {post?.title}
        </Typography>

        <CardMedia
          sx={{ borderRadius: "5px", width: "30%", height: "30%" }}
          image={baseUrl + post?.image}
          title={post?.title}
        />

        <Box
          sx={{ margin: "5px", width:'90%'}}
        >
          <Stack
            padding={2}
            sx={{ display: "flex", textAlign: "justify", gap: "2rem" }}
          >
            <Typography sx={{ fontWeight: "900" }}>@{post?.autor}</Typography>
            <Typography>{post?.description}</Typography>
          </Stack>
        </Box>

        <Comments id={id}/>
        
      </Box>
      <Footer />
    </>
  );
}

export default SinglePost;
