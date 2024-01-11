import React from 'react'
import specCloth1 from '../assets/img/specCloth1.png'
import specCloth2 from '../assets/img/specCloth2.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const SpecialClothing = () => {
    const { t } = useTranslation()
  return (
    <div className='page-container'>
        <div>
            <div className='special-clothing-title'>  
                <h1>{t('specialClothingSection.specialClothing')}</h1>
                <NavLink className='view-all-btn' to={'/products'}>{t('specialClothingSection.viewAll')}</NavLink>
            </div>
            <div className='spec-cloth-container'>
                <div className='spec-cloth-item'>
                    <div className='spec-cloth-img'>
                        <img src={specCloth1} alt="Christening Clothes" />
                    </div>
                    <p>{t('specialClothingSection.christening')}</p>
                </div>
                <div className='spec-cloth-item'>
                    <div className='spec-cloth-img'>
                        <img src={specCloth2} alt="Christmas Clothes" />
                    </div>
                    <p>{t('specialClothingSection.christmas')}</p>
                </div>
            </div>
            <NavLink className='view-all-btn view-all-btn-mobile' to={'/products'}>{t('specialClothingSection.viewAll')}</NavLink>
        </div>
    </div>  
  )
}

export default SpecialClothing