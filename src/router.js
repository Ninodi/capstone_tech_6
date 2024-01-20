import AboutPage  from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage"
import ProductCategoryPage from "./pages/ProductCategoryPage"
import ProductItemPage from "./pages/ProductItemPage"
import SubmitPage from "./pages/SubmitPage"
import ParamPage from "./pages/ParamPage"
import MainCategoryPage from "./pages/MainCategoryPage"


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
        element: <MainCategoryPage/>,
        path: '/products/:category'
    },
    {
        element: <ProductCategoryPage/>,
        path: '/products/:category/:subcategory'
    },
    {
        element: <ProductItemPage/>,
        path: '/products/:category/:subcategory/:itemName'
    },
     {
        element: <SubmitPage/>,
        path: '/SubmitPage'
    },
    {
        element: <ParamPage/>,
        path: '*'
    },
]
export default router
