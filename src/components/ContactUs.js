import '../assets/styles/contact-form.css'
import contactFormImg from '../assets/images/contact-form-img.png'
import '../assets/styles/fonts.css'
const ContactUs = ()=>
{


    return (
        <div>




<div className='contact-form-container'>

<div className='contact-form-img-container'><img src={contactFormImg} className='contact-form-img' alt="contact-form-img"></img></div>
<div className='input-fields'>
    <p className='contactus-title'>Contact Us</p>
    <br/>
    
   <form className='contact-form'>
    <div>
    <input type="text" className='contact-form-input' placeholder='Full Name'/>
    </div>
     
   
    <div>
    <input type="email" className='contact-form-input' placeholder='Email'/>
    </div>
    
    
    <div>
    <input type="text" className='contact-form-input' placeholder='Message'/>
    </div>
    <button type="submit" className='contact-us-btn'>Contact Us</button>
    </form>
</div>


<div className='contact-info'>

    <p className='contact-info-title'>Contact</p>

   <p className='contact-info-text'>+995 593 440 680</p>
   <p className='contact-info-text'>Mariamtskhovrebashvili74@gmail.com</p>
   
   <p id='based-in' className='contact-info-title'>Based In</p>
   <p className='contact-info-text'>Georgia, Tkibuli</p>






</div>





</div>







        </div>
    )

}


export default ContactUs