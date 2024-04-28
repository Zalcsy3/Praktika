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
            {/* TODO: nem jo a tema a textfieldnek amikor rakattintok eltunik a border ami nem jo, plusz tehetsz ide MUI-bol icont is hogy a passwordhoz egy kulcs a username-hez egy emberke, MUI icons igy keress ra es ott tudsz valasztani, es nezd meg hogy lehet a textfeildhez hozzaadni a dokumentacioban */}
            <TextField placeholder="Username" label="Username" />{/* TODO Zalan ezt nem tudom elkepzelni hogy kell */}
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


