import { FC, ReactNode } from "react";

import { ThemeProvider } from "@mui/material";

import { theme } from "./theme";

//itt a theme az ami a theme mappaba van es onnan huzod be hogy a te stilusaid ervenyeusljenek

const CustomThemeProvider: FC<{ children: ReactNode }> = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;
