import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Legal.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-hero">
        <h1>Privacy Policy</h1>
        <p className="subtitle">Tanuja Devang – Executive Presence Coach for Women Leaders</p>

        <div className="legal-nav">
          <Link to="/privacy-policy" className="active">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/cancellation-refund">Cancellation & Refund</Link>
        </div>
      </div>

      <div className="legal-container">
        <div className="legal-section legal-intro">
          <p>
            At Tanuja Devang – Executive Presence Coach for Women Leaders, your privacy is important to us.
            This Privacy Policy explains how we collect, use, and protect your information when you register
            for our Masterclass, programs, or coaching services.
          </p>
        </div>

        <div className="legal-section">
          <h2>Information We Collect</h2>
          <p>When you register for our Masterclass or services, we may collect:</p>
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Organization Name</li>
            <li>Payment Information</li>
            <li>Any information shared through forms, questionnaires, or feedback</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>How We Use Your Information</h2>
          <p>Your information may be used to:</p>
          <ul>
            <li>Process your registration and payments</li>
            <li>Send session details, reminders, and resources</li>
            <li>Provide program-related communication</li>
            <li>Share relevant updates about future masterclasses or offerings</li>
            <li>Improve our services and learning experience</li>
          </ul>
          <p><strong>We do not sell, rent, or trade your personal information to third parties.</strong></p>
        </div>

        <div className="legal-section">
          <h2>Payment Security</h2>
          <p>
            All payments are processed through secure third-party payment gateways.
            We do not store your card or banking information.
          </p>
        </div>

        <div className="legal-section">
          <h2>Data Protection</h2>
          <p>
            We take reasonable administrative and technical precautions to safeguard your personal information.
          </p>
        </div>

        <div className="legal-section">
          <h2>Communication</h2>
          <p>
            By registering, you agree to receive emails, WhatsApp messages, or SMS related to the Masterclass
            or relevant offerings. You may opt out at any time.
          </p>
        </div>

        <div className="legal-section legal-notice">
          <h2>Consent</h2>
          <p>By enrolling in our Masterclass, you consent to this Privacy Policy.</p>
        </div>

        <div className="legal-section legal-contact">
          <h3>Have Questions?</h3>
          <p>Feel free to reach out to us</p>
          <a href="mailto:connect@tanujadevang.com">connect@tanujadevang.com</a>
        </div>

        <p className="last-updated">Last updated: March 2026</p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
