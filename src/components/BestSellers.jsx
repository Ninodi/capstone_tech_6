import React from 'react'
import BestSellersItem from './BestSellersItem'
import BestSeller1 from '../assets/img/bestSellers1.png'
import BestSeller2 from '../assets/img/bestSellers2.png'
import BestSeller3 from '../assets/img/bestSellers3.png'
import Messenger from '../assets/img/messenger.png'
import MessengerLarge from '../assets/img/messengerLarge.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BestSellers = () => {
    const { t} = useTranslation();
    const bestSellers = [
        {
            bestSellerImg: BestSeller1,
            bestSellerCategory: t('bestSellersSection.bestSellerCategory1'),
            categoryId: 2
        },
        {
            bestSellerImg: BestSeller2,
            bestSellerCategory: t('bestSellersSection.bestSellerCategory2'),
            categoryId: 4
        },
        {
            bestSellerImg: BestSeller3,
            bestSellerCategory: t('bestSellersSection.bestSellerCategory3'),
            categoryId: 10
        },
    ]

    return (
        <div className='page-container' style={{paddingRight: 0}}>
            <div>
                <div className="best-sellers-title" style={{display: 'flex'}}>
                    <h1>{t('productPage.bestSeller')}</h1>
                    <div className="messenger-icon">
                        <Link to={'/'}>
                            <img src={Messenger} alt="messenger icon" />
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
                        <BestSellersItem bestSellerCategory={bestSeller.bestSellerCategory} categoryId={bestSeller.categoryId} bestSellerImg={bestSeller.bestSellerImg} key={Math.random()}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestSellers