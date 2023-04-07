import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';
import { useState,useEffect } from 'react';

const Navbar = () => {
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

  const navbarClasses = scrollPos > 50 ? 'nav bg-black' : 'nav';
  return (
    <>
      <div
        className={`hidden md:flex fixed w-screen items-center  border-slate-800 py-2 px-6 align-middle z-[1] ${navbarClasses}`}
      >
        <img src={logo} width="70px" height="70px" alt="GDC" />
        <nav className="hidden  md:flex gap-16 flex-1 md:justify-end text-white text-[20px] mr-[10%]">
          <a class="group text-white transition-all duration-300 ease-in-out" href="#">
            <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </span>
          </a>
          <a class="group text-white transition-all duration-300 ease-in-out" href="#">
            <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </span>
          </a>
          <a class="group text-white transition-all duration-300 ease-in-out" href="#">
            <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Events
            </span>
          </a>
          <a class="group text-white transition-all duration-300 ease-in-out" href="#">
            <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
            </span>
          </a>
        </nav>
      </div>
      <nav className=" md:hidden block  ">
        <div class="sticky z-40 navbar ">
          <div class="container nav-container fixed">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines z-50 relative">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <div class="logo">
              <img src={logo} width="60px" height="60px" alt="GDC" />
            </div>
            <div class=" menu-items">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
