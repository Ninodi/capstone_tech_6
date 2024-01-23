import React from 'react'
import Slide1 from '../assets/img/slide1.png'
import '../assets/styles/AboutPage.css'
import { useTranslation } from 'react-i18next'

function AboutHero() {
  const {t} = useTranslation()
  return (
    <div className='about-hero'>
        <img src={Slide1} alt="" />
        <div className="about-hero-title">
            <h1>{t("aboutUs.aboutUs")}</h1>
            <p>{t("aboutUs.home")} {t("aboutUs.aboutUs")} </p>
        </div>
    </div>
  )
}

export default AboutHero