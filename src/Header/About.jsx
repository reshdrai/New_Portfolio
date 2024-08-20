import React from 'react'

function About() {
  return (
 <section id='about_us'>
    <div className="hero-section"></div>
    <div className="container1">
        <div className="txt-aboutus">
            
        <h3 className='aboutus'>About Me</h3>
          <span>  about me</span>
        </div>
        <div className="container2">
          <div className="row">
          <div className="left-grid col-lg-6 col-sm-12">
            <div className="left-image">
            <img src="src/assets/new1.jpg" alt="resh's photo" />
            </div></div>
        <div className="right-grid col-lg-6 col-sm-12">
          <h2>Hi There! I'm Resh Dewan Rai</h2>
          <h3>Web Developer</h3>
          <p>As a web developer, I specialize in creating dynamic and visually appealing websites, blending technical expertise with creative design. I focus on delivering seamless user experiences, ensuring every project is both functional and aesthetically pleasing.</p>
          <div className="intro">
         <ul>
          <li>
            <span>Birthday</span>
            <span className='colon1'> :</span>
            <span>May 22,2006</span>
          </li>
          <li>
          <span>Phone</span>
            <span className='colon2'> :</span>
            <span>+977 9766462245</span>
          </li>
          <li>
          <span>Email</span>
            <span className='colon3'> :</span>
            <span>reshdewanrai@gmail.com</span>
          </li>
          <li>
          <span>From</span>
            <span className='colon4'> :</span>
            <span>Nepal</span>
          </li>
          <li>
          <span>Language</span>
            <span className='colon5'> :</span>
            <span>English, Nepali</span>
          </li>
          <li>
          <span>Freelance</span>
            <span className='colon6'> :</span>
            <span>Available</span>
          </li>
         </ul>
          </div>
         <div className="cv"> <a href="src/assets/Cv.pdf" download>Download Cv</a></div>
        </div>
        </div>
        </div>

        
    </div>

 </section>
  )
}

export default About