import { useState, useEffect } from 'react';
import './App.css';

import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Events from './components/Events/Events';

import Footer from './components/Footer/Footer';

import WhatWeTeach from './components/WhatWeTeach/WhatWeTeach';
import Team from './components/Team/Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamBanner from './components/TeamBanner/TeamBanner';
import Game from './components/Game/Game';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
      scale: 1,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

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
    <div>
      <Router>
        <Navbar />

        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Landing />
                  <About />
                  {/* <TeamBanner/> */}
                  <Events />
                  <WhatWeTeach />
                  <Footer />
                </div>
              }
            />

            <Route
              path="/team"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="mt-[7rem]"
                >
                  <Team />
                </motion.div>
              }
            />

            <Route
              path="/game"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="mt-[7rem]"
                >
                  <Game />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
