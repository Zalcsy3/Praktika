import { Box } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { theme } from '../../../theme/theme';

type CustomMainProps = {
  children: ReactNode;
};

//TODO: nem kell a themet importolni ide, eleg ha igy adod meg, hogy paddingTop: 3, ugyan azt az erteket fogja kapni, a muiban 1 egyseg 8px szoval 3*8px lesz, itt a paddingTophoz importoljuk az constansokbol az AppbarHeightot es azt adjuk meg hogy `${AppbarHeight}px + 8px` hogy annyival keruljon lennebb, ha valtozik az appbarheight idovel akkor itt is ne kelljen valtoztatni
//TODO: backgroundColor: 'background.default' oda se kell a theme.palette csak idezojelbe ennyit kell irni es a MUI tudja
const CustomMain: FC<CustomMainProps> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.background.default,
        height: '100vh',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
      }}
    >
      {children}
    </Box>
  );
};

export default CustomMain;
