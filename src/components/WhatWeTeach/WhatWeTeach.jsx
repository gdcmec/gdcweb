import React from 'react'
import Card from './Card'

import './Style.css'

const WhatWeTeach = () => {
	return (
		<div className='h-max'>
			<div>
				<h1 className='text-[#fff3d5] text-center text-4xl'>What we teach</h1>
				<hr className='mt-3'/>
			</div>
			<div className='timeline text-white h-[700px] my-16 flex flex-col gap-[180px] pt-16'>
				<Card position={"right"}/>
				<Card position={"left"}/>
			</div>
		</div>
	)
}

export default WhatWeTeach
