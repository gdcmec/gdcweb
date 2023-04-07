import { useState, useEffect, useRef } from 'react';
import './App.css';

import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Events from './components/Events/Events';
import Scrollbanner from './components/Scrollbanner/Scrollbanner';
import Footer from './components/Footer/Footer';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="">
      <ParallaxProvider>
        <Navbar />

        <Parallax speed={0}>
          <Landing />
          <About />
        </Parallax>
        {/* <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/> */}
        {/* <Scrollbanner /> */}

        <Events />

        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
