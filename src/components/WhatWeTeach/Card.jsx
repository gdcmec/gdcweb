
import React from 'react'

const Card = ({ position }) => {
	return (
		<div className='relative py-[50px] py-16 h-max'>
			<div className='timeline-parent w-max h-max'>
				<div className={ `timeline-content ${position} py-[35px] h-max` }>
					<div className='flex flex-col items-center h-max gap-3'>
						<h2 className='text-[#fff3d5] text-xl'>Unity</h2>
						<p className='w-[300px] text-center'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card