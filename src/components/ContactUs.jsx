   
       import React, {useState,useEffect } from 'react'
       import { useNavigate } from 'react-router-dom';

       import styleSpa from '../assets/styles/contact-form-spa.module.css'
       import styleNav from '../assets/styles/contact-form-nav.module.css'
       import contactFormImg from '../assets/img/contact-form-img.png'
       //import useFetch from './useFetch'  // custom hook import, not used

       import SubmitPage from '../pages/SubmitPage'
      

    const ContactUs = ({pageType})=>
{


    const contactStyle = pageType === 'spa' ? styleSpa : styleNav


    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [url, setUrl] = useState('')
    const [message, setMessage ] = useState('')
    const [submitStatus, setSubmitStatus] = useState(null)
    const [formData, setformData] = useState(null)

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
   
   

        //const {jsonData,error,loading} = useFetch(request_url, 'POST', formData)
       
        const request_url = 'http://94.137.187.198:9876/leadcreate/'

       

useEffect(()=>
{
  setformData({fl_name:name,mail:email,mobile:phone,fb_url:url,message:message })
},[name,email,phone,url,message])



const fetchData = async () => {
  try {
   

      const response = await fetch(request_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      //console.log("response status code: " +response.status)
     throw new Error('Network response was not ok')

    }

    const jsonData = await response.json()
    setData(jsonData)
    console.log(data)
    // setName('')
    // setEmail('')
    // setPhone('')
    // setUrl('')
    // setMessage('')
  //  navigate('/SubmitPage');
    
    

  } catch (error) {
    
    setError(error.message)
    setSubmitStatus('Error submitting form, Please check input fields')
   
    console.log(error)
   
   
  } finally {
    
  }
};


    
   const handleSubmit =(e)=>
    {
        e.preventDefault()
        
            fetchData()


            setTimeout(() => {

              setSubmitStatus('')
              
            }, 2500);
          


    }
 



    return (
        <div>




  <div className={contactStyle['contact-form-container']}>

  <div className={contactStyle['contact-form-img-container']}><img src={contactFormImg} className={contactStyle['contact-form-img']} alt="contact-form-img"></img></div>

  <div className={contactStyle['input-fields-container']}>

  <p className={contactStyle['contactus-title']}>Contact Us</p>
    
    
   <form id="contactus-form" className={contactStyle['contact-form']} onSubmit={handleSubmit}>
    <div>
    <input type="text" className={contactStyle['contact-form-input']} placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    
   
    <div>
    <input type="email" className={contactStyle['contact-form-input']} placeholder='Email'value={email}  onChange={(e)=>setEmail(e.target.value)} />
    </div>

    <div>
    <input type="text" className={contactStyle['contact-form-input']} placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <div>
        <input type="url" className={contactStyle['contact-form-input']} placeholder='Link to your facebook profile' value={url} onChange={(e)=>setUrl(e.target.value)}/>
    </div>
    
    
    <div>
      
    <input type="text" className={`${contactStyle['contact-form-input']} ${contactStyle['contact-form-msg']}`} placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)} />
    </div>
    <button type="submit" className={contactStyle['contactus-btn']}>Contact Us</button> 
    </form>
    <div id={contactStyle['submit-status']}>{submitStatus}</div>
    
            
 
</div>


<div className={contactStyle['contact-info-container']}>

    <p className={contactStyle['contact-info-title']}>Contact</p>

   <p className={contactStyle['contact-info-text']}>+995 593 440 680</p>
   <p className={contactStyle['contact-info-text']}>Mariamtskhovrebashvili74@gmail.com</p>
   
   <p className={contactStyle['contact-info-title']}>Based In</p>
   <p className={contactStyle['contact-info-text']}>Georgia, Tkibuli</p>

   <div className={contactStyle['location-div']}>
        <h3>Location</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47181.50572166761!2d42.95001896306638!3d42.34584692539633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c9b428415ac77%3A0x54a8c7492541cee8!2sTkibuli!5e0!3m2!1sen!2sge!4v1702663574599!5m2!1sen!2sge" width="333" height="181" title='Tkibuli'  loading="lazy" ></iframe>
    </div>


</div>





</div>







        </div>
    )

}


export default ContactUs