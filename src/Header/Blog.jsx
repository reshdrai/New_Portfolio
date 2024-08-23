import React from 'react'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
function Blog() {
  return (
    <section id="blog">
        <div className="hero-section"></div>
         <div className="container1">
        <div className="txt-blog">
            
        <h3 className='blog'>Blog</h3>
          <span>  Blog</span>
          <div className="line"></div>
        </div>
        <div className="blog-container">
            <div className="row">
            <div className="blog-cont col-lg-4  col-sm-12 ">
                <div className="blog-grp">
                    <div className="blog-image"><img src={blog1} alt="blog1" /></div>
                    <h6 style={{margin: '1rem 0'}}>By: <span style={{color : '#fec544'}}>Admin</span> | <span style={{color : '#fec544'}}>22-08-2024</span></h6>
                    <h4>What are the latest trends in web development</h4>
                </div>
            </div>
            <div className="blog-cont1 col-lg-4  col-sm-12 ">
            <div className="blog-grp1">
                    <div className="blog-image"><img src={blog2} alt="blog2" /></div>
                    <h6 style={{margin: '1rem 0'}}>By: <span style={{color : '#fec544'}}>Admin</span> | <span style={{color : '#fec544'}}>22-08-2024</span></h6>
                    <h4>I am going to achieve the dreams that I manipulated</h4>
                </div>
            </div>
            <div className="blog-cont2 col-lg-4  col-sm-12 ">  <div className="blog-grp2">
                    <div className="blog-image"><img src={blog3} alt="blog3" /></div>
                    <h6 style={{margin: '1rem 0'}}>By: <span style={{color : '#fec544'}}>Admin</span> | <span style={{color : '#fec544'}}>22-08-2024</span></h6>
                    <h4>What are the best website to get icons ?
                    </h4>
                </div></div>
            </div>
      
        </div>
        </div>
        <div className="hero-section"></div>
        <div className="hero-section"></div>
    </section>
  )
}

export default Blog