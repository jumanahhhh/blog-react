import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='motiv'>
        <hr/>
        <p>"The best project you’ll ever work on is ‘you’ and the best investment you can make is investing in yourself"</p>
        <hr/>
      </div>
      <About/>
    </div>
  );
}

export default App;
