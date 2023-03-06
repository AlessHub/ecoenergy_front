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
          <StyledCardMedia component="img" image={forum.cover} alt="image" />
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
  )
}
