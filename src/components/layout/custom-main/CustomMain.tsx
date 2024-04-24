import { Box, Container, useTheme } from '@mui/material';
import React from 'react';

const CustomMain = () => {
  const theme = useTheme();

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
      
    </Box>
  );
};

export default CustomMain;
