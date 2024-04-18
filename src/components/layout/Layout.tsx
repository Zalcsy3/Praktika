import React, { FC, ReactNode } from 'react'
import CustomAppbar from './custom-appbar/CustomAppbar';
import Footer from './footer/Footer';
import { Box } from '@mui/material';

type LayoutProps = {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
    <CustomAppbar />
    <Box sx={{ mt: '75px'}}>{children}</Box>
    <Footer />
    </>
  )
}

export default Layout