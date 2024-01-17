import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'
import BestSeller from '../components/BestSeller'
import { useTranslation } from 'react-i18next'
const ProductPage = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(`http://94.137.187.198:9876/products/`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
      }
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to get response");
      }
      return res.json();
    })
    .then((data) =>{
      setProducts(data);
    })
    
  },[])

  const categoryFourProducts = products.filter((product) => product.category === 1 );
  const categoryTwoProducts = products.filter((product) => product.category === 4);
  return (
    <div>
        <Header/>
        <ProductsSlider products={categoryFourProducts}  header={t('productPage.firstHeadline')} />
        <BestSeller />
        <ProductsSlider  products={categoryTwoProducts} header={t('productPage.secondHeadline')}/>
        <Footer/>
    </div>
  )
}

export default ProductPage