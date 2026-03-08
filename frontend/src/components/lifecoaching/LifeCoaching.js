import React from "react";
import "./LifeCoaching.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import img from "../assets/about.jpg";
import ooo from "../assets/onon.jpeg";
import { useEffect } from "react";
import heroimg from "../assets/oneononeimage.jpeg"
const LifeCoaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
    <div className="coaching-section">
        <div class="coaching-content">
          <h1>
            One on One <br /> Life Coaching
          </h1>
          <br/><br/>
          <p>
          As your Life Coach, I’m here to help you break free from stagnation, be authentic, gain clarity, and ignite your passions. Together, we’ll craft and realize your dream life. Allow me to be your beacon of guidance, helping you identify and overcome the barriers that prevent you from living the life you’ve always envisioned.
            <br />
            <br />
            Let’s unlock the door to your full potential and transform your dreams into reality.
          </p>
        </div>
        <div class="coaching-image">
          <img src={heroimg} alt="Life Coach" />
        </div>
      </div>
      <div className="are-you-someone">
        <h2>Do you find yourself…</h2>
        <ol>
          <li>
          <span class="number">Q1</span>&nbsp;&nbsp;
            {" "}
            Caught in a cycle of negative self-talk and self-doubt, believing
            you’re not good enough, capable, or deserving of success?
          </li>
          <li>
          <span class="number">Q2</span>&nbsp;&nbsp;

            {" "}
            Feeling trapped in a metaphorical golden cage where you experience
            loneliness, confusion, and a lack of fulfillment, struggling to
            escape feelings of being unheard, unloved, or depressed?
          </li>
          <li>
          <span class="number">Q3</span>&nbsp;&nbsp;

            {" "}
            Yearning to live a vibrant, fulfilling life but unsure of your
            passions and seeking the clarity to achieve financial independence
            and a sense of purpose?
          </li>
        </ol>
      </div>
      <div class="coaching-container">
        <div class="coaching-content">
          <h2>Personalized Coaching with Tanuja Devang!</h2>
          <ul>
            <li>
              Experience transformative one-on-one coaching designed to address
              your specific needs and challenges. Whether you want to uncover
              your passions, achieve financial independence, enhance your
              relationships, or master the art of manifestation, I offer
              tailored solutions to guide you every step of the way.{" "}
            </li>
            <li>
              Our sessions are individually customized to provide you with
              clarity in your goals, confidence in your decisions, and
              consistency in your efforts. Let’s work together to unlock your
              potential and create the fulfilling life you deserve.
            </li>
          </ul>
          <div class="session-details">
            <span>• Six Sessions</span>
            <span>• Once a Week</span>
            <span>• One hour each</span>
            <a href="https://wa.me/yourwhatsappnumber" class="whatsapp-btn">
              WhatsApp Me
            </a>
          </div>
        </div>
        <div class="coaching-image">
          <img src={ooo} alt="Tanuja Devang"></img>
        </div>
      </div>

      <div className="expectations">
        <h2>What to Expect?</h2><br/>
        <ol>
        <li>
            {" "}
            <span class="number">1</span>&nbsp;&nbsp;
            Focus on the 3 C’s: Together, we will enhance your Courage, Clarity,
            and Consistency to unlock your full potential and achieve your
            goals.
          </li>
          <li>
          <span class="number">2</span>
            {" "} &nbsp;&nbsp;
            In-Depth Goal Setting: We will thoroughly explore your objectives
            and craft a detailed action plan to bridge the gap between where you
            are now and where you want to be.
          </li>
          <li>
          <span class="number">3</span>&nbsp;&nbsp;
            Empowerment through Self-Discovery: You’ll realize that achieving
            your goals starts with you. By understanding your core motivations,
            we’ll handle the strategies and steps needed to turn your
            aspirations into reality.
          </li>
        </ol>
      </div>
      <div className="still-not-sure-section">
        <div className="still-not-sure-content">
          <h2>Still not sure?</h2>
          <p>
            Help me help you better. Make an appointment to meet me and let's
            connect for 30 minutes over a cup of coffee. This is for us to see
            if we are a good fit for each other and if one on one coaching is
            the right path for you.
          </p>
          <button>Chat on WhatsApp</button>
        </div>
        <div class="still-not-sure-image">
          <img src={img} alt="Still Not Sure" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LifeCoaching;
