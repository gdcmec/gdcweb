import React from "react";
import "../designs.css";
import "./Landing.css";

const Landing = () => {
	return (
		<div className="relative overflow-x-hidden h-[100vh]">
			<div className="design-box p-4"></div>
			<h1 className="text-title w-full md:w-[500px] text-[4rem] md:text-[7rem] leading-[5rem] md:text-left text-center md:leading-[9rem] mt-[10rem] md:ml-5 ">
				Game Development Club<span className="text-[3rem] md:text-[4rem]">MEC</span>
			</h1>
			<span></span>
		</div>
	);
};

export default Landing;
