import React, { useState } from "react";
import "./Navbar.css";
import logoo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Navbar = ({
  scrollToSection,
  aboutRef,
  servicesRef,
  blogRef,
  resourceRef,
}) => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="index.html">
          <img src={logoo} alt="logo" />
        </a>
        {/* <p>Tanuja Devang</p> */}
      </div>

      <div className="nav-menu-container">
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("index.html");
            }}
            className="nav-item active"
          >
            Home
          </li>
          <li
            onClick={() => {
              setMenu("about");
              scrollToSection(aboutRef);
            }}
            className={`nav-item ${menu === "about" ? "active" : ""}`}
          >
            About
          </li>
          <li
            onClick={() => {
              setMenu("services");
              scrollToSection(servicesRef);
            }}
            className={`nav-item ${menu === "services" ? "active" : ""}`}
          >
            Services
          </li>
          <li
            onClick={() => {
              setMenu("blog");
              scrollToSection(blogRef);
            }}
            className={`nav-item ${menu === "blog" ? "active" : ""}`}
          >
            Blog
          </li>
          <li
            onClick={() => {
              setMenu("resources");
              scrollToSection(resourceRef);
            }}
            className={`nav-item ${menu === "resources" ? "active" : ""}`}
          >
            Resources
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/ElevateImage" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
        </a>
        <a href="https://www.instagram.com/tanuja.devang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/tanuja-devang-53977a17/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
        </a>
        <a href="https://wa.me/9663369013" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
