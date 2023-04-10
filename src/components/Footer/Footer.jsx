import React from 'react';

import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div id='contact' className="text-white flex flex-col justify-center gap-5 md:justify-between items-start pt-4 h-[200px] border-t-[1px] md:flex-row md:h-[90px] md:items-center">
      <div className="ml-4">
        <p className="text-base">Get in touch</p>
        <p className="text-xl">gdcmec@mec.ac.in</p>
      </div>
      <div className="flex ml-5">
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
};

export default Footer;
