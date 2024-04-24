import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', //feher
      
       

    },
    background: {
      default: '#f2f2f7', //oldalszin
      

    },
    text: {
      primary: '#000', //fekete
       //szurke
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
          backgroundColor:'#045bb1', //kek
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
            borderBottomColor: 'background.default',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'background.default',
          },
        },
      },
    },
  },
});


