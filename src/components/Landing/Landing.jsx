import React, { forwardRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import '../designs.css';
import './Landing.css';
// import { useState, useEffect, useRef } from "react";

// import Scrollbanner from "../Scrollbanner/Scrollbanner";

const Landing = () => {
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
    <ParallaxProvider>
      <Parallax>
        <div className='glassmorphism'
         
        >
          <div className="bg-cover bg-no-repeat relative  flex flex-col justify-center items-center  h-[100vh] pb-10 gap-16  bg-[url('https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds_181624-11068.jpg')]">
            <h1 className="text-title md:text-[4rem] text-[2.5rem] uppercase ">
              Game Development Club<span className="text-[3rem] md:text-[4rem] ml-2">MEC</span>
            </h1>
            <button
              className="outline  text-white
	   outline-white h-[30px] w-auto align-center text-center px-2  text-xl "
            >
              Start Game
            </button>
            <p className="text-white text-3xl ">Think it. Build it. Play it.</p>
            {
              // <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/>
            }
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
};

export default Landing;
