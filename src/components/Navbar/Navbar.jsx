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
    if (window.scrollY > 50) {
      setscrollbar(true);
    } else {
      setscrollbar(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  const handleHamburger = () => {
    setmobilenav(!mobilenav);
  };

  return (
    <div
      className={`w-screen h-[70px] flex items-center justify-between py-3 fixed top-0 z-[2] px-5 ${
        scrollbar ? 'bg-[#0c0502]' : 'bg-none'
      }`}
    >
      <img src={logo} alt="true" className="h-[50px]" />
      <button onClick={handleHamburger} className="text-white text-3xl block md:hidden mr-3">
        {mobilenav ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <div className={`hidden md:flex gap-10 items-center ${mobilenav ? 'flex' : 'hidden'}`}>
        <a class="group text-white transition-all duration-300 ease-in-out" href="#">
          <span class="bg-left-bottom bg-gradient-to-r from-yellow-500 to-yellow-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Home
          </span>
        </a>
        <a class="group text-white transition-all duration-300 ease-in-out" href="#">
          <span class="bg-left-bottom bg-gradient-to-r from-yellow-500 to-yellow-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About
          </span>
        </a>
        <a class="group text-white transition-all duration-300 ease-in-out" href="#">
          <span class="bg-left-bottom bg-gradient-to-r from-yellow-500 to-yellow-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Events
          </span>
        </a>
        <a class="group text-white transition-all duration-300 ease-in-out" href="#">
          <span class="bg-left-bottom bg-gradient-to-r from-yellow-500 to-yellow-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
