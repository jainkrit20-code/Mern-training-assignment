import React from 'react'
import "./Services.css"
const Services = () => {
  return (
    <>
    <div className='Service-conatiner'> 
      <h3>WHAT I DO</h3>   
      <h1>Services</h1>
      <div className='card'>
    <div className='card1' >
          <h2> UI/UX Design</h2>
          <p>From wireframes to polished Figma prototypes. 
            Intuitive, visually compelling interfaces that convert visitors into users and put usability first.</p>
    </div>
    <div className='card2'>
      <h2>Frontend Dev</h2>
      <p>Production-grade code with Tailwind CSS and Alpine.js.
         Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks.</p>
    </div>
    <div className='card3'>
      <h2>Landing Pages</h2>
      <p>High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scroll.</p>
    </div>
    </div>
    </div>

    </>
  )
}

export default Services
