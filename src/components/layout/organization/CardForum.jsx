import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardForum = () => {
  return (
    <div>
        <center>
      <Card sx={{ maxWidth: "60%" ,display:"flex", alignItems:"center" }}>
      <div>
      <CardMedia
        component="img"
        alt="green"
        width="50"
        height="150"
        image="https://www.shutterstock.com/image-illustration/3d-hand-opens-closes-water-600w-2123047748.jpg"
        
      />
      </div>

      <div>
      <CardContent sx={{ maxWidth: 700 }}>
        <Typography 
        sx={{
            fontSize: { xs: "12", md: "17" },
          }}
        gutterBottom variant="h3" 
        component="div">
          Saving
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
          <CardActions>
        <Button position="right" size="small">Learn More</Button>
      </CardActions>
        </Typography>
      </CardContent>
      
      </div>
    </Card>
    </center>
    </div>
  )
}

export default CardForum
