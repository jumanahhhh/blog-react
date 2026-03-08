import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services fixed-width-container">
      <div className="services-header">
        <h1>Services</h1>
        <p>All my services are categorized into these 2 subsets - select from the below to explore further</p>
      </div>
      <div className="services-content">
        {/* Life Coaching Service */}
        <div className="service-card">
          <Link to="/life-coaching" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-content">
              <h2>One on One Life Coaching</h2>
              <p>
                The sessions are customized to cater to your needs that will help you get
                clarity in your thoughts, courage in your decisions, and bring consistency
                to your life.
              </p>
            </div>
          </Link>
        </div>

        {/* Image Consulting Service */}
        <div className="service-card2">
          <Link to="/image-consulting" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-content">
              <h2>Image Consulting Services</h2>
              <p>
                Our image consulting sessions are designed to help you refine your personal style, enhance your personal brand, and make a lasting impression in all areas of your life.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
