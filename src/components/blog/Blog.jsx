import React, { useRef, useEffect } from 'react';
import img1 from "../assets/image1.png";
import "./Blog.css";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Blog = () => {

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
    <div className="blog">
      <div className="heading">
        <h2>BLOGS</h2>
      </div>

      <div className="cards">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className="card1"
            ref={(el) => (elementsRef.current[index] = el)}
            key={index}
          >
            <img src={img1} alt="first" />
            <h3>Sub Heading</h3>
            <p>
              Details ahfafhdjfhsgsjgd sdghs; dgsghs gsghs;ghsdg shsogsigs sghsghs
              <br /> dhsaohoawfaufgawyougfaugfauwy
            </p>
            <hr />
            <div className="details">
              <img src={img1} alt="author" />
              <p>Name</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
