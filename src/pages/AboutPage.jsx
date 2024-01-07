import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import AboutText from '../components/AboutText'

const AboutPage = () => {
  
  return (
    <div>
        <Header/>
        <AboutHero />
        <div className="hero-info-container">
          <AboutText />
        </div>
        <Footer />
    </div>
  )
}

export default AboutPage