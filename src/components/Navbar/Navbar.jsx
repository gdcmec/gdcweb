import React from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
      
          <div className="flex fixed w-screen md:items-center border-b border-slate-800 py-2 px-6 align-middle bg-black">
              <img src={logo} alt="GDC"/>
              <nav className = "flex flex-1 justify-between text-[#FFFDD4] text-[20px] mx-auto">
                    
                      <span className = "ml-60 flex text-center">Home</span>
                      <div className="justify-between flex mr-[40rem] px-4">
                      <span className = "mx-8">Events</span>
                      <span className = "ml-8">About us</span>
                      </div>
                  
              </nav>


          </div>
  )
}

export default Navbar
