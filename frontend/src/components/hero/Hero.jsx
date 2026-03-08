import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero-img.jpeg";


const Hero = () => {
  return (
    <div className="hero fixed-width-container">
      <div className="hero-left">
        <span className="text1">
          <h2>ELEVATE WITH <br />&nbsp; &nbsp; &nbsp;  &nbsp;<span>TANUJA</span></h2>
        </span>
        <span className="text2">
          <h3>Life Coach & Image Consultant</h3>
        </span>
        <p>
        My mission is to empower individuals to cultivate a positive self-image by embracing authenticity, courage, and clarity in their lives. I am dedicated to guiding them on a journey of self-discovery, enabling them to consistently align their actions with their true selves and achieve lasting fulfillment.
        </p>
        <a href="mailto:connect@tanujadevang.com" className="hero-btn">
          <div>Book a Consultation</div>
        </a>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
