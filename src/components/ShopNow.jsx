import shopnowImg from '../assets/img/shopnow-img.png'
import '../assets/styles/shopnow.css'
import '../assets/styles/fonts.css'
import { useTranslation } from 'react-i18next';

const ShopNow = ()=>
{
    const { t } = useTranslation();
    return (
        
        <div>

            <div className='shopnow-container'>

            <div className='shopnow-img-container'><img src={shopnowImg} className='shopnow-img' alt='shopnow-img'></img></div>

            <div className='shopnow-overlay-div'>
                <div>
                <p className='shopnow-title'>Mariami's Atelier</p>
                <hr className='shopnow-separator'/>
                <p className='shopnow-text'>{t('shopNowSection.shopNowText')}</p>
                {/* <button className="shopnow-btn">{t('shopNowSection.shopNow')}</button> */}
            </div>

       
        </div>



</div>
        </div>
    )

}

export default ShopNow