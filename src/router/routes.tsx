import { lazy } from "react";

const routes = [
    { isIndex: true, page: lazy(() => import("../pages/home/HomePage")) },
    { path: "/rent", page: lazy(() => import("../pages/rent/RentPage")) },
    { path: "/rent/:id", page: lazy(() => import("../pages/rent/[rentID]/RentDetail")) },
    { path: "/favorites", page: lazy(() => import("../pages/favorites/FavoritesPage")) },
    { path: "/login", page: lazy(() => import("../pages/login/LoginPage")) },
    { path: "/profile", page: lazy(() => import("../pages/profile/ProfilePage")) },
    { path: "/sign-up", page: lazy(() => import("../pages/sign-up/SignUpPage")) },
];

export { routes };
