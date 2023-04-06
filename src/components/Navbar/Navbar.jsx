import React from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex fixed w-screen items-center border-b border-slate-800 py-2 px-6 align-middle z-[1] bg-black nav">
        <img src={logo} width="70px" height="70px" alt="GDC" />
        <nav className="hidden  md:flex flex-1 md:justify-end text-[#FFFDD4] text-[20px] mr-[20%]">
          <span className="mx-4">Home</span>
          <span className="mx-4">Events</span>
          <span className="mx-4">About us</span>
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
