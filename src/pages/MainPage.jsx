import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import CategoriesSection from '../components/CategoriesSection'
import "../assets/styles/MainPage.css"
import ShopNow from '../components/ShopNow'
import ContactUs from '../components/ContactUs'
import BackToTop from '../components/BackToTop'
<<<<<<< HEAD
=======

>>>>>>> f556d01b0ea53b09616f5d634248b2e28d3e3199

const MainPage = () => {
  return (
    <div>
      <Header/>
        <main>
          <Slider/>
          <CategoriesSection />
          <ShopNow />
<<<<<<< HEAD
          <ContactUs />
=======
>>>>>>> f556d01b0ea53b09616f5d634248b2e28d3e3199
          <ContactUs pageType='spa'/>
          <BackToTop/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainPage