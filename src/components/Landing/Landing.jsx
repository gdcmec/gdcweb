import React, { forwardRef } from 'react';
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
    <div className=" relative z-1 flex flex-col  h-[100vh] pb-10">
      <h1 className="text-title ">
        Game Development Club<span className="text-[3rem] md:text-[4rem] ml-2">MEC</span>
      </h1>
      <button
        className="outline bg-white text-white
	   outline-white "
      >
        Start Game
      </button>
      {
        // <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/>
      }
    </div>
  );
};

export default Landing;
