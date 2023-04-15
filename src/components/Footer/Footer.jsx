import React from 'react';

import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div id='contact' className="font-bold text-white flex flex-col justify-center gap-5 md:justify-between items-start pt-4 h-[200px] border-t-[1px] md:flex-row md:h-[110px] md:py-1 md:items-center">
      <div className="ml-4">
        <p className="text-base">Get in touch</p>
        <p className="text-xl mb-2">gdcmec@mec.ac.in</p>
        <a href="" className='text-black bg-[#fff3d5] hover:bg-black hover:text-[#fff3d5] px-3'>Our Team</a>
      </div>
      <div className="flex pr-[35px]">
        <FaFacebookSquare size={25} style={{ marginRight: '2rem' }} />
        <FaLinkedin size={25} style={{ marginRight: '2rem' }} />
        <FaTwitter size={25} style={{ marginRight: '1.8rem' }} />
        <FaInstagram size={25} style={{ marginRight: '2rem' }} />
      </div>
      <div className="ml-3 md:mr-4 flex flex-row items-center gap-1 md:flex-col">
        <img src={logo} alt="true" className="w-[40px]" />
        <p className="text-sm">GDC CLUB,MEC</p>
      </div>
    </div>
  );
}

export default Footer;