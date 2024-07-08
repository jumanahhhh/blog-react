import React, { useRef, useEffect } from 'react';
import "./Cards.css";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Cards = () => {
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
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <div className="card-container">
        <div className="card1" ref={(el) => elementsRef.current[0] = el}>
          <h3>Consultancy &amp; advising</h3>
          <p>
            Part consultant, part motivational speaker, part therapist and part
            friend, coaches work with people helping them define and achieve their
            goals.
          </p>
          {/* <button>
            <a href="#" className="card-button">
              READ MORE
            </a>
          </button> */}
        </div>
        <div className="card2" ref={(el) => elementsRef.current[1] = el}>
          <h3>Problem solving</h3>
          <p>
            The trained life coach knows how to help you set the right goals, make
            more money, and structure your personal and professional life to achieve
            greater productivity with less effort.
          </p>
          {/* <button>
            <a href="#" className="card-button">
              READ MORE
            </a>
          </button> */}
        </div>
        <div className="card3" ref={(el) => elementsRef.current[2] = el}>
          <h3>Conferencing &amp; talks</h3>
          <p>
            Coaching typically works best with a weekly call so clients have time to
            integrate ways of thinking, take action each week toward their goals.
          </p>
          {/* <button>
            <a href="#" className="card-button">
              READ MORE
            </a>
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Cards;
