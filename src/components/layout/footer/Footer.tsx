import { Box } from '@mui/material';
import React from 'react'

//TODO: nem kell a zIndex
//TODO: ez valami olyan kellene legyen mint az emag.ro-n amikor alulra gorgetsz, hogy pl legyen 3 oszlop lefele a szovegek az egyikbe legyenek az oldalaink lefele ami az appbarban van, mellette facebook,. insta, youtube ilyenek, es mellette pl cimek email, lakcim, telefonszam, es ennek valami mas hatterszin mint maganak a Main-nek

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

