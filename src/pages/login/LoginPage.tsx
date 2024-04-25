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
      //TODO: height: 100%, es a maginTop nem kell
      //TODO: nem kell a bgColor se ide, szoval az egesz sx itt torolheto
        width={"100%"}
        // A header és a footer magassága(120px+64px)
        alignItems={"center"}
        justifyContent={"center"}
        sx={{backgroundColor: theme.palette.background.default, marginTop:"150px"}}
      >
        <Paper
          //TODO: nem kell a boxShadow, lehet siman adni elevation={1} pl a Papernek es akkor kap shadowt
          // elevation={5}
          sx={{
            width: 500,
            p: 4,
            borderRadius: 4,
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.08), 0 6px 4px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* TODO: Ha nincs az sx-ben semmi akkor toroljuk, es mashol is amit importolsz es nem hasznalod torold */}
          <Stack alignItems={"center"} justifyContent={"center"} gap={2} sx={{}}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Login
            </Typography>
            {/* TODO: nem jo a tema a textfieldnek amikor rakattintok eltunik a border ami nem jo, plusz tehetsz ide MUI-bol icont is hogy a passwordhoz egy kulcs a username-hez egy emberke, MUI icons igy keress ra es ott tudsz valasztani, es nezd meg hogy lehet a textfeildhez hozzaadni a dokumentacioban */}
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


