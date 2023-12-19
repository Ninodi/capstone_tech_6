import React from 'react'
import { Link } from 'react-router-dom'
import { GrFacebookOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import '../assets/styles/footer.css'


const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div><Link to={"/"} className='logo'>Mariamis Atelier</Link></div>
            <div className="footer-section">
                <div className="footer-col">
                    <h2>About Us</h2>
                    <p>At Mariamis Atelier, we believe that fashion should
                         be accessible, affordable, and most importantly,
                          fun! We offer a curated selection of clothing 
                          for everyone, from trendy styles to timeless classics
                          , all at prices you'll love.</p>
                </div>
                <div className="footer-col">
                    <h2>Customer Service</h2>
                    <ul className='service-items'>
                        <li>Delivery & Returns</li>
                        <li>Size Guides</li>
                        <li>Customer Feedback</li>
                        <li>Help</li>
                        <li>Gifting</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h2>pages</h2>
                    <ul className='service-items'>
                        <Link className="list-item" to={"/"}>Home</Link>
                        <Link className="list-item" to={"/products"} >Products</Link>
                        <Link className="list-item" to={"/about"}>About</Link>
                        <Link className="list-item" to={"/contact"}>Contact</Link>
                    </ul>
                </div>
                <div className="footer-col">
                    <h2>Location</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47181.50572166761!2d42.95001896306638!3d42.34584692539633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c9b428415ac77%3A0x54a8c7492541cee8!2sTkibuli!5e0!3m2!1sen!2sge!4v1702663574599!5m2!1sen!2sge" width="333" height="181" title='Tkibuli'  loading="lazy" ></iframe>
                </div>
            </div>
            <div className="copyrights">
                <div className='icon-section'>
                    <h2>Follow Us</h2>
                    <div className="icons">
                        <Link to={"https://www.facebook.com/"} target='_blank'> <GrFacebookOption className='icon' /> </Link>
                        <Link to={"https://twitter.com/?lang=en"} target='_blank'><FiTwitter  className='icon'/></Link>
                        <Link to={"https://www.instagram.com/"} target='_blank'><FaInstagram className='icon'/> </Link>
                        <Link to={"https://www.linkedin.com/"} target='_blank'><RiLinkedinLine className='icon'/> </Link>
                    </div>
                </div>
                <div className="copyright">
                    <p>© Copyright 2023 / Mariamis Atelier Inc. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer