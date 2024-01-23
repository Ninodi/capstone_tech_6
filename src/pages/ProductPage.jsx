import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'
import BestSeller from '../components/BestSeller'
import { useTranslation } from 'react-i18next'
import { BounceLoader } from 'react-spinners'
import useFetch from '../hooks/useFetch'
const ProductPage = () => {
  const { t } = useTranslation();


  const { response: products,loading, onFetch } = useFetch({
    url: '/products/',
    method: 'GET',
  });

  useEffect(() => {
    onFetch();
    window.scrollTo(0, 0);
  }, [onFetch]);

  const categoryFourProducts = products && products.filter((product) => product.category === 1 );
  const categoryTwoProducts = products && products.filter((product) => product.category === 4);
  if(loading && !products) 
  return <div className='loader'>
    <BounceLoader
        className='spiner'
        color= {'#FF6767'} 
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>
  return (
    <div>
        <Header/>
        <ProductsSlider products={categoryFourProducts}  header={t('productPage.firstHeadline')} category={'Woman'} subcategory={'Dress'}/>
        <BestSeller />
        <ProductsSlider  products={categoryTwoProducts} header={t('productPage.secondHeadline')} category={'Children'} subcategory={'Dress'}/>
        <Footer/>
    </div>
  )
}

export default ProductPage