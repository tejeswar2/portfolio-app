import React,{useRef} from 'react'
import './contact.css'

import fbicon from '../../../assets/facebook-icon.png'
import inst from '../../../assets/instagram.png'
import twtr from '../../../assets/twitter.png'
import yt from '../../../assets/youtube.png'
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wx7t4vf', 'template_q6441mm', form.current, 'z00UKkVGTOEdZwzDR')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('email sent')
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id='contactpage'>
        <div id='clients'>

            <div id='contact'>
                <h1 className='contactpagetitle'>Contact Me</h1>
                <span className='contactdesc'>please contact me by filling this form</span>
                
                <form className='contactform' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='your name' name='your_name'/>
                    <input type='email' className='mail' placeholder='your email' name='your_email'/>
                    <textarea className='msg' name='message' rows='5' placeholder='your message' ></textarea>
                    <button type='submit' value='Send'  className='submitbtn'>Submit</button>
                    <div className='links'>
                        <img src={fbicon} alt='fb' className='link'></img>
                        <img src={twtr} alt='twtr' className='link'></img>
                        <img src={inst} alt='inst' className='link'></img>
                        <img src={yt} alt='yt' className='link'></img>

                    </div>
                </form>

            </div>
        </div>
    </section>
  )
}


