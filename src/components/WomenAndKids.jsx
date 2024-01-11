import React from 'react'
import womenAndKids1 from '../assets/img/womenAndKids1.png';
import womenAndKids2 from '../assets/img/womenAndKids2.png';
import womenAndKids3 from '../assets/img/womenAndKids3.png';
import womenAndKids4 from '../assets/img/womenAndKids4.png';
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const WomenAndKids = () => {
  const { t } = useTranslation();
  return (
    <div className='page-container'>
        <div>
            <h1>{t('bestSellersSection.womenAndKids')}</h1>
            <div className='women-and-kids'>
                <NavLink className='woman-and-kids-item' to={"/products"}><img src={womenAndKids1} alt="" /></NavLink>
                <NavLink className='woman-and-kids-item' to={"/products"}><img src={womenAndKids2} alt="" /></NavLink>
                <NavLink className='woman-and-kids-item' to={"/products"}><img src={womenAndKids3} alt="" /></NavLink>
                <NavLink className='woman-and-kids-item' to={"/products"}><img src={womenAndKids4} alt="" /></NavLink>
            </div>
        </div>
    </div>  
  )
}

export default WomenAndKids