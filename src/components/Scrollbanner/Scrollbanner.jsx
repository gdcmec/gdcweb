import React from 'react'
import './Scrollbanner.css'

const Scrollbanner = () => {
	return (
		<div className="marquee fixed z-[1] top-[80px] text-[#fff]">
			<div>
				<div className='text-4xl'>Think it</div>
				<div className='text-4xl'>Build it</div>
				<div className='text-4xl'>Play it</div>
			</div>
		</div>
	)
}

export default Scrollbanner
