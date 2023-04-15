import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './About.css';
import '../designs.css';

const About = () => {
  const [id, setId] = useState(0);
  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(true);

  const data = [
    {
      id: 0,
      subheading: 'Building a Community of Game Developers',
      title: '01. What we do',
      img: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        'GDC MEC aims to create a community of game developers and to give its members a supportive environment in which they may grow their abilities and accomplish their game development objectives.',
    },
    {
      id: 1,
      subheading: 'Creating a Culture of Game Development and Innovation',
      title: '02. What we do',
      img: 'https://images.pexels.com/photos/8622911/pexels-photo-8622911.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        "We intend to create a culture of game development and the practice of it's various aspects, to get, up to date with the trends of gaming industry to gain knowledge and upscale the skills of students of MEC in this domain. ",
    },
    {
      id: 2,
      subheading: 'Hosting Engaging Events and Providing Opportunities for Growth',
      title: '03. What we do',
      img: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        'We host a variety of events, including seminars, game jams, competitions, and guest lectures to promote learning and creativity.The club also provides chances to promote and publish games, connect with other game makers, and learn useful industry insights.',
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${import.meta.env.VITE_APP_API_URL}/cms/static/about`);
      console.log(result.data);
      setAbout(result.data);
    };
    fetchData().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div id='about' className='scroll-mt-[70px]'>
      <div
        className="relative h-auto min-h-[75vh] py-10 gap-8 overflow-hidden gradient flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl md:text-6xl text-[#FFF3D4] text-center self-center md:mb-10">About us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-[6.8rem] py-5">
          <img className="w-[300px] h-[380px]" src={data[id].img} alt="Game Development" />
          <motion.div key={data[id].id} className="flex flex-col justify-center gap-2 md:px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-[#FFBF9B] uppercase text-[0.7rem]"
            >
              {data[id].title}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white subheading text-2xl text-left"
            >
              {data[id].subheading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[#afafc0] text-[1.2rem] max-h-96 overflow-y-hidden text-ellipsis"
            >
              {data[id].content}
            </motion.p>
            <div className="flex  flex-row mt-5 space-between justify-center gap-2 items-center">
              {data.map((item) => (
                <>
                  <button
                    key={item.id}
                    onClick={() => setId(item.id)}
                    className={`w-8 h-8 md:w-10 md:h-10 text-center align-center rounded-full bg-white ${id === item.id && 'bg-blue-300'
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
    </div>
  );
};

export default About;
