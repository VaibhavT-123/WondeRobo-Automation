import React, { useState } from 'react'
import './Header.css'
import logo from "../../assets/logo.png";
import { FiAlignJustify } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";

const Header = () => {

  const [isSideBarVisible , setSideBarVisible] = useState (false);
  function handleClick(){
    setSideBarVisible(!isSideBarVisible);
  }

  return (
    <div className="header" >
      <div className='header-container'>
        
        <div className="logo-container" >
          <a href="#home">
            <img src={logo} alt="logo" className='logo' />
            </a>
        </div>

        <ul className="nav-links-container">
          <li><a href="#header">Home</a></li>
          <li><a  href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>


        <a href='#contactContainer' className="contact-btn-container">
          <button id='contact'>Contact Us</button>
        </a>

        <div className="hamburger" onClick={handleClick}>
            <FiAlignJustify fontSize={'28px'} />
        </div>
        
        <div className={`sidebar ${isSideBarVisible ? "" : "open"}`}>
          <div className="sidebar-logo">
                <a href="#home">
                  <img src={logo} alt="" className='sidebar-logo-img'/>
                </a>

                <div className="close-btn" onClick={handleClick}>
                  <RxCrossCircled  fontSize={'25px'} />
                </div>
                
          </div>
          <div className="sideBar-container ">
              
              <ul className="sideBar-links">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
              </ul>
              <a href='#contactContainer' className="sideBar-contact">
                <button id='contact'>Contact Us</button>
              </a>
          </div>
        </div>

      </div>
    </div>
   
   
  )
}

export default Header
