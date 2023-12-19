import React from 'react'
import BestSellersItem from './BestSellersItem'
import BestSeller1 from '../assets/img/bestSellers1.png'
import BestSeller2 from '../assets/img/bestSellers2.png'
import BestSeller3 from '../assets/img/bestSellers3.png'

const BestSellers = () => {
    const bestSellers = [
        {
            bestSellerImg: BestSeller1,
            bestSellerCategory: "Wedding dress"
        },
        {
            bestSellerImg: BestSeller2,
            bestSellerCategory: "Child's dress"
        },
        {
            bestSellerImg: BestSeller3,
            bestSellerCategory: "Accessories"
        },
    ]

    return (
        <div className='page-container'>
            <div>
                <h1>Best Sellers</h1>
                <div className='best-sellers'>
                    {bestSellers.map(bestSeller => (
                        <BestSellersItem bestSellerCategory={bestSeller.bestSellerCategory} bestSellerImg={bestSeller.bestSellerImg} key={Math.random()}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestSellers