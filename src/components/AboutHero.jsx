import React from 'react'
import Slide1 from '../assets/img/slide1.png'
import '../assets/styles/AboutPage.css'

function AboutHero() {
  return (
    <div className='about-hero'>
        <img src={Slide1} alt="" />
        <div className="about-hero-title">
            <h1>About us</h1>
            <p>Home/About Us</p>
        </div>
    </div>
  )
}

export default AboutHero