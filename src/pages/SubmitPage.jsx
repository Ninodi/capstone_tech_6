import React from 'react'
import Header from '../components/Header'
import CheckCircleIcon from '../assets/icons/check_circle.png'
import '../assets/styles/submit-page.css'
import { useTranslation } from 'react-i18next';

const SubmitPage = () => {
  
  const { t } = useTranslation()
  
  return (
    <div>
        <Header/>
       <div className='submit-confirmed-div'>
        <img src={CheckCircleIcon} alt='check-circle'></img>
        <div className='submit-text-main'>
          {t('submitForm.mainText')}
        </div>
        <div className='submit-text-secondary'> {t('submitForm.secondText')}</div>
        <div className='submit-text-secondary2'> {t('submitForm.thirdText')}</div>
        <div className='submit-text-secondary3'>+995 593 440 680</div>
        <div className='submit-text-secondary3'> {t('submitForm.fourthText')}</div>
        <div className='submit-text-secondary3'>mariamtskhovrebashvili74@gmail.com</div>
        
       
        </div>




       
    </div>
  )
}

export default SubmitPage