import React, { useState, useEffect } from 'react';

import './Landing.css';
import { motion } from 'framer-motion';
import hero from '../../assets/source1.jpg';
import logo from '../../assets/newlogo.png';

import AOS from 'aos';
import 'aos/dist/aos.css'
import { events } from '@react-three/fiber';
import { Events } from 'react-scroll';




const Landing = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecked(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div id="home" className="scroll-mt-[90px] w-[100vw]">
      <img id = "logo" src={logo} alt="" />
      <div className={!isChecked ? 'h-[100vh] ' : 'h-[100vh] fixed'}></div>
      

      {!isChecked ? (
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            backgroundColor: '#000',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      ) : (
        <div className="  relative flex flex-col justify-center items-center w-[100%] h-[100vh] md:gap-6  bg-none">
          <motion.img id = "bg" initial={{scale:1}} src={hero} className="fixed z-[-10] h-[100vh] md:w-[100vw] " />
          
          <motion.h1
            initial={{ x: 0, y: 50, opacity: 0}}
            animate={{ x: 0, y: 0 , opacity: 1}}
            transition={{ duration: 0.7, delay: 0.4 }}
            
          >
            <h1 id = "text" data-text = "Game Development Club" >Game Development <br></br> Club </h1>
            
          </motion.h1>
            {/* GDC */}
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-[#cfccc9] text-xl font-subtitle text-center md:text-3xl"
          >
            Think it • Build it • Play it
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Landing;
