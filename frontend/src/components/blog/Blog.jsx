import React, { useRef, useEffect } from 'react';
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image1.png";
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

  const cardData = [
    {
      img: img1,
      title: "Card 1 Title",
      description: "Details for card 1 go here.",
      authorImg: img1,
      authorName: "Author 1"
    },
    {
      img: img2,
      title: "Card 2 Title",
      description: "Details for card 2 go here.",
      authorImg: img2,
      authorName: "Author 2"
    },
    {
      img: img3,
      title: "Card 3 Title",
      description: "Details for card 3 go here.",
      authorImg: img3,
      authorName: "Author 3"
    }
  ];

  return (
    <div className="blog fixed-width-container">
      <div className="heading">
        <h2>BLOG</h2>
      </div>

      <div className="cards">
        {cardData.map((card, index) => (
          <div
            className="card1"
            ref={(el) => (elementsRef.current[index] = el)}
            key={index}
          >
            <img src={card.img} alt={`card-${index}`} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <hr />
            <div className="details">
              <img src={card.authorImg} alt="author" />
              <p>{card.authorName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
