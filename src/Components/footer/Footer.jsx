import React from 'react'
import logo from "../../Assets/logo.png"
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img loading='lazy' src={logo} alt="Smart Coders Logo" className="logo" />
    
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>+20 1128893835</p>
        <p>smartcoders2024@gmail.com</p>
        <div className="social-icons">
        <i class="ri-linkedin-box-fill"></i>
        <a href="https://wa.me/201128893835" rel="noreferrer"  target="_blank">
  <i class= "ri-whatsapp-fill"></i>
</a>
          <i class="ri-facebook-box-fill"></i>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>Smart Coderers© 2024 LOGO - All rights reserved</p>
    </div>
  </footer>
  )
}

export default Footer