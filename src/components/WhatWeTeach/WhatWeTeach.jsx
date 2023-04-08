import React, { useEffect, useState } from 'react'
import Card from './Card'
import { motion } from 'framer-motion'

import './Style.css'

const WhatWeTeach = () => {
	 const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
	return (
		<div className='h-max'>
			<div>
				<h1 className='text-[#fff3d5] text-center text-4xl'>What we teach</h1>
				<motion.hr initial={{height:0}} className='mt-3'/>
			</div>
			<div className='timeline text-white h-[700px] my-16 flex flex-col gap-[180px] pt-16'>
				<Card/>
				<Card/>
			</div>
		</div>
	)
}

export default WhatWeTeach
