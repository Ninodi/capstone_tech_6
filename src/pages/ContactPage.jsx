import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'


const ContactPage = () => {
  return (
    <div>
        <Header/>
        <ContactUs pageType='nav'/>
        <Footer/>
    </div>
  )
}

export default ContactPage