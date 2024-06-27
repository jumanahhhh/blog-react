import React from 'react';
import './Services.css';
import Card_1 from '../assets/Card_1.jpg';

const Services = () => {
  return (
    <div className="services">
      <div className="services-header">
        <h1>Services</h1>
        <p>All my services are categorized into these 2 subsets - select from the below to explore further</p>
      </div>
      <div className="services-content">
        <div className="service-card">
          <div className="card-content">
            <h2>One on One Life Coaching</h2>
            <p>
              The sessions are customised to cater your needs that will help you get
              clarity in your thoughts, courage in your decisions and bring consistency
              in your life.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>
        </div>
        <div className="service-card">
          <div className="card-content">
            <h2>One on One Life Coaching</h2>
            <p>
              The sessions are customised to cater your needs that will help you get
              clarity in your thoughts, courage in your decisions and bring consistency
              in your life.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
