import './App.css';
import PublicRoute from './router/public/Router';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey, red, orange,  } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    main: {
      primary: '#42CF94' ,
      secondary: grey[50],
      tertiary: '#4B4E4B',
      danger: red[400],
      warning: orange[500],
    },
    background: {
      paper: '#4B4E4B',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PublicRoute/>
      
    </ThemeProvider>
  );
}

export default App;