import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import GridLayout from './components/gridlayout/GridLayout';
import Cards from './components/cards/Cards';
import Blog from './components/blog/Blog';
import ScrollToTopButton from './components/scroll/ScrollToTopButton';
import PopupForm from './components/popup/PopupForm';
import Admin from './components/Admin';
import Cert from './components/cert/Cert';
import Testimonials from './components/testimo/Testimonials';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const resourceRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // POPUP
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/blog-react/admin" element={<Admin />} />
        <Route path="/blog-react" element={
          <div className="App">
            {showPopup && <PopupForm onClose={handleClose} />}
            <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} servicesRef={servicesRef} blogRef={blogRef} resourceRef={resourceRef} />
            <Hero />
            <Cards />
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={servicesRef}>
              <Services />
            <Cert/>

            </div>
            <GridLayout />
            <div ref={blogRef}>
              <Blog />
              <Testimonials/>
            </div>
            <div ref={resourceRef}>
              <Footer />
            </div>
            <ScrollToTopButton />
          </div>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;
