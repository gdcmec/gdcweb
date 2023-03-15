import React, { forwardRef } from 'react'
import logo from '../../assets/logo.svg'

const Navbar = ()=> {
  return (
      
          <div id="navbar" className="flex fixed w-screen items-center border-b border-slate-800 py-2 px-6 align-middle z-[1] bg-black h-[80px]">
              <img src={logo} width="70px" height="70px" alt="GDC"/>
              <nav className = "hidden  md:flex flex-1 md:justify-end text-[#FFFDD4] text-[20px] mr-[25rem]">

                      <span className = "mx-4">Home</span>
                      <span className = "mx-4">Events</span>
                      <span className = "mx-4">About us</span>

                  
              </nav>


          </div>
  )
}

export default Navbar