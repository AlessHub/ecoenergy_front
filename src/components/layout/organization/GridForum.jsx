import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import axios from 'axios'


const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  maxWidth: 1000,
  margin: 'auto',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  padding: theme.spacing(2),
}))

const StyledCardMedia = styled(CardMedia)({
  width: 75,
})

export default function MediaCard() {
  const [forums, setForums] = useState([])
  const baseUrl = import.meta.env.VITE_IMAGES_URL;

  useEffect(() => {
  

    const getForums = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          };
        const response = await axios.get('http://127.0.0.1:8000/api/forums' ,{ headers })
        setForums(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getForums()
  }, [])

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      {forums.map((forum) => (
        
        <StyledCard key={forum.id}>
          <StyledCardMedia component="img" image={baseUrl+forum.image} alt="image" />
          <Typography variant="h6">{forum.title}</Typography>
          <Typography>{forum.description}</Typography>
          <Typography>{forum.autor}</Typography>
          
        </StyledCard>
      ))}
    </Box>
  )
}