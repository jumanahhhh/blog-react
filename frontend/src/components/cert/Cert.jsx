import React from 'react';
import "./Cert.css";
import certimg from "../assets/single-cert.jpg";

const Cert = () => {
  return (
    <div className='cert fixed-width-container'>
      <h2>Certifications & Training</h2>
      <div className="cert-content">
        {/* Certification List Section */}
        <div className="cert-list">
          <ul>
            <li>Certified Life Coach by Life by Design - Puja Puneet</li>
            <li>A certified image consultant from Image Consulting Business Institute  (ICBI), certified under the curriculum of Conselle Institute Of Image Management, founded by Judith Rasband (USA)</li>
            <li>An ICBI certified trainer accredited by National Accreditation Board of Education and Training (NABET)</li>
            <li>Certified Soft Skills Trainer from Image Consulting Business Institute, Accredited by SQA ( Scottish Qualifications Authority )</li>
            <li>Certified Professional Make up Artist by Sabrina Suhail Makeup Studio & Makeup by Preeya.</li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="cert-image">
          <img src={certimg} alt="Certifications" />
        </div>
      </div>
    </div>
  );
};

export default Cert;
