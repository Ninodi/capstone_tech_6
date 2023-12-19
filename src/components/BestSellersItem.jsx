import React from 'react'
import { NavLink } from 'react-router-dom'
import categoryArrow from '../assets/img/categoryArrow.png';

const BestSellersItem = ({bestSellerImg, bestSellerCategory}) => {
    return (
        <NavLink className='best-sellers-item' to={`/products`}>
            <img className='category-img' src={bestSellerImg} alt={bestSellerImg} />
            <div className='category-btn'>
                {bestSellerCategory}
                <img src={categoryArrow} alt="" />
            </div>
        </NavLink>
    )
}

export default BestSellersItem