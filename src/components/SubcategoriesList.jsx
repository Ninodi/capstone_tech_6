import React from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import subcatImg1 from '../assets/img/subcatImg1.png'
import subcatImg2 from '../assets/img/subcatImg2.png'
import subcatImg3 from '../assets/img/subcatImg3.png'
import subcatImg4 from '../assets/img/subcatImg4.png'
import subcatImg5 from '../assets/img/subcatImg1.png'

const subcatImages = [subcatImg1, subcatImg2, subcatImg3, subcatImg4, subcatImg5]



function SubcategoriesList({category, subCategories}) {
  return (
    <div className='subcat-box-container'>
      {subCategories?.map((subcategory, index) => {
        const randomIndex = Math.floor(Math.random() * subcatImages.length)

        return (
          <NavLink key={uuidv4()} className='subcat-box' to={`/products/${category}/${subcategory.replaceAll(" ", '')}`}>
            <div className="subcat-image">
              <img src={subcatImages[randomIndex]} alt="" />
            </div>
            <p>{subcategory}</p>
            <div className="dropshadow"></div>
          </NavLink>
        );
      })}
    </div>
  )
}

export default SubcategoriesList