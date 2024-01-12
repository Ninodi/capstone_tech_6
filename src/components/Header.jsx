import React, { useEffect, useRef, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import '../assets/styles/header.css';
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';


const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || i18n.language || 'en'
  );
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [i18n, selectedLanguage]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
  };

  return (
    <div className='full-header'>
        <div className='first-header'>
            <div className="container">
                <span>{t('Header.headline')}</span>
            </div>
        </div>
      <header>
        <div className="container">
          <div className="header">
            <FaBars className="nav-btn" onClick={showNavbar} />
            <Link to={'/'} className="logo">
            {t('Header.logo')}
            </Link>
            <nav >
              <ul className="navbar" ref={navRef}>
              <li><NavLink className="list-item" to={'/'}>{t('Header.home')}</NavLink></li>
                <li  className='mega-dropdown test'>
                  <NavLink to={"/products"} className="list-item" >{t('Header.products')} <IoIosArrowDown /></NavLink>
                  <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <span>{t('Header.productsDrp.womens')}</span>
                      <ul className="mega-links">
                        <li><Link to={"/products/dresses"} state={{ mainCategory: '2' }} className='mega-links-item'>{t('Header.productsDrp.dresses')}</Link></li>
                        <li><Link to={"/products/accessories"} state={{ mainCategory: '3' }} className='mega-links-item'>{t('Header.productsDrp.accesories')}</Link></li>
                        <li><Link to={"/products/weddingdresses"} state={{ mainCategory: '4' }} className='mega-links-item'>{t('Header.productsDrp.weddingDresses')}</Link></li>
                      </ul>
                    </div>
                    <div className="row">
                      <span>{t('Header.productsDrp.kids')} </span>
                      <ul className="mega-links">
                        <li><Link to={"/products/kiddresses"} className='mega-links-item'>{t('Header.productsDrp.dresses')}</Link></li>
                        <li><Link to={"/products/kidaccessories"} className='mega-links-item'>{t('Header.productsDrp.accesories')}</Link></li>
                      </ul>
                    </div>
                    <div className="row">
                      <span>{t('Header.productsDrp.SpecialClothing')}</span>
                      <ul className="mega-links">
                        <li><Link to={"/products/christening"} className='mega-links-item'>{t('Header.productsDrp.christening')}</Link></li>
                        <li><Link to={"/products/christmas"} className='mega-links-item'>{t('Header.productsDrp.christmas')}</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                </li>
                <li><NavLink className="list-item" to={'/about'}>{t('Header.about')}</NavLink></li>
                <li><NavLink className="list-item" to={'/contact'}>{t('Header.contact')}</NavLink></li>
                <IoMdClose
                className="nav-btn nav-close-btn"
                onClick={showNavbar}
              />
              </ul>
            </nav>
            <div className="languages">
              <select name="select" id="select" value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="en">{t('Header.language.english')}</option>
                <option value="ka">{t('Header.language.georgian')}</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;