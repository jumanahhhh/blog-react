import React, { useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.contact-info').classList.add('active');
      // document.querySelector('.about-info').classList.add('active');

      // document.querySelector('.courses-info').classList.add('active');
    }, 100);
  }, []);

  return (
    <footer className="footer">
      <h2>Tanuja</h2>
      <div className="columns">
        <div className="contact">
          <h3>Contact us anytime</h3>
          <div className="contact-info">
            <li><FontAwesomeIcon icon={faPhone} /> +91 96633 69013   </li>
            <li><FontAwesomeIcon icon={faEnvelope} /> mail2tanu@gmail.com </li>
            {/* <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 7 Kings Rd, Portsmouth, Southsea, PO5 4DJ, UK</li> */}
          </div>
        </div>
        {/* <div className="aboutt">
          <h3>More about Us</h3>
          <div className="about-info">
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Management team</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div> */}
        {/* <div className="courses">
          <h3>Latest courses</h3>
          <div className="courses-info">
            <ul>
              <li><a href="#">What is life coaching</a></li>
              <li><a href="#">Life coaching and your family</a></li>
              <li><a href="#">Find your life purpose</a></li>
              <li><a href="#">Tap into endless motivation</a></li>
              <li><a href="#">Coaching focuses on your future</a></li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="social-icons">
  <a href="https://www.facebook.com/ElevateImage"><FontAwesomeIcon icon={faFacebookF} className="social-icon" /></a>
  <a href="https://www.instagram.com/tanuja.devang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FontAwesomeIcon icon={faInstagram} className="social-icon" /></a>
  <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="social-icon" /></a>
  <a href="https://wa.me/9513064127"><FontAwesomeIcon icon={faWhatsapp} className="social-icon" /></a>
</div>

    </footer>
  );
};

export default Footer;
