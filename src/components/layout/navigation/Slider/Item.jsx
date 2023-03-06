
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Container, Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AvatarPlaceholder from "../../../../assets/avatar_template.png";

export default function Item({ item }) {
  const baseUrl = import.meta.env.VITE_IMAGES_URL;
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
              image={baseUrl+item.image}
            />
            <Box
              sx={{
                position: "absolute",
                top:0,
                textAlign:'left',
                width: "100%",
                color: "black",
                padding: "10px",
              }}
            >
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">Subtitle</Typography>
              <Typography variant="body2">Subtitle</Typography>
              <Typography variant="body2">Subtitle</Typography>
              
            </Box>
          </Box>
        </Card>
      </Container>
    </>
=======
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Container from '@mui/material/Container';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  maxWidth: 1000,
  margin: 'auto',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  padding: theme.spacing(2),
}));

const StyledCardMedia = styled(CardMedia)({
  width: 75,
});

export default function MediaCard() {
  const [forums, setForums] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getForums = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.get('http://127.0.0.1:8000/api/forums', { headers });
        setForums(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getForums();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const numSlides = 3;
  const numForums = forums.length;

  const forumsToShow = forums.slice(Math.max(forums.length - numSlides, 0));

  return (
    <Container
      value={value}
      min={0}
      step={1}
      max={numForums - numSlides}
      onChange={handleChange}
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        {forumsToShow.map((forum) => (
          <StyledCard key={forum.id}>
            <StyledCardMedia component="img" image={forum.cover} alt="" />
            <Typography variant="h6">{forum.title}</Typography>
            <Typography>{forum.description}</Typography>
            <Typography>{forum.author}</Typography>
            <Typography variant="caption">
              {new Date(forum.created_at).toLocaleTimeString([], 
              { hour: '2-digit', minute: '2-digit', hour12: false })}
            </Typography>
          </StyledCard>
        ))}
      </Box>
    </Container>

  );
}
