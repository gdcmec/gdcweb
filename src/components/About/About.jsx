import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 about md:h-[100vh]">
      <Aboutcontent />
      <Aboutcontent />
      <Aboutcontent />
    </div>
  );
};
const Aboutcontent = () => {
  return (
    <div className="flex flex-col w-full min-h-[300px] px-2">
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
