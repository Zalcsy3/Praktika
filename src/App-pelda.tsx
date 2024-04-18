import ReduxStoreProvider from "./providers/storeProvider";
import CustomThemeProvider from "./providers/themeProvider";

import AppRoutes from "./router";
//TODO: latod itt be kell csomagolni a storeproviderbe a theme providerbe es akkor aozn belul jonnek a routek es valtogatja az oldalakat
const App = () => {
    return (
        <ReduxStoreProvider>
            <CustomThemeProvider>
                    <AppRoutes />
            </CustomThemeProvider>
        </ReduxStoreProvider>
    );
};

export default App;
