import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
import img1 from "../assets/sliderbackground.jpeg"
import img2 from "../assets/sliderbackground.jpeg"


const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');

    // Initialize the first slide
    if (slides.length > 0) {
      slides[index].classList.add('active');
    }

    return () => {
      if (slides.length > 0) {
        slides[index].classList.remove('active');
      }
    };
  }, [index]);

  const showSlide = (i) => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (totalSlides > 0) {
      slides[index].classList.remove('active');
      const newIndex = (index + i + totalSlides) % totalSlides;
      slides[newIndex].classList.add('active');
      setIndex(newIndex);
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src={img2} alt="Slide 1" />
            <div className="slide-1">
              <div className="slide-content">
                <h1>Taking care</h1>
                <h2>of your life issues</h2>
                <p>
                  We all know how life can be challenging and hard. And that there’s
                  no answer always to all the issues you may face. I’m here to help
                  you.
                </p>
                <a href="#" className="fombtn">
                  FIND OUT MORE
                </a>
                <a href="#" className="ppbtn">
                  PRICING &amp; PACKAGES
                </a>
              </div>
            </div>
          </div>
          <div className="slide" id="slide-2">
            <img src={img1} alt="Slide 1" />
            <div className="slide-2">
              <div className="slide-content">
                {/* <h2>Celeste's Coaching</h2> */}
                <h2>Tanuja's Coaching</h2>
                <h1>transform lives</h1>
                <p>
                  We all know how life can be challenging and hard. And that there’s
                  no answer always to all the issues you may face. I’m here to help
                  you.
                </p>
                <a href="#" className="fombtn">
                  FIND OUT MORE
                </a>
                <a href="#" className="ppbtn">
                  PRICING &amp; PACKAGES
                </a>
              </div>
            </div>
          </div>
          {/* Add more slides as needed */}
        </div>
        <button className="arrow left" onClick={() => showSlide(-1)}>
          ‹
        </button>
        <button className="arrow right" onClick={() => showSlide(1)}>
          ›
        </button>
      </div>
    </>
  );
};

export default ImageSlider;