import React from "react";
import "./Hero.css";
import hero_img from '../assets/hero_img.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2> AbcdAbcd XyzXyzXyz -</h2>
        <h3>Life Coach & Image Consultant</h3>
        <br/>
        <p>
          I am on a mission to redesign peoples lives with love in my heart,
          care in my voice, and compassion in my energy.
        </p>
        <div className="hero-btn">
            <div>Book a Consultation</div>
        </div>
        
      </div>
      <div className="hero-right">
        <img src={hero_img}  alt="hero"></img>
      </div>
    </div>
  );
};

export default Hero;
