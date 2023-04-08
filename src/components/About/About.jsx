import React from 'react';
import './About.css';
import '../designs.css';
const About = () => {
  return (
    <div className="relative h-auto md:h-[110vh] py-10 gap-8 overflow-hidden gradient">
      {/* <div className="design-box z-[-1]"></div> */}
      <h2 class="text-3xl md:text-8xl text-[#FFF3D4] text-right w-1/3 ml-auto mr-[3.5rem]">About us</h2>
      <div className=" p-4 "></div>
      <div className="grid grid-cols-2 px-[6.8rem]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQ9F0hvfW0twxKZG7E5Oq3o1KduSrVXMMrw&usqp=CAU"
          className="flex-end"
        />
        <div className="flex flex-col justify-center gap-2 px-4">
          <h2 className="text-[#ffb4a1] uppercase text-[0.7rem]">01. What we do</h2>
          <h2 className="text-white text-2xl text-left">Pushing Our Limits With Game Development</h2>
          <p className="text-[#b2beff] text-[1rem]">
            A game development club typically focuses on creating video games and providing opportunities for members to
            learn about various aspects of game development, such as programming, design, art, sound, and project
            management.
          </p>
         
        </div>
      </div>
      {/* <div className="grid  grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 about ">
        <div>
          <Aboutcontent child="What We Do" />
        </div>
        <div>
          <Aboutcontent child="Why We do it " />
        </div>
        <div>
          <Aboutcontent child={"How we do it"} />
        </div>
      </div> */}
    </div>
  );
};
const Aboutcontent = ({child}) => {
  return (
    <div className="flex flex-col w-full min-h-[300px] px-4 columnDivider justify-start gap-8">
      <h1 className="text-white text-3xl underline">{child}</h1>
      <p className="text-white text-left text-[20px] ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus asperiores aspernatur quaerat soluta sit nam,
        aliquid ratione eum eveniet quam omnis laudantium quod optio doloribus? Quae accusamus aut nam beatae?
      </p>
    </div>
  );
};

export default About;
