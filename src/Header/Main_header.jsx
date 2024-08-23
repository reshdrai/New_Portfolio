import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-scroll';


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
      <Link activeClass='active' to='blank' spy={true} smooth={true} offset={-100} duration={500} ><li className="home">home</li></Link>
        <Link activeClass='active' to='about_us' spy={true} smooth={true} offset={-100} duration={500} ><li className="about">about</li></Link>
        <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500} ><li className="resume">resume</li></Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} > <li className="portfolio">portfolio</li></Link>
          <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-100} duration={500} ><li className="blog">blog</li></Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} > <li className="contact">contact</li></Link>
          <li className="slash">|</li>
          <li className="number"> <i class="fa-solid fa-phone"></i> &nbsp;&nbsp;&nbsp;+977 9766462245</li>
          </ul>

          <div className="menu-container">
          <button className='mobmenu' onClick={()=>{
           SetOnmenu(!onmenu)
            
          }} >
            <div className="one" style={{transform: onmenu ? 'translateY(5px) rotate(47deg)' : 'none'}}></div>
            <div className="two" style={{ opacity: onmenu ? '0' : '1'}}></div>
            <div className="three" style={{transform: onmenu ? 'translateY(-11px) rotate(-47deg)' : 'none'}}></div>
          </button>
          {onmenu ?(
          <ul className='menu' style={{height : onmenu? '22rem': '0', transition: '0.5s'}}> 
          <div className="main-container">
          <Link activeClass='active' to='blank' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>SetOnmenu(!onmenu)}><li className="home">home</li></Link>
        <Link activeClass='active' to='about_us' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>SetOnmenu(!onmenu)}><li className="about">about</li></Link>
        <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>SetOnmenu(!onmenu)}><li className="resume">resume</li></Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>SetOnmenu(!onmenu)}> <li className="portfolio">portfolio</li></Link>
          <Link activeClass='active' to='blog' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>SetOnmenu(!onmenu)}><li className="blog">blog</li></Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>SetOnmenu(!onmenu)}> <li className="contact">contact</li></Link>

          </div>
          </ul>) :('')}
          </div>
          </div>
    </div>
    </header>

    

<section id='blank'>
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