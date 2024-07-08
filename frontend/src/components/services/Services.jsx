import React, { useRef, useEffect } from 'react';
import './Services.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Services = () => {
  const elementsRef = useRef([]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        console.log('Element is intersecting', entry.target);
      } else {
        entry.target.classList.remove('animate');
      }
    });
  };

  const observe = useIntersectionObserver(handleIntersect, {
    threshold: 0.1,
  });

  useEffect(() => {
    elementsRef.current.forEach((element) => {
      if (element) {
        observe(element);
      }
    });
  }, [observe]);

  return (
    <div className="services fixed-width-container">
      <div className="services-header">
        <h1>Services</h1>
        <p>All my services are categorized into these 2 subsets - select from the below to explore further</p>
      </div>
      <div className="services-content">
        <div className="service-card" ref={(el) => elementsRef.current[0] = el}>
          <div className="card-content">
            <h2>One on One Life Coaching</h2>
            <p>
              The sessions are customised to cater your needs that will help you get
              clarity in your thoughts, courage in your decisions and bring consistency
              in your life.
            </p>
            <button><a href="#" className="learn-more">
              LEARN MORE →
            </a></button>
          </div>
        </div>
        <div className="service-card2" ref={(el) => elementsRef.current[1] = el}>
          <div className="card-content">
            <h2>One on One Life Coaching</h2>
            <p>
              The sessions are customised to cater your needs that will help you get
              clarity in your thoughts, courage in your decisions and bring consistency
              in your life.
            </p>
            <button><a href="#" className="learn-more">
              LEARN MORE →
            </a></button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
