import shopnowImg from '../assets/images/shopnow-img.png'
import '../assets/styles/shopnow.css'
import '../assets/styles/fonts.css'

const ShopNow = ()=>
{

    return (
        
        <div>

            <div className='shopnow-container'>

            <div className='shopnow-img-container'><img src={shopnowImg} className='shopnow-img' alt='shopnow-img'></img></div>

            <div className='shopnow-overlay-div'>

                <p className='shopnow-title'>Mariami's Atelier</p>
                <hr className='shopnow-separator'/>
                <p className='shopnow-text'>Feel Confident In The Clothes You wear</p>
                <button className="shopnow-btn">Shop Now</button>
            </div>

       
        </div>




        </div>
    )

}

export default ShopNow