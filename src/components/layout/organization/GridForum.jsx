import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const GridForum = () => {
  return (
    <Paper
    sx={{
        
      p: 3,
      margin: 'auto',
      maxWidth: 700,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
    <Grid container spacing={2} >
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={3}>
          <Grid item xs>
            <Typography gutterBottom variant="h6" component="div">
              Title
            </Typography>
            <Typography variant="body2" gutterBottom>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere in perspiciatis ipsam ipsum commodi eveniet delectus, eum dolor eligendi ducimus?
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
             Learn more
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
  )
}

export default GridForum