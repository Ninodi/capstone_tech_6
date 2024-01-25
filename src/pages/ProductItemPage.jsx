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
import Breadcrumbs from '../components/Breadcrumbs'
import noImg from '../assets/icons/noImg.png'



function ProductItemPage() {
  const { t, i18n } = useTranslation();
  const { category, subcategory, itemName } = useParams()
  const capitaliseCategory = useCapitalise(itemName)
  const formattedCategory = capitaliseCategory().replaceAll('-', ' ')
  
  const [toggleInfo, setToggleInfo] = useState(true)
  const { response, onFetch } = useFetch({url: `/images/`, method: 'GET'})
  const { response: productsResponse,loading} = useFetch({url: `/products/`, method: 'GET'})


  const productInfo = productsResponse?.filter(each => each.product_name.toLowerCase().replaceAll(" ", '-') === itemName)

  console.log(productInfo)

  let productId
  if (productInfo && productInfo.length > 0) {
    productId = productInfo[0].id
  }


  useEffect(() => {
    if (productId) {
      onFetch();
    }
    window.scrollTo(0, 0);
  }, [productId, onFetch])


  const prodImages =
    response?.filter((prod) => prod.product === productId)?.map((pordImg) => pordImg.photo) || []


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

  return (
    <div>
      <Header />
      <main>
        <div className="page-container">
          <Banner />
          <div className="breadcrumbs">
            <Breadcrumbs mainCategory={category} subcategory={subcategory} itemName={capitaliseCategory().replaceAll('-', " ")}/>
          </div>
          <div className="product-item-images">
          {prodImages?.length === 0
            ? <div className="noImg">
              <img src={noImg} alt="" />
            </div>
            :
            <>
              <div className='prod-item-large-image-container'>
                <div className="product-item-image-large">
                  <img src={prodImages?.length === 0 ? null : prodImages[0]}alt="" />
                </div>
                <div className="product-name">
                  <p>{t('Header.logo')}</p>
                  <p>
                    {i18n.language === 'ka' && productInfo && productInfo[0]?.product_name_geo
                      ? productInfo && productInfo[0]?.product_name_geo
                      : formattedCategory}
                  </p>
                </div>
              </div>
              <div className="prod-item-images-small-container">
                {prodImages[1]
                ? 
                  <div className="prod-image-small">
                    <img src={prodImages[1]} alt="" />
                  </div>
                : null
                }
                {prodImages[2]
                ? 
                  <div className="prod-image-small">
                    <img src={prodImages[2]} alt="" />
                  </div>
                : null
                }
              </div>   
            </>
          }
          </div>
          <div className="product-information">
              <div className='prod-info-toggle' onClick={toggleProdInfo}> 
                <p>{t('productItemPage.productInformation')}</p>
                <div className={`prod-info-toggle-arrow ${toggleInfo ? 'info-toggled' : ''}`}>
                  <img src={prodInfoToggle} alt="" />
                </div>
              </div>
              <div className={`product-details ${toggleInfo ? 'visible' : ''}`}>
                <ul>
                  <div>
                    {productInfo && (
                      <li>{i18n.language === 'ka' ? productInfo && productInfo[0]?.long_desc_geo : productInfo && productInfo[0]?.long_desc}</li>
                    )}
                  </div>
                </ul>
              </div>
          </div>
          <a href='tel:995593440680' className="call-now">{t("AllProductPage.callus")}</a>
          <div className="product-items-slider-container">
            <ProductsSlider products={productsResponse} header={t("AllProductPage.similarItems")} category={category} subcategory={subcategory}/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}




export default ProductItemPage
