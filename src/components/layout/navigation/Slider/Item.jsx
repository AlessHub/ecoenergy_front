import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AvatarPlaceholder from '../../../../assets/avatar_template.png'

export default function Item({item}) {
  return (
    <>
    <Container sx={{p:{xs:0, sm:0, md:0, xl:0} ,display:'flex', flexDirection:'column', alignItems:'center'}}>
      <CardMedia
        component="img"
        alt="thumbnail"
        image={AvatarPlaceholder}
        sx={{
          overflow:'hidden', 
            width: '140px',
            height: '140px',
            maxWidth: '150px',
            translate: '0px 75px',
            mt: 2}}
      />
    <Card sx={{ bgcolor: 'main.primary', width:'100%', maxWidth: 300, height: 150, borderRadius: 5}}>
      <CardContent>
        <Typography color='primary.tertiary' sx={{fontSize:'0.8rem', mt:7, fontWeight:'700'}}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
    </Container>
    </>
  );
}