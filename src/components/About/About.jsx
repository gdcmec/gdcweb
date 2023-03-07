import React from "react";
import "./About.css";
import "../designs.css";
const About = () => {
  return (
    <div className="relative h-[100vh] pt-10 overflow-hidden">
      <h2 class="text-3xl md:text-7xl text-[#FFF3D4]">Events</h2>
      <div className=" p-4 "></div>
      <div className="grid  grid-cols-1 md:grid-cols-3 about ">
        <div>
          <Aboutcontent />
        </div>
        <div>
          <Aboutcontent />
        </div>
        <div>
          <Aboutcontent />
        </div>
      </div>
    </div>
  );
};
const Aboutcontent = () => {
  return (
    <div className="flex flex-col w-full min-h-[300px] px-2 columnDivider">
      <h1 className="text-white text-xl px-2">What we do</h1>
      <p className="text-white px-2 text-center ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        asperiores aspernatur quaerat soluta sit nam, aliquid ratione eum
        eveniet quam omnis laudantium quod optio doloribus? Quae accusamus aut
        nam beatae?
      </p>
    </div>
  );
};

export default About;
