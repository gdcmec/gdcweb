import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';
import { useState,useEffect } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {

	const [scrollbar, setscrollbar] = useState(false)
	const [mobilenav, setmobilenav] = useState(false)

	const setGlassyEffect = () => {
		if (window.scrollY>50) {
			setscrollbar(true)
		}
		else{
			setscrollbar(false)
		}
	}
	window.addEventListener('scroll' , setGlassyEffect)

	const handleHamburger = () => {
		setmobilenav(!mobilenav)
	}

	return (
		<div className={ `w-screen flex items-center justify-between py-3 fixed top-0 z-[2] pl-2 ${scrollbar ? 'bg-black' : ''}`}>
			<img src={logo} alt="true" className='h-[50px]'/>
			<button onClick={handleHamburger} className='text-white text-3xl block md:hidden mr-3'>{ mobilenav ? <RxCross1/> : <GiHamburgerMenu/>}</button>
			<ul className={ `text-white md:static md:w-max md:h-max md:pt-0 md:bg-inherit md:block md:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center bg-black ${mobilenav ? 'right-0':'right-full'}` }>
				<li className='block m-auto mb-3 md:inline md:ml-8'>Home</li>
				<li className='block m-auto mb-3 md:inline md:ml-8'>About</li>
				<li className='block m-auto mb-3 md:inline md:ml-8'>Events</li>
				<li className='block m-auto mb-3 md:inline md:ml-8'>Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
