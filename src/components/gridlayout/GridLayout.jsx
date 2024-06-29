import React, { useRef, useEffect } from 'react';
import './GridLayout.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const GridLayout = () => {
  const elementsRef = useRef([]);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  };

  const observe = useIntersectionObserver(handleIntersect, {
    threshold: 0.1,
  });

  useEffect(() => {
    elementsRef.current.forEach((element) => {
      observe(element);
    });
  }, [observe]);

  return (
    <div className="grid-layout">
      <div className="grid-item" ref={(el) => elementsRef.current[0] = el}>
        <div className="text-container">
          <img src={image3} alt="icon" className="icon" />
          <h3>Effortless success</h3><hr/>
          <p>Practice ultimate self-care and increase your health and vitality. People who take exceptional care of themselves attract extraordinary opportunities and people into their lives. Learn the importance of being blessedly selfish.</p>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
      <div className="grid-item" ref={(el) => elementsRef.current[1] = el}>
        <img src={image1} alt="Person working" />
      </div>
      <div className="grid-item" ref={(el) => elementsRef.current[2] = el}>
        <img src={image2} alt="Person reading" />
        
      </div>
      <div className="grid-item" ref={(el) => elementsRef.current[3] = el}>
        <div className="text-container">
          <img src={image4} alt="icon" className="icon" />
          <h3>Work smarter, not harder</h3><hr/>
          <p>Align yourself with the energy that’s already out there. Attract success instead of chasing after it and stop struggling to reach your goals—you know, coming up with a plan, setting a timeline and taking specific action steps, etc.</p>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;

