import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardAdvice = ({text, image}) => {
  return (
    <>
    <Card sx={{ 
      maxWidth: 340,
      width: 400,
      height: 'auto', 
      display: 'flex', 
      alignItems: 'center', 
      padding: 1,
      backgroundColor: 'main.secondary',
      border: 2,
      borderColor: 'main.primary',
      textAlign: 'initial',
    }}>

      <CardMedia
        sx={{ 
          minWidth: '30%',
          height: 95, 
          width:95,
          border: 2 }}

        image={image}
      />
      <CardContent>
        <Typography 
        variant="body2" 
        color="text.secondary" >
          {text}
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default CardAdvice