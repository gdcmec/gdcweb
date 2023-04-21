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
      
        <Navbar />

        
          <Landing />
          <About />
        
        {/* <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/> */}
        {/* <Scrollbanner /> */}

        <Events />
		<WhatWeTeach/>
				<Team/>

        <Footer />
    
    </div>
  );
}

export default App;
