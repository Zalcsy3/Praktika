import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Button, Container, CssBaseline, TextField, Toolbar, Typography } from '@mui/material';

// MUI témát hozunk létre
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Kék fő szín
    },
    background: {
      default: '#f2f2f7', // Háttér szín
    },
  },
});

// Fő komponens, ahol a MUI témát alkalmazzuk
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Alap stílusok resetelése */}
      <AppBar position="static">
        <Toolbar>
          <img src="logo_praktika.png" alt="foto1" style={{ width: '12%', padding: '10px 10px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Praktika
          </Typography>
          <Button color="inherit">Rent a House</Button>
          <Button color="inherit">Favourites</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ minHeight: '100vh', backgroundColor: '#f2f2f7' }}>
        <div className="main" sx={{ display: 'flex', overflow: 'auto', backgroundColor: '#fff', boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.08), 0 6px 4px 0 rgba(0, 0, 0, 0.12)', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', marginBottom: '30px' }}>
          <div className="login">
            <Button variant="contained" color="primary" sx={{ borderRadius: '15px', fontSize: '15px' }}>Login</Button>
          </div>
        </div>
        <Container maxWidth="sm" sx={{ marginBottom: '30px' }}>
          <div className="login-form" sx={{ backgroundColor: '#fff', width: '500px', margin: '150px auto', borderRadius: '20px', boxShadow: '4px 2px 6px 4px rgba(0, 0, 0, 0.08), 6px 6px 4px 0 rgba(0, 0, 0, 0.20)', textAlign: 'center' }}>
            <div className="login_cim" sx={{ fontFamily: 'Roboto', textAlign: 'center', height: '60px', padding: '20px' }}>
              <Typography variant="h4">Login</Typography>
            </div>
            <form>
              <div className="content" sx={{ padding: '35px', textAlign: 'center' }}>
                <div className="input-field" sx={{ padding: '12px 5px' }}>
                  <TextField type="email" label="Username" fullWidth margin="normal" />
                </div>
                <div className="input-field" sx={{ padding: '12px 5px' }}>
                  <TextField type="password" label="Password" fullWidth margin="normal" />
                </div>
              </div>
              <div className="action" sx={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', padding: '20px' }}>
                <Button variant="contained" color="primary" sx={{ borderRadius: '15px', fontSize: '15px', width: '23%' }}>Login</Button>
              </div>
            </form>
          </div>
        </Container>
      </Container>
      <footer style={{ textAlign: 'center', color: '#a0a0a3', position: 'relative', height: '60px' }}>
        <Typography variant="h6">Zenkox Projekt 2024</Typography>
      </footer>
    </ThemeProvider>
  );
}
/*
// Az App komponens renderelése a DOM-ba
ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, AppBar, Toolbar, IconButton, Button, TextField, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  loginForm: {
    marginTop: theme.spacing(4),
  },
}));


function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src="logo_praktika.png" alt="foto1" />
          </IconButton>
          <Typography variant="h6">
            Praktika
          </Typography>
          <Button color="inherit">Rent a House</Button>
          <Button color="inherit">Favourites</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" className={classes.loginForm}>
        <form>
          <Typography variant="h4">Login</Typography>
          <Grid item xs={12}>
            <TextField label="Username" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField type="password" label="Password" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Login</Button>
          </Grid>
        </form>
      </Grid>
      <footer>
        <Typography variant="h4">Zenkox Projekt 2024</Typography>
      </footer>
    </Container>
  );
}

export default App;
*/