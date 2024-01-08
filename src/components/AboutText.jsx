import React from 'react'
import About1 from '../assets/img/about1.png'
import About2 from '../assets/img/about2.png'
import About3 from '../assets/img/about3.png'

function AboutText() {
  return (
    <div className='about-info'>
        <div className="info-container">
            <div className="info-txt">
                <h2>About Us</h2>
                <p>
                "We're passionate about creating beautiful clothing that's good for you and the planet. We use organic cotton, recycled materials, and sustainable dyes to make clothing that looks as good as it feels. We believe that fashion can be a force for good, and we're committed to making a positive impact on the world."
                </p>
            </div>
            <div className="info-image">
                <img src={About1} alt="" />
            </div>
        </div>
        <div className="info-container">
            <div className="info-txt">
                <h2>Environmental Sustainability</h2>
                <p>
                Nestled in the heart of Tbilisi, Georgia, Mariami's atelier isn't just a fashion haven – it's a whispered promise of a kinder tomorrow. Here, amidst the gentle whir of sewing machines and the rhythmic snip of scissors, sustainable threads are woven into exquisite garments, each whisper-light creation a testament to Mariami's unwavering commitment to environmental responsibility.
                </p>
            </div>
            <div className="info-image">
                <img src={About2} alt="" />
            </div>
        </div>
        <div className="info-container">
            <div className="info-txt">
                <h2>Women Power</h2>
                <p>
                Design pieces that flatter a variety of body types and reflect the diverse experiences of women. This could include functional clothing for active lifestyles, comfortable and stylish workwear, or occasion wear that makes women feel confident and beautiful.
                </p>
            </div>
            <div className="info-image">
                <img src={About3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutText