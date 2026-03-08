import React, { useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.contact-info').classList.add('active');
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
            {/* <li><FontAwesomeIcon icon={faEnvelope} /> elevatewithtanuja@gmail.com </li> */}
            <li><FontAwesomeIcon icon={faEnvelope} /> connect@tanujadevang.com </li>
          </div>
        </div>
      </div>
      <div className="social-icons">
  <a href="https://www.facebook.com/ElevateImage"><FontAwesomeIcon icon={faFacebookF} className="social-icon" /></a>
  <a href="https://www.instagram.com/tanuja.devang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FontAwesomeIcon icon={faInstagram} className="social-icon" /></a>
  <a href="https://www.linkedin.com/in/tanuja-devang-53977a17/"><FontAwesomeIcon icon={faLinkedinIn} className="social-icon" /></a>
  <a href="https://wa.me/9513064127"><FontAwesomeIcon icon={faWhatsapp} className="social-icon" /></a>
</div>

    </footer>
  );
};

export default Footer;
