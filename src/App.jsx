import { useState, useEffect, useRef } from 'react';
import './App.css';

import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Events from './components/Events/Events';
import Scrollbanner from './components/Scrollbanner/Scrollbanner';
import Footer from './components/Footer/Footer';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import WhatWeTeach from './components/WhatWeTeach/WhatWeTeach';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = scrollPos > 500 ? ' gradient' : 'gradient-default';
  return (
    <div >
      <ParallaxProvider>
        <Navbar />
    <Router>
        <Routes>


          <Route path = '/'
          element = {
            <div>
        <Parallax speed={0}>
          <Landing />
          <About />
        </Parallax>
          <Events />
		      <WhatWeTeach/>
          </div>
          }/>

          {/* <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/> */}
        {/* <Scrollbanner /> */}

        <Route path = '/team'
        element = {
          <div className='mt-[7rem]'>
				<Team/>
          </div>
        }/>
        </Routes>
    </Router>
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
