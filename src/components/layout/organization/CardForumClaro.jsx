import React from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardForumClaro = () => {
    //logica de backend (consumo de bd se ID es par=claro, se ID es impar=oscuro)
  return (
    <>
    <center>
      
    <Card sx={{ mb: "1%", maxWidth: "60%" ,display:"flex", alignItems:"center" }}>
      <div>
      <CardMedia
        component="img"
        alt="green oscuro"
        width="50"
        height="150"
        image="https://okdiario.com/img/2018/10/21/dia-mundial-del-ahorro-de-energia.-descubre-como-inculcarselo-a-tus-hijos-655x368.jpg"/>
      </div>

      <div>
      <CardContent sx={{ maxWidth: 700 }}>
        <Typography 
        sx={{
            fontSize: { xs: "12", md: "17" },
          }}
        gutterBottom variant="h4" 
        component="div">
          Saving
        </Typography>
        <Typography color="white" variant="body2" color="text.secondary">
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

export default CardForumClaro
