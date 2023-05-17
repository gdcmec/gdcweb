import React from 'react';
import logo from '../../assets/gdc.gif';

export default function LogoGif() {
  return (
    <div className="min-h-screen min-w-screen bg-black">
      <img
        src={logo}
        alt="Loading..."
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px]"
      />
    </div>
  );
}
