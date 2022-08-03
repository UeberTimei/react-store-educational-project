import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import Help from "./pages/Help"
import Item from "./pages/Item"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, HELP_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
]

export const manageRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: Item,
    },
    {
        path: HELP_ROUTE,
        Component: Help
    }
]