// import { createTheme} from '@mui/material/styles';

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1c6697', // Kék fő szín
//     },
//     background: {
//       default: '#f2f2f7', // Háttér szín
//     },
//     text: {
//       primary: '#000', // Fő szövegszín
//       secondary: '#a0a0a3', // Másodlagos szövegszín
//     },
//   },
// });


import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1c6697',
    },
    background: {
      default: '#f2f2f7',
      
    },
    text: {
      primary: '#000',
      secondary: '#a0a0a3',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  overrides: { //nem ertem miert nem megy, miert nem talalja
    MuiButton: {
      root: {
        borderRadius: '15px',
      },
    },
    MuiTextField: {
      root: {
        '& .MuiInputBase-input': {
          fontFamily: 'Roboto, sans-serif',
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: 'background.default',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: 'primary.main',
        },
      },
    },
  },
});
