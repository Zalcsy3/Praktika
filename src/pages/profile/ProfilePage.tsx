import React from 'react'
import Layout from '../../components/layout/Layout'
import { Stack, Paper, Typography, TextField, Button } from '@mui/material';
import { theme } from '../../theme/theme';


const ProfilePage = () => {
  return (
    <Layout>
      <Stack
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}

      >
        <Paper elevation={5}
          sx={{
            width: 500,
            p: 4,
            borderRadius: 4,
          }}
        >

          <Stack alignItems={"center"} justifyContent={"center"} gap={2} >
            <Typography variant="h4" sx={{ mb: 3 }}>
              Name
              Age
              Role:-
            </Typography>    
            <TextField 
              placeholder="Username" 
              label="" 
              sx={{ 
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light, borderWidth: 1 },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
              }} 
            />
            <TextField 
              placeholder="Password" 
              label="" 
              type="password" 
              sx={{ 
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light, borderWidth: 1 },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
              }}   
            />
            <TextField 
              placeholder="First name" 
              label="" 
              sx={{ 
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light, borderWidth: 1 },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
              }}  
            />
             <TextField 
              placeholder="Last name" 
              label="" 
              sx={{ 
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light, borderWidth: 1 },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
              }} 
            />
              <Stack direction="row" spacing={2}>
              <Button
                sx={{ 
                  mt: 3, 
                  backgroundColor: "red", 
                  color: "white", 
                  width: "50%", 
                  textTransform: "none", // A gombok szélességének beállítása
                }} 
                variant="contained"
              >
                Discard
              </Button>
              <Button
                sx={{ 
                  mt: 3, 
                  backgroundColor: "green", 
                  color: "white", 
                  width: "50%", 
                  textTransform: "none", // A gombok szélességének beállítása
                }} 
                variant="contained"
              >
                Save
              </Button>
            </Stack>
            </Stack>

        </Paper>
      </Stack >

    </Layout >
  );
};

export default ProfilePage;
