import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import bgImage from "../assets/img/notfound.png"
import "../assets/styles/notFound.css"

const NotFoundPage = () => {
  return (
    <div>
        <Header/>
        <div className='bg-image'>
            <div className="text-section">
                <h2>Ooops...</h2>
                <h3>Page not found</h3>
                <p>Looks like you've stumbled into a black hole. Time to head back to safety!</p>
                <Link to={"/"} className='red-btn'>Go Back <FaArrowRightLong className='shake-arrow'/></Link>
            </div>
            <img src={bgImage} alt="pagenotfound" />

        </div>

    </div>
  )
}

export default NotFoundPage