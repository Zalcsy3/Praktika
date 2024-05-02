import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', //feher
      light:"#cdcdcd",//szurke vilagos
    },
    background: {
      default: '#f2f2f7', //oldalszin
      

    },
    text: {
      primary: '#000', //fekete
      secondary: '#757575', // szürke
      
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          backgroundColor: '#045bb1',
          color:'#fff',
        },
      },
    },
    
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontFamily: 'Roboto, sans-serif',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: 'palette.primary.main',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'palette.primary.main',
          },
        },
      },
    },
  },
});


