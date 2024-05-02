import React from "react";
import Layout from "../../components/layout/Layout";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../../theme/theme";


const LoginPage = () => {
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
              Login
            </Typography>
            <TextField placeholder="Username" label=""  sx={{ 
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light, borderWidth: 1 },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
              }}   />
            <TextField placeholder="Password" label="" sx={{ 
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light, borderWidth: 1 },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
              }}  />

            <Button sx={{ mt: 3 }} variant="contained">
              Login
            </Button>
          </Stack>
        </Paper>
      </Stack>

    </Layout>
  );
};

export default LoginPage;


