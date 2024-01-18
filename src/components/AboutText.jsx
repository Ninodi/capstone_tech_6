import React from 'react'
import About1 from '../assets/img/about1.png'
import About2 from '../assets/img/about2.png'
import About3 from '../assets/img/about3.png'
import { useTranslation } from 'react-i18next';

function AboutText() {
    const { t } = useTranslation();
  return (
    <div className='about-info'>
        <div className="info-container">
            <div className="info-txt">
                <h2>{t('aboutUsPage.aboutUs')}</h2>
                <p>{t('aboutUsPage.firstImgDescription')}</p>
            </div>
            <div className="info-image">
                <img src={About1} alt="About Us image" />
            </div>
        </div>
        <div className="info-container">
            <div className="info-txt">
                <h2>{t('aboutUsPage.environmentalSustainability')}</h2>
                <p>{t('aboutUsPage.secondImgDescription')}</p>
            </div>
            <div className="info-image">
                <img src={About2} alt="Environmental Sustainability" />
            </div>
        </div>
        <div className="info-container">
            <div className="info-txt">
                <h2>{t('aboutUsPage.womenPower')}</h2>
                <p>{t('aboutUsPage.thirdImgDescription')}</p>
            </div>
            <div className="info-image">
                <img src={About3} alt="Women Power" />
            </div>
        </div>
    </div>
  )
}

export default AboutText