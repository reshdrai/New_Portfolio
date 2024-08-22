import React from "react"
import Main_header from "./Header/Main_header"
import './Css/Header.css'
import './Css/About.css'
import About from "./Header/About"
import Services from "./Header/Services"
import './Css/Services.css'
import Skills from "./Header/Skills"
import './Css/Skills.css'
import Resume from "./Header/Resume"
import './Css/Resume.css'
import Portfolio from "./Header/Portfolio"
import './Css/Portfolio.css'
function App() {
 

  return (
    <>
     <div>
      <Main_header/>
      <About/>
      <Services/>
      <Skills/>
     <Resume/>
     <Portfolio/>
     </div>
    </>
  )
}

export default App
