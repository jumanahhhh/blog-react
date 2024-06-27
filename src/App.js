// import React, {useRef} from 'react';
// import './App.css';
// import Navbar from './components/navbar/Navbar';
// import Hero from './components/hero/Hero';
// import About from './components/about/About';
// function App() {
//     const aboutRef = useRef(null);
  
//     const scrollToSection = (sectionRef) => {
//       sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     };
  
//   return (
//     <div className="App">
//       <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef}/>
//       <Hero/>
//       <div className='motiv'>
//         <hr/>
//         <p>"The best project you’ll ever work on is ‘you’ and the best investment you can make is investing in yourself"</p>
//         <hr/>
//       </div>
//       <About/>
//     </div>
//   );
// }

// export default App;


import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import GridLayout from './components/gridlayout/GridLayout';
import ImageSlider from './components/imageslider/ImageSlider';
import Cards from './components/cards/Cards';
import Blog from './components/blog/Blog';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} servicesRef={servicesRef} blogRef={blogRef}/>
      <ImageSlider/>
      <Cards/>
      <Hero />
      {/* <div className='motiv'>
        <hr />
        <p>"The best project you’ll ever work on is ‘you’ and the best investment you can make is investing in yourself"</p>
        <hr />
      </div> */}
      
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <GridLayout/>
      
      <div ref={blogRef}>
        <Blog/>
      </div>
      
      <Footer/>

    </div>
  );
}

export default App;
