import React from 'react'
import icon from '../assets/icons/frame.png'
import { NavLink,Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='full-header'>
        <div className='fHeader'>
            <div className="conatiner">
                <span>"Dress for the life you deserve."</span>
            </div>
                <select name="select" id="select">
                    <option value="English">English</option>
                    <option value="Georgian">Georgian</option>
                </select>
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
                    <img src={icon} alt="icon" />
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header