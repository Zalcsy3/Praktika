import { Box } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
      height: '120px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0, width: '100%',
      zIndex: 100
    }}>
      Zenkox Projekt 2024
    </Box >
  )
}

export default Footer

