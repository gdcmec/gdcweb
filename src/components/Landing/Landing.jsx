import React, { forwardRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import '../designs.css';
import './Landing.css';
import landingimage from '../../assets/landingimage.jpg';
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
        <div id='home' className="scroll-mt-[90px]">
          <div className="bg-cover bg-no-repeat bg-center relative bg-fixed flex flex-col justify-center items-center  h-[100vh] pb-10 gap-8 bg-[url('https://img.freepik.com/free-vector/abstract-premium-black-gold-geometric-background_1017-24783.jpg?w=1380&t=st=1681139057~exp=1681139657~hmac=869dfeda2db9f287928f8a23697fe3a4109eaa9d95112916adb425fe33ad5ed7')]">
            <h1 className="text-center text-[#f7e67a] font-bold md:text-[3rem] text-[2rem] uppercase">
              Game Development Club<span className="text-[2rem] md:text-[3rem] ml-2 block"> MEC</span>
            </h1>
            <button
              className="outline  text-white
	   outline-white h-[30px] w-auto align-center text-center px-2  text-xl "
            >
              Start Game
            </button>
            <p className="text-white text-3xl text-center">Think it. Build it. Play it.</p>
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
