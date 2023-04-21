import React from 'react';

import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      id="contact"
      className="font-bold text-white flex flex-col md:flex-row justify-center items-center md:items-center gap-10 md:gap-5 md:justify-between p-4 w-full border-t-[1px]  md:h-auto"
    >
      <div className="w-full flex flex-col items-center justify-start md:items-start gap-2">
        <p className="text-base">Get in touch</p>
        <p className="text-xl">gdcmec@mec.ac.in</p>
        <div className="text-black bg-[#fff3d5] hover:bg-black hover:text-[#fff3d5] px-3">
          <Link to="/team">Our Team</Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-8">
        <FaFacebookSquare size={25} />
        <FaLinkedin size={25} />
        <FaTwitter size={25} />
        <FaInstagram size={25} />
      </div>
      <div className="w-full flex flex-row md:flex-col justify-center md:justify-end md:items-end">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="true" className="w-[40px]" />
          <p className="text-sm">GDC MEC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
