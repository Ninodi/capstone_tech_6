import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'


function Breadcrumbs({mainCategory, subcategory, itemName}) {
    const { t } = useTranslation()
  return (
    <div className='breadcrumbs'>
        <NavLink to={'/'}>{t("breadCrumbs.home")} </NavLink>
        <NavLink to={'/products'}>{t("breadCrumbs.products")} </NavLink>
        <NavLink to={`/products/${mainCategory}`}>{mainCategory ? `${mainCategory} ${subcategory ? "/" : ''}` : ''} </NavLink>
        <NavLink to={`/products/${mainCategory}/${subcategory}`}>{subcategory ? `${subcategory} ${itemName ? '/' : ''}` : ''} </NavLink>
        <NavLink to={`/products/${mainCategory}/${subcategory}/${itemName?.toLowerCase().replaceAll(' ', '-')}`}>{itemName ? `${itemName}` : ''}</NavLink>
    </div>
  )
}

export default Breadcrumbs