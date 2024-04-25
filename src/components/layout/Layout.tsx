import React, { FC, ReactNode } from 'react'
import CustomAppbar from './custom-appbar/CustomAppbar';
import CustomMain from './custom-main/CustomMain';
import Footer from './footer/Footer';
import { Box } from '@mui/material';

type LayoutProps = {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
    <CustomAppbar />
    <CustomMain>{children}</CustomMain> 
    <Footer />
    </>
  )
}

export default Layout


