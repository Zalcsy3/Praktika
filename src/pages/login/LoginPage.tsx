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
import CustomMain from "../../components/layout/custom-main/CustomMain";
import { theme } from "../../theme/theme";

const LoginPage = () => {
  return (
    <Layout>
      <Stack
        width={"100%"}
        // A header és a footer magassága(120px+64px)
        alignItems={"center"}
        justifyContent={"center"}
        sx={{backgroundColor: theme.palette.background.default, marginTop:"150px"}}
      >
        <Paper
          sx={{
            width: 500,
            p: 4,
            borderRadius: 4,
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.08), 0 6px 4px 0 rgba(0, 0, 0, 0.2)',
            
          }}
        >
          <Stack alignItems={"center"} justifyContent={"center"} gap={2} sx={{}}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Login
            </Typography>
            <TextField placeholder="Username" label="Username" />
            <TextField placeholder="Password" label="Password" />
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


