import React, { useRef } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"
import '../assets/styles/header.css'

const Header = () => {
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
  return (
    <div>
        <div className='fHeader'>
            <div className="conatiner">
                <span>"Dress for the life you deserve."</span>
            </div>
        </div>
        <header>
            <div className="container">
                <div className="header">
                    <FaBars className='nav_btn' onClick={showNavbar}/>
                    <Link to={"/"} className='logo'>Mariamis Atelier</Link>
                    <nav className="navbar" ref={navRef}>
                        <NavLink className="list-item" to={"/"}>Home</NavLink>
                        <NavLink className="list-item" to={"/products"} >Products</NavLink>
                        <NavLink className="list-item" to={"/about"}>About</NavLink>
                        <NavLink className="list-item" to={"/contact"}>Contact</NavLink>
                        <IoMdClose className='nav_btn nav_close_btn' onClick={showNavbar}/>
                    </nav>
                    <div className='languages'>
                        <select name="select" id="select">
                            <option value="English">English</option>
                            <option value="Georgian">Georgian</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header