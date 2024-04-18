import { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { v4 as uuid } from "uuid";

const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    {routes.map(({ isIndex, path, page: Page }) => (
                        <Route
                            key={uuid()}
                            index={isIndex}
                            path={path}
                            element={
                                <Suspense >
                                    <Page />
                                </Suspense>
                            }
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
