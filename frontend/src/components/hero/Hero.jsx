import React from "react";
import "./Hero.css";
// import hero_img from '../assets/hero_img.png'
import hero_img from '../assets/imagesliderbackground2.jpeg'

const Hero = () => {
  return (
    <div className="hero fixed-width-container">
      <div className="hero-left">
        <span className="text1"><h2>ELEVATE WITH <br/>TANUJA</h2></span>
        <span className="text2"><h3>Life Coach & Image Consultant</h3></span>
        <br/>
        <p>
          I am on a mission to redesign peoples lives with love in my heart,
          care in my voice, and compassion in my energy.
        </p>
        <a href="https://wa.me/9663369013" target="_blank" className="hero-btn">
            <div>Book a Consultation</div>
        </a>
        
      </div>
      <div className="hero-right">
        {/* <img src={hero_img}  alt="hero"></img> */}
      </div>
    </div>
  );
};

export default Hero;
