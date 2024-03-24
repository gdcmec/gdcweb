import React from 'react';
import logo from '../../assets/newlogo.png';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { TfiAlignRight } from "react-icons/tfi";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [mobilenav, setmobilenav] = useState(true);

  const handleHamburger = () => {
    setmobilenav(!mobilenav);
  };

  return (
    <div id = "nav" className="w-screen h-[60px] flex items-center justify-between py-3 fixed top-0 z-[3] px-5">
      
      <button id = "ham" onClick={handleHamburger} className="text-white text-3xl absolute right-0 top-0 bg-black block md:hidden mr-3 shadow-md">
        {mobilenav ?  <TfiAlignRight color='gold' size= '25px'/>: <RxCross1 color='gold' size= '25px' />}
      </button>
      <ul id = "nav1"
        className={`text-white transition-all duration-500 ease-in-out flex flex-row md:static md:w-max md:h-max md:pt-0 md:bg-transparent md:flex md:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center bg-black ${
          mobilenav ? 'top-[-105%]  flex flex-col gap-8' : 'top-5'
        }`}
      >
        <a onClick={handleHamburger} class="group text-white  transition-all duration-300 ease-in-out md:ml-8" href="#">
          
            <Link to="#" smooth = {true}>Home</Link>
          
        </a>
        <a onClick={handleHamburger} class="group text-white transition-all duration-300 ease-in-out md:ml-8" href="#about">
          
          <Link to="/">About</Link>
          
        </a>
        <a onClick={handleHamburger} class="group text-white transition-all duration-300 ease-in-out md:ml-8" href="events">
          
          <Link to="#events" smooth={true} duration={500}>Events</Link>
          
        </a>
        <a onClick={handleHamburger} class="group text-white transition-all duration-300 ease-in-out md:ml-8" href="#games">
          
          <Link to="/">Games</Link>
          
        </a>
        <a onClick={handleHamburger} class="group text-white transition-all duration-300 ease-in-out md:ml-8" href="#ourteam">
          
          <Link to="/">Team</Link>          
        </a>
        <a onClick={handleHamburger} class="group text-white transition-all duration-300 ease-in-out md:ml-8" href="#contact">
          
          <Link to="/">Contact</Link>
          
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
