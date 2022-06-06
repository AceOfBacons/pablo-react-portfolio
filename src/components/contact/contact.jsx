import React, { useRef, useState } from 'react'
import './contact.scss'
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_90ngd22', 'template_map8gla', formRef.current, '00QXTBuIKgCM6uXVx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  

  return (
    <div className='contact' id='contact'>
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <Fade right cascade>
          <h2>Contact</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' name='user_email'/>
            <input type="text" placeholder='Subject' name='user_subject'/>
            <textarea placeholder='Content of your message here' name='message'></textarea>
            <button type='submit'>Send</button>
            
            {message && <span>Thank you, I will get back to you pronto!</span>}
          </form>
          </Fade>
        </div>
    </div>
  )
}
