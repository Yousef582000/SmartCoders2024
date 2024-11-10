import React from 'react'
import Home from '../pages/home/Home'
import Services from '../pages/Services/Services'
import { Header } from '../Components/header/Header'
import Projects from '../pages/projects/projects'
import OurTeam from '../pages/OurTeam/OurTeam'
import Contact from '../pages/Contact/Contact'
import Footer from '../Components/footer/Footer'

const Layout = () => {
  return <section>
   <Header/>
   <Home/>
   <Services/>
    <Projects/>
    <OurTeam/>
    <Contact/>
    <Footer/>
  </section>
}

export default Layout