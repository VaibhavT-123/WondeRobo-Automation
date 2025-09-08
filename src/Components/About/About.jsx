import React from 'react'
import aboutImg from "../../assets/carouselmg2.jpg";
import './About.css'

const About = () => {
  return (
    <div className='About' id='about'>
        <div className="about-container">
            <div className="about-text-container">
                <p className='about-container-tag'>About Wonderobo Automation</p>
                <h3 className='about-container-heading'>Leading Innovation in Industrial Automation</h3>
                <p className='about-container-para'>For over  years, Wonderobo Automation Industrial has been at the forefront of industrial automation, delivering cutting-edge solutions that transform manufacturing processes. Our expertise spans welding automation, assembly lines, robotics, and custom special purpose machines.</p>
                <div className="about-stats-container">
                    <p><span>15+</span> Projects Completed</p>
                    <p><span>10+</span> Happy Client</p>
                </div>
            </div>
            <div className="about-image-container">
                <div className="image-container">
                    <img src={aboutImg} alt="About-img" />
                    <div className="about-working-years">
                        <p className='about-working-years-count'>5+</p>
                        <p className='about-working-years-text'>Years Of Working Experience</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="about-tag-container">
            <div className="about-tag">About</div>
        </div> */}
    </div>
  )
}

export default About
