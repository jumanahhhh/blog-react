// import React from "react";
// import "./About.css";
// import hero_img from "../assets/hero_img.png";
// import white from "../assets/white.png"
// const About = () => {
//   return (
//     <div className="about">
//       <h2>About me</h2>
//       <div className="about-content">
//         {/* <img src={hero_img} alt="hero" /> */}
//         <img src={white} alt="hero" />
//         <p>
//           Hi, I am Tanuja Devang, <br/>
//           <br/>
//           You know when we have dreams, desires, plans
//           and aspirations to become successful in life and make a name for
//           yourself, create your own identity in this world, be financially
//           independent, that’s when LIFE HAPPENS. This is my story. I wanted to
//           do masters after my college and had dreams of making it big, but life
//           had some other plans for me. My parents got a very promising match for
//           me and wanted me to get married and settle down in life when I was
//           barely 19 years young.<br/><br/> Everything happened so quickly that before even
//           my final exams started I was hooked. Suddenly my whole life took a 360
//           degree turn. Born and brought up in Hyderabad now after marriage I
//           landed in Chennai. New place, new people, new language, I was
//           completely lost for the first couple of years. My dreams of making it
//           big become far from reality. Blessed with a daughter and a son my life
//           revolved around my kids, husband, family, friends and relatives. I had
//           everything in my life what I had desired for, but still was always
//           feeling empty and hollow from inside. My cup was always half full. <br/><br/> In
//           between all this I never realised when I stopped dreaming for myself,
//           my ambitions, my success. Reality hit me when my children became
//           independent and didn’t need me anymore to take care of them, their
//           studies and classes. I became depressed & lonely, I didn’t know what
//           kind of conversations to have with them, how to guide them for their
//           further studies or their passions. I wanted my kids to look up to me
//           as their role model, their idol, not just as their mumma. But the
//           question was HOW? <br/><br/>
//         </p>
//       </div>
//       <div className="quote">
//         <p>From a Homemaker to a Life Coach & an Image Maker, I am on a mission to transform lives one home at a time.</p>
//       </div><br/>
//       <h2>Certifications & Training</h2>
//       <div className="cert-train">

//         <div className="cert-left">
//           <ul>
//             <li>Certified Life Coach by Life by Design - Puja Puneet</li>
//             <li>A certified image consultant from Image Consulting Business Institute  (ICBI), internationally certified under the curriculum of Conselle Institute Of Image Management, USA founded by Judith Rasband</li>
//             <li>An ICBI certified trainer accredited by National Accreditation Board of Education and Training (NABET)</li>
//             <li>Certified Soft Skills Trainer from Image Consulting Business Institute, Accredited by SQA ( Scottish Qualifications Authority )</li>
//           </ul>
//         </div>
//         <div className="cert-right">
//           <img src={white} alt='hero'/>
//         </div>
//       </div>
//       <div className="motiv">
//         <hr />
//         <p>
//           “Stop living life in a default mode. Design your dream life to live
//           like queen size”
//         </p>
//         <hr/>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "./About.css";
import hero_img from "../assets/hero_img.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h2>So, who am I?</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={hero_img} alt="hero" />
        </div>
        <div className="about-text">
          <p>
            Hi, I am Tanuja Devang, <br />
            <br />
            You know when we have dreams, desires, plans, and aspirations to
            become successful in life and make a name for yourself, create your
            own identity in this world, be financially independent, that’s when
            LIFE HAPPENS. This is my story. I wanted to do a master's after my
            college and had dreams of making it big, but life had other plans
            for me. My parents got a very promising match for me and wanted me
            to get married and settle down in life when I was barely 19 years
            young.
            <br />
            <br />
            Everything happened so quickly that before even my final exams
            started I was hooked. Suddenly my whole life took a 360-degree turn.
            Born and brought up in Hyderabad, now after marriage, I landed in
            Chennai. New place, new people, new language, I was completely lost
            for the first couple of years. My dreams of making it big became
            far from reality. Blessed with a daughter and a son, my life
            revolved around my kids, husband, family, friends, and relatives. I
            had everything in my life that I had desired, but still always felt
            empty and hollow from the inside. My cup was always half full.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="quote">
        <p>
          From a Homemaker to a Life Coach & an Image Maker, I am on a mission
          to transform lives one home at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
