import React from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardForum = () => {
//logica de backend (consumo de bd se ID es par=claro, se ID es impar=oscuro)

  return (
    <>
    <center>
      <Card  sx={{ mb: "1%", maxWidth: "60%", display:"flex", alignItems:"center", bgcolor:"main.tertiary" }}>
      <div>
      <CardMedia
        component="img"
        alt="claro impar"
        width="50"
        height="150"
        image="https://cdn.shopify.com/s/files/1/0616/5669/5003/products/product-image-1868526858_800x.jpg?v=1672176217"
        
      />
      </div>

      <div>
      <CardContent sx={{ maxWidth: 700 }}>
        <Typography color="white"
        sx={{
            fontSize: { xs: "12", md: "17" },
          }}
        gutterBottom variant="h4" 
        component="div">
          Saving
        </Typography>
        <Typography variant="body2" color="white">
         Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
          <CardActions>
        <Button position="right" size="small">Learn More</Button>
      </CardActions>
        </Typography>
      </CardContent>
      
      </div>
    </Card>
    </center>
    </>
  )
}

export default CardForum
