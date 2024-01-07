import React from 'react'
import BestSellersItem from './BestSellersItem'
import BestSeller1 from '../assets/img/bestSellers1.png'
import BestSeller2 from '../assets/img/bestSellers2.png'
import BestSeller3 from '../assets/img/bestSellers3.png'
import Messenger from '../assets/img/messenger.png'
import MessengerLarge from '../assets/img/messengerLarge.png'
import { Link } from 'react-router-dom'

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
        <div className='page-container' style={{paddingRight: 0}}>
            <div>
                <div className="best-sellers-title" style={{display: 'flex'}}>
                    <h1>Best Sellers</h1>
                    <div className="messenger-icon">
                        <Link to={'/'}>
                            <img src={Messenger} alt="" />
                        </Link>
                    </div>
                    <div className="messenger-icon-large">
                        <Link to={'/'}>
                            <img src={MessengerLarge} alt="Contact us on Messenger" />
                        </Link>
                    </div>
                </div>
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