import AboutPage  from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProductCategoryPage from "./pages/ProductCategoryPage"
import ProductItemPage from "./pages/ProductItemPage"
import SubmitPage from "./pages/SubmitPage"


const router = [
    {
        element: <MainPage/>,
        path: '/'
    },
    {
        element: <AboutPage/>,
        path: '/about'
    },
    {
        element: <ProductPage/>,
        path: '/products'
    },
    {
        element: <ContactPage/>,
        path: '/contact'
    },
    {
        element: <ProductCategoryPage/>,
        path: '/products/:category'
    },
    {
        element: <ProductItemPage/>,
        path: '/products/:category/:itemName'
    },
     {
        element: <SubmitPage/>,
        path: '/SubmitPage'
    },
    {
        element: <NotFoundPage/>,
        path: ':pagenotfound'
    },
]
export default router
