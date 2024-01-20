import React from 'react'
import { Link } from 'react-router-dom'
import { GrFacebookOption } from "react-icons/gr";
import '../assets/styles/footer.css'
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <footer>
        <div className="container">
            <div><Link to={"/"} className='logo' onClick={scrollToTop}>{t('Header.logo')}</Link></div>
            <div className="footer-section">
                <div className="footer-col">
                    <h2>{t('footer.aboutUs')}</h2>
                    <p>{t('footer.aboutUsContet')}</p>
                </div>
                {/* <div className="footer-col customer-service">
                    <h2>{t('footer.customerService')}</h2>
                    <ul className='service-items'>
                        <li>{t('footer.delivery')}</li>
                        <li>{t('footer.size')}</li>
                        <li>{t('footer.CustomerFeedback')}</li>
                        <li>{t('footer.help')}</li>
                        <li>{t('footer.gifting')}</li>
                    </ul>
                </div> */}
                <div className="footer-col">
                    <h2>{t('footer.pages')}</h2>
                    <ul className='service-items'>
                        <Link className="list-item" to={"/"} onClick={scrollToTop}>{t('Header.home')}</Link>
                        <Link className="list-item" to={"/products"} onClick={scrollToTop}>{t('Header.products')}</Link>
                        <Link className="list-item" to={"/about"} onClick={scrollToTop}>{t('Header.about')}</Link>
                        <Link className="list-item" to={"/contact"} onClick={scrollToTop}>{t('Header.contact')}</Link>
                    </ul>
                </div>
                <div className="footer-col location">
                    <h2>{t('footer.location')}</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47181.50572166761!2d42.95001896306638!3d42.34584692539633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c9b428415ac77%3A0x54a8c7492541cee8!2sTkibuli!5e0!3m2!1sen!2sge!4v1702663574599!5m2!1sen!2sge" width="333" height="181" title='Tkibuli'  loading="lazy" ></iframe>
                </div>
            </div>
            <div className="copyrights">
                <div className='icon-section'>
                    <h2>{t('footer.follow')}</h2>
                    <div className="icons">
                        <Link to={"https://www.facebook.com/"} target='_blank'> <GrFacebookOption className='icon' /> </Link>
                    </div>
                </div>
                <div className="copyright">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer