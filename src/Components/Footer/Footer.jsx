import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerContainer'>
        <footer className='footer'>
            <div className="footer-logo-container">
                <div className="footer-logo">
                  <img src={logo}  alt="wonderobo logo" />
                </div>
                <p>
                    Leading provider of industrial automation solutions with over 5 years of expertise in welding automation, robotics, and custom manufacturing systems.
                </p>
                <div className="footer-social-logos">
                    <div className="social-logos">
                        <FaInstagram />
                    </div>
                    <div className="social-logos">
                        <FaFacebook />
                    </div>
                    <div className="social-logos">
                        <FaLinkedin />
                    </div>
                </div>
            </div>
            <div className="footer-quick-links-container">
                <h3 className="footer-heading">
                  Quick Links
                </h3>
               <div className="footer-quick-links"> 
                 <a href="" className="footer-link">Home</a>
                <a href="" className="footer-link">About</a>
                <a href="" className="footer-link">Services</a>
               </div>
            </div>
            <div className="footer-services">
                  <h3 className="footer-services-heading">
                  Our Services
                </h3>
               <div className="footer-quick-links"> 
                  <p>TrunKey Projects & Engineering</p>
                  <p>Automation System</p>
                  <p>PLC/SCADA/HMI</p>
                  <p>Electrical And Control Panel</p>
                  <p>Instrumation</p>
                  <p>Machine Manufacturing</p>
               </div>
            </div>
            <div className="footer-contact">
                  <h3 className="footer-contact">
                    Contact Info
                  </h3>  
                  <p>Mahesh Adode Director Mob No : 7387417567</p>
                  <p>Tushar Desai Director Mob No: 7057718699</p>
            </div>
        </footer>
        <div className="copyright-contaiener">
          <p>© 2025, Wanderobo Automation Ltd. All rights reserved.</p>
          <p>Privacy Policy  |  Terms Of Services  </p>
        </div>
    </div>
  )  
}

export default Footer
