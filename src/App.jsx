

import './App.css';
import PublicRoute from './router/public/Router';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { green, purple, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: grey[50],
    },
    tertiary: {
      main: green[900],
    },
    black: {
      main: grey[900],
    }
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