import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_eozzi4m', 'template_trb3quu', form.current, 'C7L6qMuYPVQ7ee6rR')

        e.target.reset()
      };

  return (
    <div id='contact' className='contacts'>
          <h1> My <j>Contact</j></h1>
          <div className='line'></div>
        <div className='contact'>
          
        <div className='contact-left'>
            <div className='contact-box'>
                <span><i class="uil uil-envelope"></i></span>
                <h4>EMAIL</h4>
                <p>anaguchidiebere@gmail.com</p>
                <button className='btnbtn'><a href='mailto:anaguchidiebere@gmail.com'>Message me</a></button>
            </div>
            <div className='contact-box'>
                <span><i class="uil uil-facebook-messenger"></i></span>
                <h4>MESSENGER</h4>
                <p>Andrew Anagu</p>
                <button className='btnbtn'><a href='https://m.me/chidianagu.andrew'>Message me</a></button>
            </div>
            <div className='contact-box'>
                <span><i class="uil uil-whatsapp"></i></span>
                <h4>WHATSAPP</h4>
                <p>+234 813 518 8556</p>
                <button className='btnbtn'><a href='http://api.whatsapp.com/send?phone=+2348135188556'>Message me</a></button>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact-right'>
                        <input type= 'text' name='Firstname' placeholder="First-Name" required />
                        <input type= 'text' name='Lastname' placeholder="Last-Name" required />
                        <input type= 'email' name='Email' placeholder="Email" required />
                        <textarea rows= '7' placeholder='Message' name= 'Message' required></textarea>
                        <button type='submit' className='btn' >Submit</button>
        </form>
        </div>
    </div>
  )
}
