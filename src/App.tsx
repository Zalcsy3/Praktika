// import ReduxStoreProvider from "./providers/storeProvider";
import { CssBaseline } from "@mui/material";
import CustomThemeProvider from "./providers/themeProvider";
import AppRoutes from "./router";
import Footer from "./components/layout/footer/Footer";
//TODO: itt kell behivni a themat ahogy a MUI-ba megnezem hogy kell, egy Provider lesz
//TODO: itt kell osszerakni a route-kat es akkor o tudja melyik linken melyik paget hivja be
//TODO: behuzok egy peldat az appra
//TODO: latod itt be kell csomagolni a storeproviderbe a theme providerbe es akkor aozn belul jonnek a routek es valtogatja az oldalakat
const App = () => {
  return (
    <>
      <CssBaseline />
      <CustomThemeProvider>
        <AppRoutes />
      </CustomThemeProvider>
      <Footer></Footer>
    </>
  );
};

export default App;
