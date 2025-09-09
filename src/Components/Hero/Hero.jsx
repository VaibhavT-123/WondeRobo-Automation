import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from "../../assets/carouselmg1.jpg";
import img2 from "../../assets/carouselmg2.jpg";
import img3 from "../../assets/carouselmg3.jpg";

const Hero = () => {
  const images = [img1, img2, img3];
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Hero" id='header'>
      <div
        className="hero-inner"
        style={{ transform: `translateX(-${heroCount * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="hero-item" key={index}>
            <img src={img} alt={`Slide ${index}`} />
            <div className="hero-container">
              <div className="hero-text-container">
                <div className="hero-text">
                  <p className="industry-text">Industry 4.0 Solutions</p>
                  <h2 className="hero-headeing">
                    Delivering <span className="highlight">World-Class</span> <br />
                    Industrial Automation
                  </h2>
                  <p>
                    Transform your manufacturing processes with our cutting-edge
                    automation solutions. 5+ years of expertise in delivering
                    reliable, efficient, and scalable industrial systems.
                  </p>
                  <div className="hero-btns">
                    <a href='#services' className="explore-btn">Explore Services</a>
                    <a href='#contactContainer' className="contact-btn">Contact Us</a>
                  </div>
                </div>
                <div className="stats-container">
                  <p><span>5+</span> Years Experience</p>
                  <p><span>15+</span> Projects Completed</p>
                  <p><span>10+</span> Industries Served</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
