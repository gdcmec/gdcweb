import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';
import { useState, useEffect } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [scrollbar, setscrollbar] = useState(false);
  const [mobilenav, setmobilenav] = useState(false);

	const handleScroll = () => {
		if (window.scrollY>50) {
			setscrollbar(true)	
		}
		else{
			setscrollbar(false)
		}
	}

	window.addEventListener('scroll', handleScroll)

	const handleHamburger = () => {
		setmobilenav(!mobilenav)
	}

	return (
		<div className={`w-screen h-[70px] flex items-center justify-between py-3 fixed top-0 z-[2] px-5 ${scrollbar ? 'bg-[#0c0502]':'bg-none'}`}>
			<img src={logo} alt="true" className='h-[40px]'/>
			<button onClick={handleHamburger} className='text-white text-3xl block md:hidden mr-3'>{ mobilenav ? <RxCross1/> : <GiHamburgerMenu/>}</button>
			<ul className={ `text-white font-medium md:static md:w-max md:h-max md:pt-0 md:bg-transparent md:block md:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center bg-black ${mobilenav ? 'right-0':'right-full'}` }>
				<li className='block m-auto mb-3 md:inline md:ml-8'><a href='#home'>Home</a></li>
				<li className='block m-auto mb-3 md:inline md:ml-8'><a href='#about'>About</a></li>
				<li className='block m-auto mb-3 md:inline md:ml-8'><a href='#events'>Events</a></li>
				<li className='block m-auto mb-3 md:inline md:ml-8'><a href='#contact'>Contact</a></li>
			</ul>
		</div>
	);
};

export default Navbar;
