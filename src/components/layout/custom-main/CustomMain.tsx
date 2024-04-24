import { Box } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { theme } from '../../../theme/theme';

type CustomMainProps = {
  children: ReactNode;
};

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
