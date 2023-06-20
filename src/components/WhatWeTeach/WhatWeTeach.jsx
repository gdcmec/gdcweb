import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { motion } from 'framer-motion';

import './Style.css';

const WhatWeTeach = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [techStack, setTechStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const fetch = async () => {
      const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/cms/static/techstack`);
      setTechStack(res.data);
    };
    fetch().then(() => setLoading(false));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    !loading && (
      <div className="h-max mt-12 ">
        <div>
          <h1 className="text-white text_shadows font-['bungee'] text-center text-2xl">What we teach</h1>
          <motion.hr initial={{ height: 0 }} className="mt-3" />
        </div>
        <div className="timeline text-white h-[1000px] mt-14 mb-16 flex flex-col gap-[180px] pt-16">
          {techStack.map((item, index) => {
            return <Card index={index} item={item} />;
          })}
        </div>
      </div>
    )
  );
};

export default WhatWeTeach;
