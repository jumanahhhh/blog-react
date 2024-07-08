import React from 'react';
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      clientName: 'Rishab TCS',
      testimony: 'Likewise its been a great association with you. Im blessed to have a mentor like you especially at this stage of my life. Earlier it was hard for me to keep the motivation high and take actions. But after attending the sessions, I was able to know more about myself and how I could change in order to develop and grow in life. Definitely there is a lot of difference/progress after taking the coaching. Im truly grateful and thankful to you Mam',
      clientImage: 'https://via.placeholder.com/150' // Add client image URLs
    },
    {
      id: 2,
      clientName: 'Client',
      testimony: 'Hey Tanuja, Thank you for your time and support in this journey. It was very helpful for me as I realized lot of hidden strengths within me and gained more confidence to tackle things. You are a very organized, caring and matured coach. You understand the depth of the problem and give the right solutions to problems. Your knowledge and talent will help lot of people and I would definitely recommend this course to my contacts.',
      clientImage: 'https://via.placeholder.com/150' // Add client image URLs
    },
    // Add more testimonials as needed
  ];

  return (
    <div className='testimonials fixed-width-container'>
      <h2>Client Testimonials</h2>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className='testimonial'>
          <img src={testimonial.clientImage} alt={testimonial.clientName} className='testimonial-image' />
          <div className='testimonial-content'>
            <p className='testimonial-text'>{testimonial.testimony}</p>
            <p className='testimonial-client'>- {testimonial.clientName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
