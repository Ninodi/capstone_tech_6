import './App.css';
import { RouterProvider, createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import router from './router';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import ProductItemPage from './pages/ProductItemPage';
// import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='capstone_tech_6'>
        <Routes>
          <Route exact path='/capstone_tech_6' element={<MainPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/products' element={<ProductPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/products/:category' element={<ProductCategoryPage/>} />
          <Route path='/products/:category/:itemId' element={<ProductItemPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
