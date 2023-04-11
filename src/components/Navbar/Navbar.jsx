import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';
import { useState, useEffect } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [scrollbar, setscrollbar] = useState(false);
  const [mobilenav, setmobilenav] = useState(false);

  const setGlassyEffect = () => {
    if (window.scrollY > 50) {
      setscrollbar(true);
    } else {
      setscrollbar(false);
    }
  };
  window.addEventListener('scroll', setGlassyEffect);

  const handleHamburger = () => {
    setmobilenav(!mobilenav);
  };

  return (
    <div
      className={`w-screen flex items-center justify-between py-3 fixed top-0 z-[2] px-5 nav-container ${
        scrollbar ? 'bg-black' : ''
      }`}
    >
      <img src={logo} alt="true" className="h-[50px]" />
      {/* <input class="checkbox" type="checkbox" name="" id="" />
      <button onClick={handleHamburger} className="hamburger-lines z-50 relative">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </button> */}
      <button onClick={handleHamburger} className="text-white text-3xl block md:hidden mr-3">
        {mobilenav ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <ul
        className={`text-white md:static md:w-max md:h-max md:pt-0 md:bg-inherit md:block md:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center bg-black ${
          mobilenav ? 'right-0' : 'right-full'
        }`}
      >
        <a className="group text-white transition-all duration-300 ease-in-out" href="home">
          <li className="block m-auto mb-3 md:inline md:ml-8 bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Home
          </li>
        </a>
        <a className="group text-white transition-all duration-300 ease-in-out" href="home">
          <li className="block m-auto mb-3 md:inline md:ml-8 bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About
          </li>
        </a>
        <a className="group text-white transition-all duration-300 ease-in-out" href="home">
          <li className="block m-auto mb-3 md:inline md:ml-8 bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Events
          </li>
        </a>
        <a className="group text-white transition-all duration-300 ease-in-out" href="home">
          <li className="block m-auto mb-3 md:inline md:ml-8 bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
