import React from "react";
import "./Hero.css";
// import hero_img from '../assets/hero_img.png'
import hero_img from '../assets/hero1.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Tanuja Devang</h2>
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
        {/* <img src={hero_img}  alt="hero"></img> */}
      </div>
    </div>

    // <div class="hero">
    //     <div class="content">
    //         <h1>Tanuja Devang</h1>
    //         <h2>Life Coach & Image Consultant</h2>
    //         <p>I am on a mission to redesign people's lives with love in my heart, care in my voice, and compassion in my energy.</p>
    //         <a href="#" class="btn">Book a Consultation</a>
    //     </div>
    // </div>
  );
};

export default Hero;
