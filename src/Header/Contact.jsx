import React from 'react'
import emailjs from '@emailjs/browser' 

import { useRef } from 'react';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_t0gdg6j', 'template_qha4g1c', form.current, {
          publicKey: 'WwmfjJqItd5oNrLEd',
        })
        .then(
          () => {
            alert('SUCCESS!');
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };
  return (<>
  <div className="hero-section"></div>
   <section id="contact">
     
    <div className="container1">
        <div className="txt-contactme">
            
        <h3 className='contactme'>Contact Me</h3>
          <span>Contact Me</span>
          <div className="line"></div>
        </div>

<div className="contact-container">
    <div className="row">
        <div className="contact-left col-lg-6">
            <div className="cont">
                <h3>Contact Me Directly</h3>
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Your Name' name='user_name'/>
                <input type="email" placeholder='Your Email' name='user_email'/>
                <input type="text" placeholder='Your Subject' name='subject'/>
                <label htmlFor="Your Message"></label>
                <textarea rows={3} placeholder='Your Message' name='message'>
                   
                </textarea>
                <button style={{ backgroundColor : '#fec544', padding: '1.2rem', border : 'none' , borderRadius: '20px', margin : '1rem 0 0 0', color : '#070d1b'}} type='submit' >Send Message</button>
                </form>
            </div>
        </div>
        <div className="contact-right col-lg-6">
            <div className="cont">
            <h3>Contact Info</h3>
            <p style={{margin : '1rem 0 1.8rem 0', color : '#a9adb8'}}>The below are my contacts. You can directly contact me through below means.</p>
            <div className="right-cont">
                <div className="contact-email" style={{display : 'flex',margin : '0 0 2rem 0'}}>
                    <div className="icon"><i class="fa-solid fa-envelope"></i></div>
                    <div className="txt-email" >
                        <h5 style={{ margin : '0 0 10px 0'}}>Email</h5>
                        <h6>reshdewanrai@gmail.com</h6>
                        
                    </div>
                </div>
                <div className="contact-email" style={{display : 'flex', margin : '0 0 2rem 0'}}>
                    <div className="icon"><i class="fa-solid fa-phone"></i></div>
                    <div className="txt-email" >
                        <h5 style={{ margin : '0 0 10px 0'}}>Phone</h5>
                        <h6>+977 9766462245</h6>
                        
                    </div>
                </div>
                <div className="contact-email" style={{display : 'flex',margin : '0 0 2.8rem 0'}}>
                    <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div className="txt-email" style={{margin : '0 0 1rem 0'}}>
                        <h5 style={{ margin : '0 0 10px 0'}}>Address</h5>
                        <h6>Lalitpur,Nepal</h6>
                        
                    </div>
                </div>
                <h5 style={{ color : '#a9adb8'}}>Visit my social profile and get connected</h5>

               <div className="social-media">
               <a href="https://www.linkedin.com/in/resh-dewan-rai-123897292/" target='_blank'>  <div className="social-icon">
                    <i class="fa-brands fa-linkedin"></i><span>Linkedin</span>
                    </div></a>
                   <a href="https://x.com/reshdewan_rai" target='_blank'> <div className="social-icon">
                    <i class="fa-brands fa-twitter"></i><span>Twitter</span>
                    </div></a>
                    <a href="https://www.upwork.com/freelancers/~01cd511f590fb5d2ca" target='_blank'><div className="social-icon">
                    <i class="fa-brands fa-square-upwork"></i><span>Upwork</span>
                    </div></a>
                </div>
            </div>
           
            </div>
            
            </div>
    </div>
</div>

        </div> <div className="hero-section"></div>
   </section>
   </>
  )
}

export default Contact