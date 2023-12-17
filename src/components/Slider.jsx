import React, { useEffect, useState } from 'react'
import "../assets/styles/slider.css"
import slide1 from '../assets/img/slide1.png';
import slide2 from '../assets/img/slide2.png';
import slide3 from '../assets/img/slide3.png';
import slide4 from '../assets/img/slide4.png';
import { NavLink } from 'react-router-dom'

const Slider = () => {
    const slideContent = [
        {
            slideTitle: 'Welcome To Fashion Heaven',
            slideImg: slide1,
        },
        {
            slideTitle: 'Get more information about our Designers',
            slideImg: slide2,
        },
        {
            slideTitle: 'Keep in touch for the latest updates ',
            slideImg: slide3,
        },
        {
            slideTitle: 'Get to know with elite collection',
            slideImg: slide4,
        },
    ]; 

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex]);


    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideContent.length);
    };
  
    const setActivePagination = (pagIndex) => {
        // console.log(pagIndex)
        if(currentImageIndex == pagIndex) return "pagination-item-active"
    }

    return (
      <div className="image-slider-container">
        <div className="slider-content">
            <div className="slide-title">{slideContent[currentImageIndex].slideTitle}</div>
            <NavLink className="explore-btn" to={"/products"} >Explore</NavLink>
        </div>
        <img src={slideContent[currentImageIndex].slideImg} alt={`Slide ${currentImageIndex + 1}`} className="slider-image" />
        <div className="pagination">
            {slideContent.map((image, index) => (
                <div className={`pagination-item ${setActivePagination(index)}`} key={index} onClick={() => setCurrentImageIndex(index)}></div>
            ))}
        </div>
      </div>
    );
}

export default Slider