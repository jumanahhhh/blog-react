import React from 'react';
import './MentorTestimonials.css';
import mentorimage from "../assets/shipramentor.jpg"

const testimonials = [
  {
    image: mentorimage,
    heading: 'Mentor Testimonial',
    description: `I wanted to take a moment to acknowledge and celebrate the incredible journey you've been on. It has been a privilege to witness your growth and the way you’ve embraced your potential. Your clarity of thought, paired with powerful insights, gives you a unique and wise perspective. Your immense patience, allowing you to truly listen, understand, and guide others with empathy, is a rare and valuable quality. I am continually inspired by your resolve to achieve your goals and your profound approach to life. Tanuja, you are destined for great things, and I am so proud to have been a part of your journey. Your strength, clarity, and patience will continue to serve you well as you reach new heights and make a lasting impact on many lives.`,
    name: 'Shipra Singh ',
  }
];

const MentorTestimonials = () => {
  return (
    <section className="mentor-testimonials">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <h3 className="testimonial-heading">{testimonial.heading}</h3>
          <p className="testimonial-description">{testimonial.description}</p>
          <p className="testimonial-name">{testimonial.name}</p>
        </div>
      ))}
    </section>
  );
};

export default MentorTestimonials;
