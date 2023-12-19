import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import '../assets/styles/header.css'

const Header = () => {
  return (
    <div>
        <div className='fHeader'>
            <div className="conatiner">
                <span>"Dress for the life you deserve."</span>
            </div>
        </div>
        <header>
            <div className="container">
                <nav className="navbar">
                    <Link to={"/"} className='logo'>Mariamis Atelier</Link>
                    <ul className="lists">
                        <NavLink className="list-item" to={"/"}>Home</NavLink>
                        <NavLink className="list-item" to={"/products"} >Products</NavLink>
                        <NavLink className="list-item" to={"/about"}>About</NavLink>
                        <NavLink className="list-item" to={"/contact"}>Contact</NavLink>
                    </ul>
                    <div className='languages'>
                        <select name="select" id="select">
                            <option value="English">English</option>
                            <option value="Georgian">Georgian</option>
                        </select>
                    </div>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header