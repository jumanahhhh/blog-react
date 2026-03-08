import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Legal.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-hero">
        <h1>Terms & Conditions</h1>
        <p className="subtitle">Masterclass Enrollment – Tanuja Devang</p>

        <div className="legal-nav">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="active">Terms & Conditions</Link>
        </div>
      </div>

      <div className="legal-container">
        <div className="legal-section legal-intro">
          <p>
            These Terms govern your participation in the Masterclass conducted by Tanuja Devang.
            Please read them carefully before enrolling.
          </p>
        </div>

        <div className="legal-section">
          <h2>Registration</h2>
          <p>Enrollment is confirmed only after full payment is received.</p>
        </div>

        <div className="legal-section">
          <h2>Intellectual Property</h2>
          <p>All Masterclass materials including:</p>
          <ul>
            <li>Presentations</li>
            <li>Worksheets</li>
            <li>Frameworks</li>
            <li>Recordings</li>
            <li>Exercises</li>
          </ul>
          <p>
            are the intellectual property of Tanuja Devang and may not be copied, shared, reproduced,
            distributed, or recorded without written permission.
          </p>
        </div>

        <div className="legal-section">
          <h2>Personal Use Only</h2>
          <p>
            Access to the Masterclass is strictly for individual use. Sharing login credentials or
            distributing materials is prohibited.
          </p>
        </div>

        <div className="legal-section">
          <h2>Code of Conduct</h2>
          <p>Participants are expected to:</p>
          <ul>
            <li>Maintain respectful communication</li>
            <li>Not disrupt the session</li>
            <li>Not use the platform for promotions or solicitation</li>
          </ul>
          <p>We reserve the right to remove any participant who violates these standards without refund.</p>
        </div>

        <div className="legal-section">
          <h2>No Guaranteed Results</h2>
          <p>The Masterclass provides guidance, tools, and frameworks. However:</p>
          <ul>
            <li>Results depend on individual effort and implementation</li>
            <li>We do not guarantee promotions, salary increases, or specific career outcomes</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>Recording & Media</h2>
          <p>
            Sessions may be recorded for internal or future training purposes. By participating, you consent
            to possible inclusion unless you notify us in writing prior to the session.
          </p>
        </div>

        <div className="legal-section legal-notice">
          <h2>No Refund Policy</h2>
          <p>
            Due to the nature of digital and live training programs, all Masterclass registrations are non-refundable.
          </p>
        </div>

        <div className="legal-section">
          <h2>Transfer Policy</h2>
          <p>If you are unable to attend:</p>
          <ul>
            <li>You may request to attend the next scheduled Masterclass (one-time transfer only)</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>Cancellation by Organizer</h2>
          <p>If the Masterclass is cancelled or rescheduled by the organizer:</p>
          <ul>
            <li>Participants will receive either a full refund OR option to attend the next session</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>Late Attendance / No Show</h2>
          <p>
            Failure to attend without prior notice will be considered a forfeited seat. No refunds will be issued.
          </p>
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

export default TermsAndConditions;
