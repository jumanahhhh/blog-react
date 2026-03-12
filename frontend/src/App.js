import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import GridLayout from './components/gridlayout/GridLayout';
import ScrollToTopButton from './components/scroll/ScrollToTopButton';
import Cert from './components/cert/Cert';
import Testimonials from './components/testimo/Testimonials';
import WhoIsThisCoachingFor from './components/whoisthiscoachingfor/WhoIsThisCoachingFor';
import LifeCoaching from './components/lifecoaching/LifeCoaching';
import ImageConsulting from './components/imgconsul/ImageConsulting';
import ScrollToTop from './components/ScrollToTop'; 
import Quote from './components/quote/Quote';
import MentorTestimonials from './components/mentor/MentorTestimonials';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsAndConditions from './components/legal/TermsAndConditions';
import CancellationRefund from './components/legal/CancellationRefund';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const resourceRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} servicesRef={servicesRef} blogRef={blogRef} resourceRef={resourceRef} />
            <Hero />
            <Quote text="Your greatest masterpiece is your own life—invest in it, and watch yourself flourish."></Quote>
            <div ref={aboutRef}>
              <About />
            </div>
            <Quote text="Curate your style; It's the art of Self Expression"></Quote>

            <Cert />
            <Quote text="Don’t settle for autopilot—craft your dream life and live it boldly, on your own terms."></Quote>            
            <div ref={servicesRef}>
              <Services />
            </div>
            {/* <WhoIsThisCoachingFor /> */}
            <div ref={blogRef}>
              <WhoIsThisCoachingFor/>
            </div>
            <GridLayout />

            <MentorTestimonials/>
            <Testimonials />

            <div ref={resourceRef}>
              <Footer />
            </div>
            
            <ScrollToTopButton />
          </div>
        } />
        <Route path="/image-consulting" element={<ImageConsulting />} />
        <Route path="/life-coaching" element={<LifeCoaching />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cancellation-refund" element={<CancellationRefund />} />
      </Routes>
    </Router>
  );
}

export default App;
