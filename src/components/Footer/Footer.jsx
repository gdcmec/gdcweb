import React from 'react'

import { FaFacebookSquare, FaLinkedin, FaTwitter , FaInstagram , FaGoogle } from 'react-icons/fa'

import logo from '../../assets/logo.svg';

const Footer = () => {
	return (
		<div className='text-white flex justify-between items-center h-[90px] border-t-[1px]'>
			<div className='ml-4'>
				<p className='text-base'>Get in touch</p>
				<p className='text-xl'>gdcmec@mec.ac.in</p>
			</div>
			<div className='flex pr-8'>
				<FaFacebookSquare size={ 25 } style={{marginRight:"2rem"}}/>
				<FaLinkedin size={ 25 } style={{marginRight:"2rem"}}/>
				<FaTwitter size={ 25 } style={{marginRight:"1.8rem"}}/>
				<FaInstagram size={ 25 } style={{marginRight:"2rem"}}/>
				<FaGoogle size={ 23 } style={{marginRight:"2rem"}}/>
			</div>
			<div className='mr-4 flex flex-col items-center gap-1'>
				<img src={ logo } alt="true" className='w-[40px]'/>
				<p className='text-sm'>GDC CLUB,MEC</p>
			</div>
		</div>
	)
}

export default Footer
