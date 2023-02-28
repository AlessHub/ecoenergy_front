import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 1000,
  color: theme.palette.text.primary,
}));

const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorum.`;

export default function AutoGridNoWrap() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <img src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVlbnRlJTIwZGUlMjBhZ3VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Placeholder" width="75"/>
          </Grid>
          <Grid item>
            <Typography variant="h6">Title</Typography>
            <Typography>{message}</Typography>
            <Typography variant="caption">8:00 AM</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <img src="https://images.unsplash.com/photo-1529704193007-e8c78f0f46f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Placeholder"width="75" />
          </Grid>
          <Grid item>
            <Typography variant="h6">Title</Typography>
            <Typography>{message}</Typography>
            <Typography variant="caption">9:00 AM</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
