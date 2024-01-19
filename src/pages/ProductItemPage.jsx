import React, { useEffect, useState } from 'react'
import '../assets/styles/ProductItemPage.css'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'
import prodInfoToggle from '../assets/icons/prodInfoToggle.png'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import useCapitalise from '../hooks/useCapitalise'
import { BounceLoader } from 'react-spinners'
import { useTranslation } from 'react-i18next'


function ProductItemPage() {
  const { t, i18n } = useTranslation();
  const { itemName } = useParams()
  const capitaliseCategory = useCapitalise(itemName)
  const formattedCategory = capitaliseCategory().replaceAll('-', ' ')
  const productId = localStorage.getItem('productId')
  const [toggleInfo, setToggleInfo] = useState(true)
  const { response, onFetch } = useFetch({url: `http://94.137.187.198:9876/images/`, method: 'GET'})
  const { response: productsResponse,loading} = useFetch({url: `http://94.137.187.198:9876/products/`, method: 'GET'})

  useEffect(() => {
    if (productId) {
      onFetch();
    }
    window.scrollTo(0, 0);
  }, [productId, onFetch])

  const prodImages =
    response?.filter((prod) => prod.product.toString() === productId)?.map((pordImg) => pordImg.photo) || []

    console.log()

  const toggleProdInfo = () => {
    setToggleInfo(prev => !prev)
  }
  if(loading && !productsResponse && !response) 
  return <div className='loader'>
    <BounceLoader
        className='spiner'
        color= {'#FF6767'} 
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>
  const selectedProduct = productsResponse ? productsResponse.find((prod) => prod.id.toString() === productId) : null;

  return (
    <div>
      <Header />
      <main>
        <div className="page-container">
          <Banner />
          <div className="breadcrumbs">
            <p>{t('productItemPage.breadcrumbs')}</p>
          </div>
          <div className="product-item-images">
            <div className='prod-item-large-image-container'>
              <div className="product-item-image-large">
                <img src={prodImages?.length === 0 ? null : prodImages[0]}alt="" />
              </div>
              <div className="product-name">
                <p>{t('Header.logo')}</p>
                <p>
                  {i18n.language === 'ka' && selectedProduct?.product_name_geo
                    ? selectedProduct.product_name_geo
                    : formattedCategory}
                </p>
              </div>
            </div>
            <div className="prod-item-images-small-container">
              <div className="prod-image-small">
                <img src={prodImages?.length === 0 ? null : prodImages[1]} alt="" />
              </div>
              <div className="prod-image-small">
                <img src={prodImages?.length === 0 ? null : prodImages[2]} alt="" />
              </div>
            </div>
          </div>
          <div className="product-information" onClick={toggleProdInfo}>
              <div className='prod-info-toggle'> 
                <p>{t('productItemPage.productInformation')}</p>
                <div className={`prod-info-toggle-arrow ${toggleInfo ? 'info-toggled' : ''}`}>
                  <img src={prodInfoToggle} alt="" />
                </div>
              </div>
              <div className={`product-details ${toggleInfo ? 'visible' : ''}`}>
                <ul>
                  <div>
                    {selectedProduct && (
                      <li>{i18n.language === 'ka' ? selectedProduct.long_desc_geo : selectedProduct.long_desc}</li>
                    )}
                  </div>
                </ul>
              </div>
          </div>
          <div className="call-now">Call now</div>
          <div className="product-items-slider-container">
            <ProductsSlider products={productsResponse} header={"Similar Items You May Like!"}/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}




export default ProductItemPage
