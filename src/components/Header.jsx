import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import '../assets/styles/header.css';
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const Header = () => {

  const navRef = useRef();
  const [categories, setCategories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || 'en'
  );

  useEffect(() => {
    fetch('http://94.137.187.198:9876/filter/')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  const { t, i18n } = useTranslation();

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
            <nav>
              <ul className="navbar" ref={navRef}>
                <li><NavLink className="list-item" to={'/'}>{t('Header.home')}</NavLink></li>
                <li className='mega-dropdown'>
                  <NavLink to={"/products"} className="list-item" >{t('Header.products')} <IoIosArrowDown/></NavLink>
                  <div className="mega-box">
                    <div className="content">
                      <div className="row">
                        <span>{t('Header.productsDrp.womens')}</span>
                        <ul className="mega-links">
                          {categories
                            .filter(category => category.main_cat === 'ქალის')
                            .map(category => (
                              <li key={category.id}>
                                <Link to={`/products/${category.secondary_cat}`} state={{ mainCategory: category.id }} className='mega-links-item'>
                                  {category.secondary_cat}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="row">
                        <span>{t('Header.productsDrp.kids')}</span>
                        <ul className="mega-links">
                          {categories
                            .filter(category => category.main_cat === 'ბავშვის')
                            .map(category => (
                              <li key={category.id}>
                                <Link to={`/products/${category.secondary_cat}`} state={{ mainCategory: category.id }} className='mega-links-item'>
                                  {category.secondary_cat}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="row">
                        <span>{t('Header.productsDrp.SpecialClothing')}</span>
                        <ul className="mega-links">
                          {categories
                            .filter(category => category.main_cat === 'სხვა')
                            .map(category => (
                              <li key={category.id}>
                                <Link to={`/products/${category.secondary_cat}`} state={{ mainCategory: category.id }} className='mega-links-item'>
                                  {category.secondary_cat}
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