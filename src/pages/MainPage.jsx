import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import CategoriesSection from '../components/CategoriesSection'
import "../assets/styles/MainPage.css"

const MainPage = () => {
  return (
    <div>
        <Header/>
        <main>
          <Slider/>
          <CategoriesSection />
        </main>
        <Footer/>
    </div>
  )
}

export default MainPage