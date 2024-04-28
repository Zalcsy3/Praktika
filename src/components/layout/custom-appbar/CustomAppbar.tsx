import { AppBar, Button, Stack, Avatar } from '@mui/material'
import React from 'react'


const AppbarHeight = 74;

const CustomAppbar = () => {
  return (
    <AppBar sx={{ height: `${AppbarHeight}px` }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 2, height: '100%' }}>
        <Stack direction='row' alignItems='center' gap={'30px'}>
          <Avatar
            alt="Logo"
            src="./logo_praktika.png"
            sx={{ height: 95, width: 'auto', marginRight: 5, padding: ".2px", marginBottom: 1 }}
          />
          <Button variant="text" sx={{ color: 'black',fontWeight: 'bold',backgroundColor: 'white', '&:hover': { fontWeight: 'bold', color: '#045bb1',} }}>Rent a House</Button>
          <Button variant="text" sx={{ color: 'black',fontWeight: 'bold', backgroundColor: 'white' , '&:hover': {fontWeight: 'bold', color: '#045bb1',} }}>Favourites</Button>
        </Stack>
        <Button variant="contained">Login</Button>
      </Stack>
    </AppBar>
  );
}


export default CustomAppbar
