import React from "react";
import "./About.css";
import hero_img from "../assets/about.jpg";

const About = () => {
  return (
    <div className="about fixed-width-container">
      <div className="about-header">
        <h2>So, who am I?</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={hero_img} alt="hero" />
        </div>
        <div className="about-text">
          <p>
            Hi, I am Tanuja Devang, <br />
            <br />
            You know when we have dreams, desires, plans, and aspirations to
            become successful in life and make a name for yourself, create your
            own identity in this world, be financially independent, that’s when
            LIFE HAPPENS. This is my story. I wanted to do a master's after my
            college and had dreams of making it big, but life had other plans
            for me. My parents got a very promising match for me and wanted me
            to get married and settle down in life when I was barely 19 years
            young.
            <br />
            <br />
            Everything happened so quickly that before even my final exams
            started I was hooked. Suddenly my whole life took a 360-degree turn.
            Born and brought up in Hyderabad, now after marriage, I landed in
            Chennai. New place, new people, new language, I was completely lost
            for the first couple of years. My dreams of making it big became
            far from reality. Blessed with a daughter and a son, my life
            revolved around my kids, husband, family, friends, and relatives. I
            had everything in my life that I had desired, but still always felt
            empty and hollow from the inside. My cup was always half full.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="quote">
        <p>
          From a Homemaker to a Life Coach & an Image Maker, I am on a mission
          to transform lives one home at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
