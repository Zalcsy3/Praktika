import { AppBar, Button, Stack, Tabs, Tab, Avatar } from '@mui/material'
import React from 'react'

const CustomAppbar = () => {
  return (
    <AppBar sx={{ height: '64px' }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 2, height: '100%' }}>
        <Stack direction='row' alignItems='center' gap={'30px'}>
          <Avatar
            alt="Logo"
            src="./logo_praktika.png"
            sx={{ height: '90px', width: 'auto', marginRight: '50px', padding: ".2px" }}
          />
          <Button variant="text">Rent a House</Button>
          <Button variant="text">Favourites</Button>

        </Stack>
        <Button variant="contained">Login</Button>
      </Stack>
    </AppBar>
  );
}


export default CustomAppbar
