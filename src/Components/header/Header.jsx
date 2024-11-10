import React, { useState } from 'react'
import Logo from "../../Assets/logo.png"
import "./header.css"
export const Header = () => {


const listItems=[
    {
        id:1,
        name:"Home",
        link:"#home"
    },
    {
        id:2,
        name:"Services",
        link:"#services"
    },
    {
        id:3,
        name:"Projects",
        link:"#projects"

    },
    {
        id:4,
        name:"OurTeam",
        link:"#OurTeam"
    },
    {
        id:3,
        name:"About",
        link:"/about"
    }
]
const [isActive,setIsActive]=useState(false)

const handleClick=()=>{
    setIsActive(!isActive)
    console.log(isActive)
}

  return <section>
  
    <header className="header__nav">
        <nav className="nav__bar d-flex align-items-center justify-content-between">
         
           <div className="logo">
                <img loading='lazy' src={Logo} alt="Logo" />
            </div>
         
          
           <ul className={`lists ${isActive &&"active" }`}>
                {listItems.map(item => (
                    <li key={item.id}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                    
             ))}
             <li>
                <a href="#contact">
                <button className="btn__contact">Contact Us</button>
                </a>
     
             </li>
            </ul>
          
         
           
           <div className="toggle__menu" onClick={handleClick}>
          {
            isActive ? <i className="ri-close-line"></i> : <i className="ri-menu-2-line"></i>
          }
           </div>

        </nav>
    </header>


  
  </section>
}
