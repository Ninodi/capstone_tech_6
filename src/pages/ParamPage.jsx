import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import bgImage from "../assets/img/notfound.png"
import "../assets/styles/notFound.css"
import { useTranslation } from 'react-i18next';

const ParamPage = () => {
  const { t } = useTranslation();
  return (
    <div>
        <div className='bg-image'>
            <div className="text-section">
                <h2>{t('pageNotFound.ooops')}</h2>
                <h3>{t('pageNotFound.pageNotFound')}</h3>
                <p>{t('pageNotFound.spanText')}</p>
                <Link to={"/"} className='red-btn'>{t('pageNotFound.goBack')} <FaArrowRightLong className='shake-arrow'/></Link>
            </div>
            <img src={bgImage} alt="pagenotfound" />

        </div>

    </div>
  )
}

export default ParamPage
