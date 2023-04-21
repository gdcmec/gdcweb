import React, { useState, useEffect } from 'react';

import '../designs.css';
import './Landing.css';
import landingimage from '../../assets/landingimage.jpg';
import { motion } from 'framer-motion';
// import { useState, useEffect, useRef } from "react";

// import Scrollbanner from "../Scrollbanner/Scrollbanner";

const Landing = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecked(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  // const [isFixed, setIsFixed] = useState(false);
  // const secondComponentRef = useRef(null);

  // useEffect(() => {
  //   const secondComponent = secondComponentRef.current;
  //   const preOrg = secondComponent.getBoundingClientRect().top
  //   const orgPos = window.pageYOffset + preOrg;
  //
  //   const handleScroll = () => {
  //
  //     console.log("org " + orgPos);
  //
  //     var top  = window.pageYOffset  + 82;
  //
  //     console.log("top " + top);
  //
  //     setIsFixed(top >= orgPos);
  //
  //   };
  //
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div id="home" className="scroll-mt-[90px]">
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
            backgroundImage:
              'url(https://img.freepik.com/free-photo/particle-burst-golden-sparkle-shimmer-background-illustration_1017-42064.jpg?w=1060&t=st=1681567191~exp=1681567791~hmac=bde82ac482d1b3148859f2f13fe3420137196b27b7247d98e11ada10fcde834a)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      ) : (
        <div className="bg-cover bg-no-repeat bg-center relative bg-fixed flex flex-col justify-center items-center  h-[100vh]  gap-12 md:gap-12 bg-[url('https://img.freepik.com/free-photo/particle-burst-golden-sparkle-shimmer-background-illustration_1017-42064.jpg?w=1060&t=st=1681567191~exp=1681567791~hmac=bde82ac482d1b3148859f2f13fe3420137196b27b7247d98e11ada10fcde834a')]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white font-bold md:text-[4rem] text-[2rem] uppercase"
          >
            Game Development Club<span className="text-[2rem] md:text-[4rem]  block"> MEC</span>
          </motion.h1>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            href="#events"
            className="outline  text-white
	   outline-white h-[30px] w-auto align-center text-center px-2  text-xl "
          >
            Start Game
          </motion.a>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5,delay:0.4 }}
            className="text-[#fff3d5] text-3xl  text-center"
          >
            Think it. Build it. Play it.
          </motion.p>
          {
            // <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/>
          }
        </div>
      )}
    </div>
  );
};

export default Landing;
