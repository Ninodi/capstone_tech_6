import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/bestseller.css'
import img1 from '../assets/img/bestseller1.png'
import img2 from '../assets/img/bestseller2.png'
import img3 from '../assets/img/bestseller3.png'
import img4 from '../assets/img/bestseller4.png'
import { useTranslation } from 'react-i18next';

const BestSeller = () => {
    const { t } = useTranslation();
  return (
    <div>
        <div className="container best-seller-container">
            <div className="best-seller-section">
                <h2>{t('productPage.bestSeller')}</h2>
                <hr />
                <Link className='btn' to="/products">{t('productPage.showAll')}</Link>
            </div>
            <div className="product-section">
                <div className="best-seller-links">
                    <div className="best-seller-links-item">
                        <img src={img1} alt="" />
                        <h5>Alana Dress</h5>
                    </div>
                    <div className="best-seller-links-item">
                        <img src={img2} alt="" />
                        <h5>Wild West Hat</h5>
                    </div>
                    <div className="best-seller-links-item">
                        <img src={img3} alt="" />
                        <h5>White Swan Dress</h5>
                    </div>
                    <div className="best-seller-links-item">
                        <img src={img4} alt="" />
                        <h5>Little Italy Gloves</h5>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BestSeller