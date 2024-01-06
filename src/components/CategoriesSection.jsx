import React from 'react'
import BestSellers from './BestSellers'
import WomenAndKids from './WomenAndKids'
import SpecialClothing from './SpecialClothing'


const CategoriesSection = () => {
  return (
    <div className='categories-section-container'>
        <BestSellers />
        <WomenAndKids />
        <SpecialClothing />
    </div>
  )
}

export default CategoriesSection