import React, { forwardRef } from "react";
import "../designs.css";
import "./Landing.css";
// import { useState, useEffect, useRef } from "react";

// import Scrollbanner from "../Scrollbanner/Scrollbanner";

const Landing =()=>{
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
		<div className=" relative z-1 overflow-hidden h-[100vh] pb-10" >
			<div className="design-box p-4"></div>
			<h1 className="text-title w-full md:w-[100px] text-[4rem] md:text-[7rem] leading-[5rem] md:text-left text-center md:leading-[9rem] mt-[10rem] md:ml-5 text-[#fff3d5] text-6xl">
				Game Development Club<span className="text-[3rem] md:text-[4rem] ml-2">MEC</span>
			</h1> 
			{ 
				// <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/>
			}
		</div>
	);
};

export default Landing;
