import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css'

const Navbar = () => {
  return (
  <>
    <div className="hidden md:flex fixed w-screen items-center border-b border-slate-800 py-2 px-6 align-middle z-[1] bg-black">
      <img src={logo} width="70px" height="70px" alt="GDC" />
      <nav className="hidden  md:flex flex-1 md:justify-end text-[#FFFDD4] text-[20px] mr-[20%]">
        <span className="mx-4">Home</span>
        <span className="mx-4">Events</span>
        <span className="mx-4">About us</span>
      </nav>
    </div>
     <nav className='md:hidden block'>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            <img src={logo} width="70px" height="70px" alt="GDC" />
          </div>
          <div class="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">About</a></li>
          
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
