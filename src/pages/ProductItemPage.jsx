import React, { useState } from 'react'
import '../assets/styles/ProductItemPage.css'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'
import prodItem1 from '../assets/img/prodItem1.png'
import prodItem1small2 from '../assets/img/prodItem1.2.png'
import prodItem1small3 from '../assets/img/prodItem1.3.png'
import prodInfoToggle from '../assets/icons/prodInfoToggle.png'

function ProductItemPage({capitalizeCategory, productName}) {
  const [toggleInfo, setToggleInfo] = useState(true)

  const toggleProdInfo = () => {
    setToggleInfo(prev => !prev)
  }

  return (
    <div>
      <Header />
      <main>
        <div className="page-container">
          <Banner />
          <div className="breadcrumbs">
            <p>Home / Products /</p>
          </div>
          <div className="product-item-images">
            <div className='prod-item-large-image-container'>
              <div className="product-item-image-large">
                <img src={prodItem1} alt="" />
              </div>
              <div className="product-name">
                <p>Mariami’s Atelier</p>
                <p>Here goes the product name</p>
              </div>
            </div>
            <div className="prod-item-images-small-container">
              <div className="prod-image-small">
                <img src={prodItem1small3} alt="" />
              </div>
              <div className="prod-image-small">
                <img src={prodItem1small2} alt="" />
              </div>
            </div>
          </div>
          <div className="product-information" onClick={toggleProdInfo}>
              <div className='prod-info-toggle'> 
                <p>Product Information</p>
                <div className={`prod-info-toggle-arrow ${toggleInfo ? 'info-toggled' : ''}`}>
                  <img src={prodInfoToggle} alt="" />
                </div>
              </div>
              <div className={`product-details ${toggleInfo ? 'visible' : ''}`}>
                <ul>
                  <div>
                    <li>Shine like a beautiful princess straight out of a painting in the classical velvety DKNY® Velvet Side Ruched Dress with Chiffon Sleeve dress with surplice neckline and long sheer sleeves accentuating the pleated side that gives rise to the ruched front.</li>
                  </div>
                  <div>
                    <li>SKU: #9921794</li>
                    <li>Mini-length dress.</li>
                    <li>Sheath silhouette..</li>
                    <li>Rendered in soft velvet jersey with chiffon sleeves.</li>
                    <li>Zippered closure on the center back.</li>
                    <li>Straight hem.</li>
                    <li>92% polyester, 8% spandex.</li>
                    <li>Dry-clean.</li>
                    <li>Imported.</li>
                  </div>
                </ul>
              </div>
          </div>
          <div className="call-now">Call now</div>
          <div className="product-items-slider-container">
            <ProductsSlider />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}




export default ProductItemPage