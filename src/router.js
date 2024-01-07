import AboutPage  from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage"
import ProductCategoryPage from "./pages/ProductCategoryPage"
import ProductItemPage from "./pages/ProductItemPage"
>>>>>>>>> Temporary merge branch 2


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
        path: '/products/:category/:itemId'
    },
]
export default router
