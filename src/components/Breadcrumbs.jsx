import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'


function Breadcrumbs({mainCategory, subcategory, itemName}) {
    const { t } = useTranslation()
  return (
    <div className='breadcrumbs'>
        <NavLink to={'/'}>Home / </NavLink>
        <NavLink to={'/products'}>Products / </NavLink>
        <NavLink to={`/products/${mainCategory}`}>{mainCategory ? `${mainCategory} ${subcategory ? "/" : ''}` : ''} </NavLink>
        <NavLink to={`/products/${mainCategory}/${subcategory}`}>{subcategory ? `${subcategory} ${itemName ? '/' : ''}` : ''} </NavLink>
        <NavLink to={`/products/${mainCategory}/${subcategory}/${itemName}`}>{itemName ? `${itemName}` : ''}</NavLink>
    </div>
  )
}

export default Breadcrumbs