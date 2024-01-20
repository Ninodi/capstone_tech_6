import React from 'react'
import { useTranslation } from 'react-i18next'

function Banner() {
  const {t} = useTranslation()
  return (
    <div className='banner-category-page'>
        <p>{t("AllProductPage.order")}<span>{t("AllProductPage.online")}</span></p>
        <p>{t("AllProductPage.discover")}</p>
        <p>{t("AllProductPage.DressLife")}</p>
    </div>
  )
}

export default Banner