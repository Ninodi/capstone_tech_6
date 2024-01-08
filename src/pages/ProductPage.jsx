import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'
import BestSeller from '../components/BestSeller'
import img1 from '../assets/img/productpage1.png'
import img2 from '../assets/img/productpage2.png'
import img3 from '../assets/img/productpage3.png'
import chilldrenimg1 from '../assets/img/childrenclothe1.png'
import chilldrenimg2 from '../assets/img/childrenclothe2.png'
import chilldrenimg3 from '../assets/img/childrenclothe3.png'


const ProductPage = () => {

  const womenSlides = [
    { img: img1, alt: 'Blouses', heading: 'Blouses' },
    { img: img2, alt: 'Wedding Dresses', heading: 'Wedding Dresses' },
    { img: img3, alt: 'Dresses', heading: 'Dresses' },
    { img: img1, alt: 'Blouses', heading: 'Blouses' },
    { img: img2, alt: 'Wedding Dresses', heading: 'Wedding Dresses' },
  ];
  const childSlides = [
    { img: chilldrenimg1, alt: 'jacket'},
    { img: chilldrenimg2, alt: 't-shirt'},
    { img: chilldrenimg3, alt: 'trouser'},
    { img: chilldrenimg1, alt: 'jacket'},
    { img: chilldrenimg2, alt: 't-shirt'}
  ];
  return (
    <div>
        <Header/>
        <ProductsSlider slides={womenSlides} header="Top Women's Clothing Categories"/>
        <BestSeller />
        <ProductsSlider slides={childSlides} header="Top Children's  Clothing Categories"/>
        <Footer/>
    </div>
  )
}

export default ProductPage