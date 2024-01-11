import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'
import BestSeller from '../components/BestSeller'
import { useTranslation } from 'react-i18next'
const ProductPage = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Header/>
        <ProductsSlider  header={t('productPage.firstHeadline')}/>
        <BestSeller />
        <ProductsSlider header={t('productPage.secondHeadline')}/>
        <Footer/>
    </div>
  )
}

export default ProductPage