

import './App.css';
import PublicRoute from './router/public/Router';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { green, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    main: {
      primary: green[400],
      secondary: grey[50],
      tertiary: green[900],
    },
    background: {
      paper: green[400],
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