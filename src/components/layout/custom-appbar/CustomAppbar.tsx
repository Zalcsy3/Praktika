import { AppBar, Button, Stack, Tabs, Tab, Avatar } from '@mui/material'
import React from 'react'

//TODO: az appbarnak a heightot a constansokbol importolni `${AppbarHeight}px` es igy adjuk meg
//TODO: nem jo a text button style, az csak sima fekete szoveg kell legyen, es amikor hover-elsz akkor meg full feher lesz a szoveg is es nem latszik semmit
//TODO: a px-ek helyett hasznalj csak siman szamokat, ugyebar az 1 egyseg 8px, pl az Avatarnal height: 10 legyen ne 90px, amugyis kicsit nagy igy a logo, ugyan ugy a marginra es paddingra is, lehet 0.2 is siman vagy ilyenek, gap-re is

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
