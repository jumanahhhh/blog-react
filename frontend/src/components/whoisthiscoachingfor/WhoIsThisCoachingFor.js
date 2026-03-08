import React from 'react';
import './WhoIsThisCoachingFor.css'; 

const WhoIsThisCoachingFor = () => {
  const audienceGroups = [
    {
      title: 'Individuals Facing Life Transitions',
      description: 'Individuals navigating significant changes such as career shifts, parenthood, or empty nest syndrome.',
    },
    {
      title: 'Professionals Experiencing Burnout',
      description: 'Individuals overwhelmed by career responsibilities seeking a better work-life balance and renewed self-worth.',
    },
    {
      title: 'Survivors of Trauma or Loss',
      description: 'Those who have experienced significant trauma or loss and are struggling with self-image and identity.',
    },
    {
      title: 'Individuals with Low Self-Esteem',
      description: 'People suffering from low self-confidence and self-worth who want to develop a more positive self-image.',
    },
    {
      title: 'Young Adults and Teenagers',
      description: 'Young people dealing with self-image issues who need guidance to build a strong and healthy sense of self.',
    },
    {
      title: 'Individuals in Creative Fields',
      description: 'Artists, writers, and performers struggling with self-doubt looking to enhance self-image and boost creativity.',
    },
    {
      title: 'Individuals Seeking Empowerment',
      description: 'People who want to break free from societal pressures, embrace their true selves, and achieve personal empowerment.',
    },
    {
      title: 'Anyone Seeking Personal Growth',
      description: 'Individuals on a journey of self-discovery and personal development who want to improve their self-image.',
    },
  ];

  return (
    <div className="who-is-this-coaching-for ">
      <h2 className="section-title">Who Is This Coaching For?</h2>
      <div className="audience-groups">
        {audienceGroups.map((group, index) => (
          <div key={index} className="audience-group">
            <h3 className="group-title">{group.title}</h3>
            <p className="group-description">{group.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoIsThisCoachingFor;
