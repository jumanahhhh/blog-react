import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Legal.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const CancellationRefund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-hero">
        <h1>Cancellation & Refund</h1>
        <p className="subtitle">Returns & Cancellation – Masterclass</p>

        <div className="legal-nav">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/cancellation-refund" className="active">Cancellation & Refund</Link>
        </div>
      </div>

      <div className="legal-container">
        <div className="legal-section legal-intro">
          <p>
            This policy outlines the cancellation and refund terms for the Masterclass
            and coaching programs conducted by Tanuja Devang.
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

export default CancellationRefund;
