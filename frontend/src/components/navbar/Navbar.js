import React, { useState, useRef } from "react";
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
  const [menu, setMenu] = useState("");

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleNavClick = (sectionRef, menuName) => {
    setMenu(menuName);
    if (sectionRef) {
      scrollToSection(sectionRef);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top for Home
    }
    showNavbar(); // Close the menu after navigating
  };
  

  return (
    <div className="navbar">
      {/* Logo on the left */}
      <div className="nav-logo">
        <a href="index.html">
          <img src={logoo} alt="logo" />
        </a>
      </div>

      {/* Navigation menu in the center */}
      <div ref={navRef} className="nav-menu-container">
        <ul className="nav-menu">
          <li
            onClick={() => handleNavClick(null, "index.html")}
            className="nav-item active"
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
          <a href="https://wa.me/9663369013" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
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
