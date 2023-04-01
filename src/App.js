import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import ControlledCarousel from './components/Carousel';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className='carousel mt-3'>
      <ControlledCarousel />
      </div>
      <Footer />
    </div>
  );
}

export default App