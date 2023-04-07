import React from 'react';
import './Timeline.css';
import { motion } from 'framer-motion';
const Timeline = () => {
  return (
    <div className="h-[100vh]">
      <h1>Our Technologies</h1>
      <div  className=" bg-white w-[100px] relative translate-x-50 top-0"></div>
      <div className="grid grid-cols-2">
        <motion.div></motion.div>
      </div>
    </div>
  );
};

export default Timeline;
