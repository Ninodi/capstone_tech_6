import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/bestseller.css'
import img1 from '../assets/img/bestseller1.png'
import img2 from '../assets/img/bestseller2.png'
import img3 from '../assets/img/bestseller3.png'
import img4 from '../assets/img/bestseller4.png'

const BestSeller = () => {
  return (
    <div>
        <div className="container best-seller-container">
            <div className="best-seller-section">
                <h2>Best Sellers</h2>
                <hr />
                <Link className='btn' to="/products">Show all Woomen's Styles</Link>
            </div>
            <div className="product-section">
                <div className="best-seller-links">
                    <div className="best-seller-links-item">
                        <img src={img1} alt="" />
                        <h5>Mancho And Manana</h5>
                    </div>
                    <div className="best-seller-links-item">
                        <img src={img2} alt="" />
                        <h5>Mancho And Manana</h5>
                    </div>
                    <div className="best-seller-links-item">
                        <img src={img3} alt="" />
                        <h5>Mancho And Manana</h5>
                    </div>
                    <div className="best-seller-links-item">
                        <img src={img4} alt="" />
                        <h5>Mancho And Manana</h5>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BestSeller