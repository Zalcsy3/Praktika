import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      //TODO: ertelmetlen a mainnek a feheret adni, valami olyant adj amit sokat hasznalsz, mert a feheret tudud ugy is hogy 'white' hasznalni
      main: '#fff', //feher
      
       

    },
    background: {
      default: '#f2f2f7', //oldalszin
      

    },
    text: {
      //TODO: ennek is ugyan az a feketet hasznalhatod hogy 'black' ide custom szinek kellenek ha vannak
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
          //TODO: pl egy ilyen szint kivenni es hasznalni hogy ne hex kodot adj itt
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


