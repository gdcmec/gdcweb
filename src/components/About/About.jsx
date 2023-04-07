import React from 'react';
import './About.css';
import '../designs.css';
const About = () => {
  return (
    <div className="relative h-auto md:h-[110vh] py-10 gap-8 overflow-hidden">
      {/* <div className="design-box z-[-1]"></div> */}
      <h2 class="text-3xl md:text-8xl text-[#FFF3D4] text-right w-1/3 ml-auto mr-[3.5rem]">About us</h2>
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
    <div className="flex flex-col w-full min-h-[300px] px-4 columnDivider justify-start gap-8">
      <h1 className="text-white text-3xl">What we do</h1>
      <p className="text-white text-left text-[20px] ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus asperiores aspernatur quaerat soluta sit nam,
        aliquid ratione eum eveniet quam omnis laudantium quod optio doloribus? Quae accusamus aut nam beatae?
      </p>
    </div>
  );
};

export default About;
