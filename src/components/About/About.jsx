import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import '../designs.css';

const About = () => {
  const [id, setId] = useState(0);

  const data = [
    {
      id: 0,
      title: '01. What we do',
      img: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        'A game development club typically focuses on creating video games and providing opportunities for members to learn about various aspects of game development, such as programming, design, art, sound, and project management.',
    },
    {
      id: 1,
      title: '02. What we do',
      img: 'https://images.pexels.com/photos/8622911/pexels-photo-8622911.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        'A game development club typically focuses on creating video games and providing opportunities for members to learn about various aspects of game development, such as programming, design, art, sound, and project management.',
    },
    {
      id: 2,
      title: '03. What we do',
      img: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        'A game development club typically focuses on creating video games and providing opportunities for members to learn about various aspects of game development, such as programming, design, art, sound, and project management.',
    },
  ];
  const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  return (
    <div
      id="about"
      className="relative h-auto min-h-[75vh] py-10 gap-8 overflow-hidden gradient flex flex-col justify-center items-center scroll-mt-[90px]"
    >
      <h2 className="text-3xl md:text-6xl text-[#FFF3D4] text-center self-center md:mb-10">About us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-[6.8rem] py-5">
        <img src="https://via.placeholder.com/300" alt="Game Development" className="flex-end" />
        <motion.div key={data[id].id} className="flex flex-col justify-center gap-2 md:px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[#FFBF9B] uppercase text-[0.7rem]"
          >
            {data[id].title}
          </motion.h2>
          <motion.h2 variants={letterAni} className="text-white text-2xl text-left">
            Pushing Our Limits With Game Development
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#afafc0] text-[1rem] max-h-96 overflow-y-hidden text-ellipsis"
          >
            {data[id].content}
          </motion.p>
          <div className="flex flex-row mt-5 space-between justify-center gap-2 items-center">
            {data.map((item) => (
              <>
                <button
                  key={item.id}
                  onClick={() => setId(item.id)}
                  className={`w-8 h-8 md:w-10 md:h-10 text-center align-center rounded-full bg-white ${
                    id === item.id && 'bg-blue-300'
                  }`}
                >
                  {item.id + 1}
                </button>
                {item.id < 2 && <div className="bg-blue-300 h-[2px] w-[80px]"></div>}
              </>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
