import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';
import { useState, useEffect } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [scrollbar, setscrollbar] = useState(false);
  const [mobilenav, setmobilenav] = useState(false);

	const handleHamburger = () => {
		setmobilenav(!mobilenav)
	}

	return (
		<div className='w-screen h-[90px] bg-[#0c0c0c] flex items-center justify-between py-3 fixed top-0 z-[2] px-5'>
			<img src={logo} alt="true" className='h-[50px]'/>
			<button onClick={handleHamburger} className='text-white text-3xl block md:hidden mr-3'>{ mobilenav ? <RxCross1/> : <GiHamburgerMenu/>}</button>
			<ul className={ `text-white font-medium md:static md:w-max md:h-max md:pt-0 md:bg-inherit md:block md:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center bg-black ${mobilenav ? 'right-0':'right-full'}` }>
				<li className='block m-auto mb-3 md:inline md:ml-8'><a href='#home'>Home</a></li>
				<li className='block m-auto mb-3 md:inline md:ml-8'><a href='#about'>About</a></li>
				<li className='block m-auto mb-3 md:inline md:ml-8'><a href='#events'>Events</a></li>
				<li className='block m-auto mb-3 md:inline md:ml-8'><a href='#contact'>Contact</a></li>
			</ul>
		</div>
	);
};

export default Navbar;
