import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardAdvice = ({text,tab}) => {
  return (
    <>
    <Card sx={{ 
      maxWidth: 340,
      width: 400,
      height: '8rem', 
      display: 'flex', 
      alignItems: 'center', 
      padding: 1,
      backgroundColor: 'main.secondary',
      // borderBottom: 3,
      // borderLeft:5,
      borderRight:5,

      boxShadow: 1,
      borderColor:  tab === "1"? "rgba(249, 213, 5, 0.3)" : "rgba(16, 95, 188, 0.5)",
      textAlign: 'initial',
    }}>

      <CardMedia
        sx={{ 
          minWidth: '30%',
          height: 95, 
          width:95,
          borderRadius: 5 }}

        image={tab==="1"?"src/assets/rayo.png" : "src/assets/drop.jpg"}
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