import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'
import BestSeller from '../components/BestSeller'
import { useTranslation } from 'react-i18next'
import img1 from '../assets/img/productpage1.png'
import img2 from '../assets/img/productpage2.png'
import img3 from '../assets/img/productpage3.png'
const ProductPage = () => {
  const womenSlides = [
    { img: img1, alt: 'Blouses', heading: 'Blouses' },
    { img: img2, alt: 'Wedding Dresses', heading: 'Wedding Dresses' },
    { img: img3, alt: 'Dresses', heading: 'Dresses' },
    { img: img1, alt: 'Blouses', heading: 'Blouses' },
    { img: img2, alt: 'Wedding Dresses', heading: 'Wedding Dresses' },
  ];
  const { t } = useTranslation();
  return (
    <div>
        <Header/>
        <ProductsSlider  header={t('productPage.firstHeadline')}/>
        <BestSeller />
        <ProductsSlider slides={womenSlides} header={t('productPage.secondHeadline')}/>
        <Footer/>
    </div>
  )
}

export default ProductPage