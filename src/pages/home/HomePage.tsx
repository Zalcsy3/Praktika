import React from 'react'

import CustomMain from '../../components/layout/custom-main/CustomMain';
import { Box, Button } from '@mui/material';
import { theme } from '../../theme/theme';


const HomePage = () => {
  return (
    <>
      <CustomMain>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img src="./logo_praktika.png" alt="Logo" style={{ height: 200, width: 'auto', alignItems: 'center' }} />

          {/* arnyekot hogy kell adjak? a gombnak, elevationnal nem megy hibat ir ki */}
          <Button variant="text" sx={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', marginTop: 5, borderRadius: 0 }}>Best place for renting houses</Button>
          <Button variant="contained" sx={{ mb: 2, marginTop: 3 }}>Login</Button>
          <Button variant="outlined" sx={{ mb: 2, marginTop: 3, backgroundColor: 'transparent', color: theme.palette.text.secondary, textTransform: 'none', border: 'none', '&:hover': { border: 'none' } }}>The browse all options</Button>
        </Box>
      </CustomMain>
    </>
  );
}
export default HomePage;