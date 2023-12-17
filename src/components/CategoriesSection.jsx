import React from 'react'
import BestSellers from './BestSellers'
import WomenAndKids from './WomenAndKids'
import SpecialClothing from './SpecialClothing'

const CategoriesSection = () => {
  return (
    <div style={{paddingTop: '40px', paddingBottom: '85px'}}>
        <BestSellers />
        <WomenAndKids />
        <SpecialClothing />
    </div>
  )
}

export default CategoriesSection