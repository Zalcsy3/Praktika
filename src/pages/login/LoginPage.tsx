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

const LoginPage = () => {
  return (
    <Layout>
      <Stack width={"100%"} alignItems={"center"}>
        <Paper
          sx={{
            width: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
            borderRadius: 4
          }}
        >
          <Stack alignItems={"center"} justifyContent={"center"} gap={2}>
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
