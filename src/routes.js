import Admin from './pages/Admin'
import CartPage from './pages/CartPage'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import ProductPage from './pages/ProductPage'
import { ADMIN_ROUTE, CART_ROUTE,SHOP_ROUTE,LOGIN_ROUTE,PRODUCT_ROUTE,REGISTRATION_ROUTE } from './utils/constants'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: CART_ROUTE,
        Component: <CartPage/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth textButton='Войти'/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth textButton='Зарегистрироваться'/>
    },
    {
        path: PRODUCT_ROUTE +'/:id',
        Component: <ProductPage/>
    }
]