import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import CategoriesSection from '../components/CategoriesSection'
import ShopNow from '../components/ShopNow'
import ContactUs from '../components/ContactUs'


const MainPage = () => {
  return (
    <div>
        <Header/>
        <main>
          <Slider/>
          <CategoriesSection />
          <ShopNow />
          <ContactUs pageType='spa'/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainPage