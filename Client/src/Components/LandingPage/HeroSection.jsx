import React from 'react'
import "./Styles/HeroSection.css";
import Logo from "../../assets/Images/logo.png";
import { Link } from 'react-router-dom';


export const HeroSection = () => {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutus');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='herosection-container' id="home">
      <div className="hero-content">
        <div className="hero-left-cont">
          <h2 className="heading"><span style={{color:"#01caff"}}>Alexa </span>Devs</h2>
        </div>
        <div className="hero-logo">
          <Link to="#aboutus" onClick={scrollToAboutUs}>
          <img className='hero-logo-img' src={Logo} alt="" />
          </Link>
        </div>
        <div className="hero-right-cont">
          <h2 className="heading">Community <span style={{color:"#01caff"}}>CU </span></h2>
        </div>
      </div>
      <div className="hero-desc">
        <p>
          <span style={{fontSize:"1.4rem", fontWeight:"600"}}>"Alexa, cheers!"</span><br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, facere natus. Magnam earum laboriosam illo rerum, officiis rem itaque quod et necessitatibus. Click on Alexa to Explore <span style={{color:"#01caff"}}>ADC </span>.
        </p>
      </div>
    </div>
  )
}
