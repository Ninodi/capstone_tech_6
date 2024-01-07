import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import CategoriesSection from '../components/CategoriesSection'
import "../assets/styles/MainPage.css"
import ShopNow from '../components/ShopNow'
import ContactUs from '../components/ContactUs'
import BackToTop from '../components/BackToTop'

const MainPage = () => {
  return (
    <div>
      <Header/>
        <main>
          <Slider/>
          <CategoriesSection />
          <ShopNow />
          <ContactUs />
          <BackToTop/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainPage