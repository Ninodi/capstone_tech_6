import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import '../assets/styles/header.css';
import { IoIosArrowDown } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { BounceLoader } from 'react-spinners'
import useFetch from '../hooks/useFetch';

const Header = () => {

  const [megaBoxOpen, setMegaBoxOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 600);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const toggleMegaBox = () => {
    setMegaBoxOpen(!megaBoxOpen);
    const arrowElement = document.querySelector('.products-arrow');
  if (arrowElement) {
    const currentRotation = arrowElement.style.transform;
    const newRotation = currentRotation === 'rotate(0deg)' ? 'rotate(-90deg)' : 'rotate(0deg)';
    arrowElement.style.transform = newRotation;
  }
  };

  const navRef = useRef();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || 'en'
  );
  const { response: categories,loading, onFetch } = useFetch({
    url: 'http://94.137.187.198:9876/category/',
    method: 'GET',
  });


  useEffect(() => {
    onFetch(); 
  }, [onFetch]);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [i18n, selectedLanguage]);

  const handleDocumentClick = (event) => {
    if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-toggle')) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
    document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
    setIsDropdownOpen(false);
  };
  if(loading && !categories) 
  return <div className='loader'>
    <BounceLoader
        className='spiner'
        color= {'#FF6767'} 
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>

  return (
    <div className='full-header'>
      <div className='first-header'>
        <div className="container">
          <span>{t('Header.headline')}</span>
        </div>
      </div>
      <header>
        <div className="header-container">
          <div className="header">
            <FaBars className="nav-btn" onClick={showNavbar} />
            <Link to={'/'} className="logo">
              {t('Header.logo')}
            </Link>
            <nav>
              <ul className="navbar" ref={navRef}>
                <li><NavLink className="list-item" to={'/'}>{t('Header.home')}</NavLink></li>
                <li className='mega-dropdown'>
                  <div>
                  <div className='dropdown-items'> 
                    <NavLink to={"/products"} className="list-item ">{t('Header.products')}</NavLink> 
                    <IoIosArrowDown className='products-arrow' onClick={toggleMegaBox}/> </div>
                  </div>
                  <div  className={`mega-box ${megaBoxOpen ? 'open' : ''}`}>
                    <div className="content">
                      <div className="row">
                        <span><NavLink to={'/products/woman'}>{t('Header.productsDrp.womens')}</NavLink></span>
                        <ul className="mega-links">
                          {categories && categories
                            .filter(category => category.main_cat === 'Woman')
                            .map(category => (
                              <li key={category.id}>
                                <Link to={`/products/${category.main_cat}/${category.secondary_cat.replaceAll(' ', '')}`} state={{ mainCategory: category.id }} className='mega-links-item'>
                                {selectedLanguage === 'ka' ? category.secondary_cat_geo : category.secondary_cat}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="row">
                        <span><NavLink to={'/products/Children'}>{t('Header.productsDrp.kids')}</NavLink></span>
                        <ul className="mega-links">
                          {categories && categories
                            .filter(category => category.main_cat === 'Children')
                            .map(category => (
                              <li key={category.id}>
                                <Link to={`/products/${category.main_cat}/${category.secondary_cat}`} state={{ mainCategory: category.id }} className='mega-links-item'>
                                {selectedLanguage === 'ka' ? category.secondary_cat_geo : category.secondary_cat}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="row">
                        <span><NavLink to={'/products/other'}>{t('Header.productsDrp.SpecialClothing')}</NavLink></span>
                        <ul className="mega-links">
                          {categories && categories
                            .filter(category => category.main_cat === 'Other')
                            .map(category => (
                              <li key={category.id}>
                                <Link to={`/products/${category.main_cat}/${category.secondary_cat}`} state={{ mainCategory: category.id }} className='mega-links-item'>
                                {selectedLanguage === 'ka' ? category.secondary_cat_geo : category.secondary_cat}
                                </Link>
                              </li>
                            ))}
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
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {isSmallScreen ? (
            <>
              {selectedLanguage === 'en' ? 'Eng' : 'ქართ'}
              { <MdLanguage  className='dropdown-icon language-icon'/> }
            </>
          ) : (
            <>
              {selectedLanguage === 'en' ? 'English' : 'ქართული'}
              <IoIosArrowDown className='dropdown-icon' />
            </>
          )}
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <label>
              {isSmallScreen ? 'Eng' : 'English'}
              <input
                type="radio"
                name="language"
                value="en"
                checked={selectedLanguage === 'en'}
                onChange={handleLanguageChange}
              />
            </label>
            <label>
              {isSmallScreen ? 'ქართ' : 'ქართული'}
              <input
                type="radio"
                name="language"
                value="ka"
                checked={selectedLanguage === 'ka'}
                onChange={handleLanguageChange}
              />
            </label>
          </div>
        )}
      </div>
    </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;