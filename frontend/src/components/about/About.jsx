import React from "react";
import "./About.css";
import hero_img from "../assets/about.jpg";

const About = () => {
  return (
    <div className="about fixed-width-container">
      <div className="about-header">
        <h2>So, who am I?</h2>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={hero_img} alt="hero" />
        </div>
        <div className="about-text">
          <p>
            Hi, I am Tanuja Devang,<br/><br/> 
            A Self-Image Coach on a mission to empower
            individuals to develop a positive self-perception, identify and
            overcome limiting beliefs and break free from the shackles of
            self-doubt. My goal is to help people build confidence and courage
            to embrace their true selves.<br/><br/> My life took a 360-degree tragic turn
            when I lost my mother at the tender age of 6. The loss left me
            devastated and disconnected from the world, pushing me to become
            fiercely independent at a very young age.<br/><br/> As my family and I
            struggled to come to terms with this tragedy, we learned to rely on
            our own strength and resilience. We discovered that while the world
            may be at your feet in times of success, in moments of hardship, you
            often find yourself standing alone. Growing up without love,
            compassion and guidance I needed, an undeniable void formed in my
            life. I struggled to connect with others on a deeper level and found
            it difficult to let people into my world. The walls I built for
            protection made it harder to trust and be vulnerable.<br/><br/>
             Growing up
            surrounded by masculine energy, I constantly felt the pressure to
            prove my worth, take on responsibilities, and be the peacemaker.
            Without feminine support and guidance, I found myself questioning
            everything around me, unable to accept things at face value. I was
            often labeled as unconventional, adamant and arrogant simply for
            being myself and voicing my opinions.<br/><br/>
             Consumed by these struggles, I
            felt like I was slowly being eaten away, like wood devoured by
            termites, breaking down piece by piece. Eventually, I collapsed
            under the weight, and life hit rock bottom when I was diagnosed with
            depression. My self-respect faded, replaced by low self-esteem,
            self-criticism, and a victim mentality, leaving me feeling lost and
            helpless.<br/><br/>
             Despite having what others might consider a good life, I
            felt overwhelmed by emptiness. Simple tasks became difficult, my
            memory faltered, and I lost my appetite and ability to smile. I
            hesitated to speak about my struggles, fearing judgment. Then, an
            angel in the form of my manager, Mr. Rahman, entered my life. I
            truly believe God sends help when you least expect it. His support
            gave me the strength to face my problems. With his encouragement, I
            opened up to my family and sought professional help, marking the
            start of my healing journey. I embraced self-discovery and began
            attending coaching sessions for personal growth.<br/><br/>
             I closely observed
            great visionaries and achievers who faced struggles even greater
            than mine. I realized they were ordinary people who embraced
            challenges and worked relentlessly to overcome them. That’s when I
            understood that, no one was coming to rescue me or offer a magical
            solution for happiness. With big dreams in mind, I knew I couldn’t
            sit back, blame others, or wait for change. I decided to take charge
            of my life and use my experiences to make a difference. My journey
            to empower others had begun. Now, as a certified Image Consultant &
            Life Coach, I am on a mission to help those facing similar
            struggles.<br/><br/>
            Mentorship is more than just sharing knowledge; it's
            about listening with empathy, understanding the unique needs and
            aspirations of the mentee, and providing that gentle push to help
            you realize your potential. It's a two-way street where both mentor
            and mentee grow and learn from each other. As your Mentor, I am here
            to listen, guide, and support you every step of the way. Let's
            continue to foster a culture of mentorship and support, helping each
            other to reach new heights.
          </p>
        </div>
      </div>
      <div className="quote">
        <p>“Every Detail counts; Small Things Make a Big Difference”</p>
      </div>
    </div>
  );
};

export default About;
