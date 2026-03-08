// src/components/quote/Quote.js
import React from 'react';
import './Quote.css'; // Make sure to style it properly

const Quote = ({ text }) => {
  return (
    <div className="quote-container">
      <p className="quote-text">“{text}”</p>
    </div>
  );
};

export default Quote;
