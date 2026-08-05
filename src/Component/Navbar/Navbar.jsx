import React from 'react'
import About from '../About/About'
import Contact from '../Contactus/Contact'
import Header from '../Header/Header'
import Card from '../../Card/Card'
import Footer from '../Footer/Footer'

const Navbar = () => {
  return(
    <div>
     <About/>
     <Contact/>
     <Header/>
     <Card/>
     <Footer/>
    </div>
  )
}

export default Navbar
