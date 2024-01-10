import React from 'react'
import Header from '../components/Header'
import CheckCircleIcon from '../assets/icons/check_circle.png'
import '../assets/styles/submit-page.css'


const SubmitPage = () => {
  
  return (
    <div>
        <Header/>
       <div className='submit-confirmed-div'>
        <img src={CheckCircleIcon} alt='check-circle'></img>
        <div className='submit-text-main'>
           We have received your Message :)
        </div>
        <div className='submit-text-secondary'>We will be in touch with you as soon as possible.</div>
        <div className='submit-text-secondary2'>Please Contact us for any query</div>
        <div className='submit-text-secondary3'>+995 593 440 680</div>
        <div className='submit-text-secondary3'>OR</div>
        <div className='submit-text-secondary3'>mariamtskhovrebashvili74@gmail.com</div>
        
       
        </div>




       
    </div>
  )
}

export default SubmitPage