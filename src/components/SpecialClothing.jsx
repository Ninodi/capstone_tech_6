import React from 'react'
import specCloth1 from '../assets/img/specCloth1.png'
import specCloth2 from '../assets/img/specCloth2.png'
import { NavLink } from 'react-router-dom'


const SpecialClothing = () => {
  return (
    <div className='page-container'>
        <div>
            <div className='special-clothing-title'>  
                <h1>Special Clothing</h1>
                <NavLink className='view-all-btn' to={'/products'}>View All</NavLink>
            </div>
            <div className='spec-cloth-container'>
                <div className='spec-cloth-item'>
                    <div className='spec-cloth-img'>
                        <img src={specCloth1} alt="Christening Clothes" />
                    </div>
                    <p>Christening</p>
                </div>
                <div className='spec-cloth-item'>
                    <div className='spec-cloth-img'>
                        <img src={specCloth2} alt="Christmas Clothes" />
                    </div>
                    <p>Christmas</p>
                </div>
            </div>
            <NavLink className='view-all-btn view-all-btn-mobile' to={'/products'}>View All</NavLink>
        </div>
    </div>  
  )
}

export default SpecialClothing