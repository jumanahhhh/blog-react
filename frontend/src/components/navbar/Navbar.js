import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = ({
  scrollToSection,
  aboutRef,
  servicesRef,
  blogRef,
  resourceRef,
}) => {
  // const [menu, setMenu] = useState("");
const [menu, setMenu] = useState("home"); 

  const navRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  // Function to handle the section navigation
  const handleNavClick = (sectionRef, menuName) => {
    setMenu(menuName);
    
    if (location.pathname !== "/t") {
      // If not on the home page, navigate to home, then scroll to section
      navigate("/");
    } else {
      // If already on the home page, scroll to the section
      if (sectionRef) {
        scrollToSection(sectionRef);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      showNavbar(); 
    }
  };


  useEffect(() => {
    if (menu === "about") {
      scrollToSection(aboutRef);
    } else if (menu === "services") {
      scrollToSection(servicesRef);
    } else if (menu === "blog") {
      scrollToSection(blogRef);
    } else if (menu === "resources") {
      scrollToSection(resourceRef);
    }
  }, [location.pathname, menu, aboutRef, servicesRef, blogRef, resourceRef, scrollToSection]);

  return (
    <div className="navbar">
      {/* Logo on the left */}
      <div className="nav-logo">
        {/* Navigate to Home when logo is clicked */}
        <a href="/" onClick={() => handleNavClick(null, "home")}>
          <img src={logoo} alt="logo" />
        </a>
      </div>

      {/* Navigation menu in the center */}
      <div ref={navRef} className="nav-menu-container">
        <ul className="nav-menu">
          <li
            onClick={() => handleNavClick(null, "home")}
            className={`nav-item ${menu === "home" ? "active" : ""}`}
          >
            Home
          </li>
          <li
            onClick={() => handleNavClick(aboutRef, "about")}
            className={`nav-item ${menu === "about" ? "active" : ""}`}
          >
            About
          </li>
          <li
            onClick={() => handleNavClick(servicesRef, "services")}
            className={`nav-item ${menu === "services" ? "active" : ""}`}
          >
            Services
          </li>
          <li
            onClick={() => handleNavClick(blogRef, "blog")}
            className={`nav-item ${menu === "blog" ? "active" : ""}`}
          >
            Blog
          </li>
          <li
            onClick={() => handleNavClick(resourceRef, "resources")}
            className={`nav-item ${menu === "resources" ? "active" : ""}`}
          >
            Resources
          </li>
        </ul>

        {/* Social icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/ElevateImage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/tanuja.devang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/tanuja-devang-53977a17/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </a>
        </div>

        {/* Close button in responsive menu */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>

      {/* Hamburger menu button on the right */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
