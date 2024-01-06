import React, { useRef} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import '../assets/styles/header.css';
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <div className='full-header'>
      <div className="fHeader">
        <div className="container">
          <span>"Dress for the life you deserve."</span>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="header">
            <FaBars className="nav_btn" onClick={showNavbar} />
            <Link to={'/'} className="logo">
              Mariamis Atelier
            </Link>
            <nav >
              <ul className="navbar" ref={navRef}>
                <li><NavLink className="list-item" to={'/'}>Home</NavLink></li>
                <li className='megaDropdown'>
                  <NavLink to={"/products"} className="list-item" >Products <IoIosArrowDown /></NavLink>
                  <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <span>Women's</span>
                      <ul className="mega-links">
                        <li><Link to={"/dresses"} className='mega-links-item'>Dresses</Link></li>
                        <li><Link to={"/accessories"} className='mega-links-item'>Accessories</Link></li>
                        <li><Link to={"/weddingdresses"} className='mega-links-item'>Wedding Dresses</Link></li>
                      </ul>
                    </div>
                    <div className="row">
                      <span>Kid's</span>
                      <ul className="mega-links">
                        <li><Link to={"/kiddresses"} className='mega-links-item'>Dresses</Link></li>
                        <li><Link to={"/kidaccessories"} className='mega-links-item'>Accessories</Link></li>
                      </ul>
                    </div>
                    <div className="row">
                      <span>Special Clothing</span>
                      <ul className="mega-links">
                        <li><Link to={"/christening"} className='mega-links-item'>Christening</Link></li>
                        <li><Link to={"/christmas"} className='mega-links-item'>Christmas</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                </li>
                <li><NavLink className="list-item" to={'/about'}>About</NavLink></li>
                <li><NavLink className="list-item" to={'/contact'}>Contact</NavLink></li>
                <IoMdClose
                className="nav_btn nav_close_btn"
                onClick={showNavbar}
              />
              </ul>
            </nav>
            <div className="languages">
              <select name="select" id="select">
                <option value="English">English</option>
                <option value="Georgian">Georgian</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;