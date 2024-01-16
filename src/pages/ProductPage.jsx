import React, { useEffect, useState } from 'react'
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
        <ProductsSlider products={categoryFourProducts}  header={t('productPage.firstHeadline')}/>
        <BestSeller />
        <ProductsSlider  products={categoryTwoProducts} slides={womenSlides} header={t('productPage.secondHeadline')}/>
        <Footer/>
    </div>
  )
}

export default ProductPage