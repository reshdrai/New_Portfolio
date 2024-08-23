import React from 'react'

function Portfolio() {
  return (<>
    <div className="hero-section2"></div>
    <section id="portfolio"> 
    
    <div className="container1">
        <div className="txt-portfolio">
            
        <h3 className='portfolio'>Portfolio</h3>
          <span>  Portfolio</span>
          <div className="line"></div>
        </div>
        <div className="portfolio-container">
            <div className="row">
                  
            <div className="portfolio-cont1 col-lg-6 col-sm-12" style={{padding : '12px', }}>
<div className="portfolio-item">
            <a href="https://hotel-booking-link.netlify.app/" className='portfolio-grp' target='_blank' >

                   <div className="cont-image"><img src="src/assets/portfolio1.jpg" alt="hotel booking" /></div>
                   <div className="on_hover">
                   <i class="fa-solid fa-circle-plus"></i>
                    <h4>Hotel booking</h4>
                <h5>Frontend development</h5>
                   </div>
                   </a>
                   </div>
                </div>
                <div className="portfolio-cont2 col-lg-6 col-sm-12" style={{padding : '12px',}}>
                <div className="portfolio-item">
            <a href="https://relaxed-gnome-7b795b.netlify.app/" className='portfolio-grp2' target='_blank' >

                   <div className="cont-image"><img src="src/assets/portfolio2.jpg" alt="hotel booking" /></div>
                   <div className="on_hover">
                   <i class="fa-solid fa-circle-plus"></i>
                    <h4>Old Portfolio</h4>
                <h5>Frontend development</h5>
                   </div>
                   </a>
                   </div>
                </div>
                <div className="portfolio-cont3 col-lg-6 col-sm-12" style={{padding : '12px',}}><div className="portfolio-item">
            <a href="https://hotel-booking-link.netlify.app/" className='portfolio-grp3' target='_blank' >

                   <div className="cont-image"><img src="src/assets/portfolio3.jpg" alt="hotel booking" /></div>
                   <div className="on_hover">
                   <i class="fa-solid fa-circle-plus"></i>
                    <h4>Ktm design</h4>
                <h5>Frontend development</h5>
                   </div>
                   </a>
                   </div></div>
                <div className="portfolio-cont4 col-lg-6 col-sm-12" style={{padding : '12px', }}><div className="portfolio-item">
            <a href="https://bucolic-stardust-eb4cf0.netlify.app/" className='portfolio-grp4' target='_blank' >

                   <div className="cont-image"><img src="src/assets/portfolio4.jpg" alt="hotel booking" /></div>
                   <div className="on_hover">
                   <i class="fa-solid fa-circle-plus"></i>
                    <h4>First project</h4>
                <h5>Frontend development</h5>
                   </div>
                   </a>
                   </div></div>
            </div>
        </div>
        </div>
        <div className="hero-section2"></div>
    </section>
    </>
  )
}

export default Portfolio