import React from 'react';
import './ImageConsulting.css'; 
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import img1 from "../assets/personalbranding.jpg";
import img2 from "../assets/personal_2.jpg";
import img3 from "../assets/fitandstyle.jpg";
import img4 from "../assets/colors.jpg";
import img5 from "../assets/wardrobe.jpg";
import img from "../assets/persnolizedand.jpeg"

const ImageConsulting = () => {
  const cards = [
    {
      title: "Personal Branding",
      description: "Understanding Personal Branding: Explore the importance of developing a personal brand and its impact on professional and social interactions. Image Management: Learn about the significance of image management and how it communicates your values and identity in today’s world. First Impressions: Discuss the role of first impressions and how they affect social and professional relationships. The 4 A's of Image Management: Introduction to the core principles: Authentic, Affordable, Aesthetic, and Attractive.",
      time: "2hrs",
      // image:"https://via.placeholder.com/150"
      image:img1
    },
    {
      title: "Lifestyle Evaluation & Personal Style",
      description: "Role Alignment: Assess your various roles and goals to ensure your appearance aligns with them. Personal Style Identification: Discover and define your personal style categories: Romantic, Sporty, Classic, and Dramatic. Style Preferences: Explore your preferences in color, fabric, pattern, and texture.",
      time: "2hrs",
      image: img2
    },
    {
      title: "Fit and Fashion",
      description: "Body Type and Shape: Learn how to identify your body type, face shape, and personal colors. Visual Illusions: Techniques to create flattering visual illusions for your body shape. Proper Lingerie: Understand the importance of appropriate lingerie for different outfits. Enhancing with Accessories: Explore how accessories can elevate your overall look.",
      time: "2hrs",
      image:img3
    },
    {
      title: "Color",
      description: "Color Significance: Understand the psychological impact and messages conveyed by different colors. Color Theory: Learn about neutral and accent colors, and how to use the color wheel for effective color combinations. Body Colors Analysis: Analyze how your skin tone, hair, eyes, and lips influence color choices. Mixing and Matching: Master the art of combining colors, patterns, textures, and fabrics to create harmonious outfits.",
      time: "2hrs",
      image: img4
    },
    {
      title: "Wardrobe Analysis",
      description: "Wardrobe Reflection: Reflect on why you like or dislike certain clothes in your closet. Organizing and Decluttering: Techniques for organizing and decluttering your wardrobe. Wardrobe Assessment: Identify which clothes and accessories to keep, revamp, donate, or discard. Clothing Clusters: Create efficient clothing clusters for cost-effectiveness and variety. Smart Shopping List: Prepare a shopping list to complete your wardrobe clusters.",
      time: "2hrs",
      image: img5
    }
  ];

  return (
    <div className='imgc'>
        <Navbar/>
    <div className="card-container">
    <div className="consulting-section">
        <div class="consulting-content">
          <h1>
          Personalized & Engaging Sessions<br /> 
          </h1>
          <br/><br/>
          <p>
          Unlock the power of your authentic image and present yourself confidently in alignment with your unique goals, roles, and occasions. These interactive sessions are tailored to help you refine your personal presentation, ensuring you leave a lasting impact while staying genuine. Whether for career advancement, social engagements, or personal growth, these sessions equip you with the skills to showcase your best self in every setting.            <br />
          </p>
        </div>
        <div class="consulting-image">
          <img src={img} alt="personalized" />
        </div>
      </div>
      {cards.map((card, index) => (
        <div key={index} className={`card ${index % 2 === 0 ? 'left' : 'right'}`}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <p className="time">Engagement time: {card.time}</p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default ImageConsulting;
