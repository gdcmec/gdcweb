import { useState, useEffect } from 'react';
import './App.css';

import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';



import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


import { motion, AnimatePresence } from 'framer-motion';
import { Nintendo } from './components/Nintendo/Nintendo';
import { NintendoMob } from './components/NintendoMob/NintendoMob';
import { Responsivehook1 } from './components/ResponsiveHook';
import ValoCard from './components/ValoCard/ValoCard';
import CardContainer from './components/CardContainer/CardContainer';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000); // set the timeout to 3 seconds
  }, []);
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
      {loading ? (
        <Responsivehook1 />
      ) : (
        <BrowserRouter>
          <Navbar />
          {/* <NintendoMob/> */}

          <AnimatePresence>
            <section id = "home">
              <Landing/>
            </section>
          </AnimatePresence>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
