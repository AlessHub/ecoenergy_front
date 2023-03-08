import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Container from "@mui/material/Container";

export default function Item({ item }) {
  const baseUrl = import.meta.env.VITE_IMAGES_URL;
  const [forums, setForums] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getForums = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get("http://127.0.0.1:8000/api/forums", {
          headers,
        });
        setForums(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getForums();
  }, []);

  return (
    <>
      <Container
        sx={{
          p: { xs: 0, sm: 0, md: 0, xl: 0 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="200"
              sx={{
                objectFit: "cover",
                minWidth: {
                  xs: "200px",
                  sm: "300px",
                  md: "250px",
                  lg: "250px",
                },
              }}
              image={baseUrl + item.image}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                textAlign: "left",
                width: "100%",
                color: "black",
                padding: "10px",
              }}
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
              <Typography>{item.author}</Typography>
              <Typography variant="caption">
                {new Date(item.created_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
}
