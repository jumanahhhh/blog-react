import React from 'react';
import "./Testimonials.css";
import clientimage from "../assets/client.png";
import pragathe from "../assets/pragatheclienttest.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id:1,
      clientName:'Pragathe - Founder and CEO - Sportlight Strategic Solutions',
      testimony:'I had the opportunity to work with Tanuja for a personalized image consultation, and I’m so glad I did. From the start, she took the time to understand what I needed and offered tips and tricks that were customized just for me. Clearly, she knows exactly what she’s doing, and she made everything so easy to grasp.During our practical activities, I had several "aha moments," which were incredibly valuable. Tanuja’s approach wasn’t just about looking good—she also helped me create habits around dressing well, which has made a real difference in my daily life. She even suggested affordable choices that fit perfectly with my style and budget. I’d definitely recommend Tanuja to anyone looking to improve their image or overall appearance. She’s dedicated, knowledgeable, and really helps you build systems that work for you, whether it’s for your image, makeup, shopping, or more. Working with her has been a game-changer for me.',
      clientImage: pragathe

    },
    {
      id: 2,
      clientName: 'Rishab TCS',
      testimony: 'It has been a great association with you. I am blessed to have a mentor like you especially at this stage of my life. Earlier it was hard for me to keep the motivation high and take actions. But after attending the sessions, I was able to know more about myself and how I could change in order to develop and grow in life. Definitely there is a lot of difference/progress after taking the coaching. I am truely greatful and thankful to you Mam.',
      clientImage: clientimage

    },
    {
      id: 3,
      clientName: 'Vrinda',
      testimony: 'Thank you for your time and support in this journey. It was very helpful for me as I realized lot of hidden strengths within me and gained more confidence to tackle things. You are very organised, caring and a matured coach. You understand the depth of the problem and give the right solutions to the problems. Your knowledge and talent will help lot of people and I would definitely recommend this course to my contacts',
      clientImage: clientimage
    }

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
