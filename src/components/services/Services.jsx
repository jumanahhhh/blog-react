import React from 'react';
import './Services.css';
import Card1Image from '../assets/Card_1.jpg';
import Card2Image from '../assets/Card_1.jpg'; // Assuming you have a second image

const Services = () => {
  return (
    <div className='Services'>
      <div className='hd'>
        <h1>Services</h1>
        <p>All my services are categorized into these 2 subsets — select from the below to explore further</p>
      </div>
      <div className='Cards'>
        <div className='Card1'>
          <img src={Card1Image} alt='One on One Life Coaching' />
          <div className='CardContent'>
            <h1>One on One Life Coaching</h1>
            <p>The sessions are customized to cater your needs that will help you get clarity in your thoughts, courage in your decisions, and bring consistency in your life.</p>
            <button>learn more &#8594; </button>
          </div>
        </div>
        <div className='Card2'>
          <img src={Card2Image} alt='Image Consultancy Services' />
          <div className='CardContent'>
            <h1>Image Consultancy Services</h1>
            <p>Customized & interactive sessions on how to project an authentic and appropriate image for your various goals, roles, and occasions.</p>
            <button>learn more &#8594; </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
