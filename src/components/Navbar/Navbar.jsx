import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';
import { useState,useEffect } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

	const [scrollbar, setscrollbar] = useState(false)

	const setGlassyEffect = () => {
		if (window.scrollY>50) {
			setscrollbar(true)
		}
		else{
			setscrollbar(false)
		}
	}

	window.addEventListener('scroll' , setGlassyEffect)

	return (
		<div className={ `w-full py-3 fixed top-0 z-[2] flex items-center justify-between pl-2 ${scrollbar ? 'bg-black' : ''}`}>
			<img src={logo} alt="true" className='h-[50px]'/>
			<button className='text-white static md:hidden'><GiHamburgerMenu/></button>
			<ul className='text-white hidden md:block'>
				<li className='inline ml-8'>Home</li>
				<li className='inline ml-8'>About</li>
				<li className='inline ml-8'>Events</li>
				<li className='inline ml-8 mr-5'>Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
