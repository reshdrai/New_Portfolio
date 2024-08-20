import React, { useEffect } from 'react'
import { useState } from 'react';
import { CiPhone } from "react-icons/ci";
function Main_header() {
  const [scrolled, setScrolled] = useState(false)
  const [onmenu, SetOnmenu] = useState(false)
  const setting =()=>{
    setScrolled(window.scrollY>0);
    }
  
    useEffect(()=>{
      window.addEventListener("scroll", setting)
      return () => window.removeEventListener("scroll", setting)
    },[])
  return (<>

    <header className={`top ${scrolled ? 'sticky' : ''}`}>
    <div className="main-container">
        <div className="navbar-container">
   
          
            <h5 className="logo"><span>R</span>esh</h5>
            
      <ul className='topmenu'>
          <li className="home">home</li>
          <li className="about">about</li>
          <li className="resume">resume</li>
          <li className="portfolio">portfolio</li>
          <li className="blog">blog</li>
          <li className="contact">contact</li>
          <li className="slash">|</li>
          <li className="number"> <i class="fa-solid fa-phone"></i> &nbsp;&nbsp;&nbsp;+977 9766462245</li>
          </ul>

          <div className="menu-container">
          <button className='mobmenu' onClick={()=>{
            SetOnmenu(true)
          }}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </button>
          {onmenu ?(
          <ul className='menu'> 
          <li className="home">home</li>
          <li className="about">about</li>
          <li className="resume">resume</li>
          <li className="portfolio">portfolio</li>
          <li className="blog">blog</li>
          <li className="contact">contact</li>
          <li className="slash">|</li>
          <li className="number"> <i class="fa-solid fa-phone"></i> &nbsp;&nbsp;&nbsp;+977 9766462245</li>
          </ul>) :('')}
          </div>
          </div>
    </div>
    </header>

    

<section className='blank'>
        <div className="container1">
          <div className="txt-grp">
          <h1 className="txt-title">Hi, I am <span>Resh Dewan Rai</span></h1>
          <p className="txt-desc">I am a frontend web developer. I can provide clean code and pixel perfect design.<br/>
          I also make website more & more interactive with web animations.</p>
          <div className="txt-sociallinks">
            <a className="fb" href='https://www.facebook.com/resh.rai.33' target="_blank"><i class="fab fa-facebook-f"></i></a>            
            <a className="inst" href='https://www.instagram.com/reshdraii/' target="_blank"><i class="fa-brands fa-instagram"></i></a>            
            <a className="git" href='https://github.com/reshdrai' target="_blank"><i class="fa-brands fa-github"></i></a>            

            </div>
            </div>
        </div>
        
        <svg y="0px" x="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
        </svg>
        </section>
        
    
  
        
    
    </>
  )
}

export default Main_header