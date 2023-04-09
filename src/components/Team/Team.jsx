import React,{ useState } from 'react'
import { councilMembers } from './data'
import { webTeamMembers } from './data'
import { committeeMembers } from './data'
import Section from './Section'

const Team = () => {

	const [teamMembers, setTeamMembers] = useState(councilMembers)


  return (
    <div className='min-h-screen text-[#fff3d5] mb-24'>
			<h1 className='text-3xl text-center mb-3'>Team 2023</h1>
			<hr/>
			<div className='flex flex-col gap-4 items-center md:flex-row md:justify-center md:gap-44 pt-8'>
				<button onClick={() => setTeamMembers(councilMembers) } className='text-black bg-[#fff3d5] w-[155px] hover:bg-black hover:text-[#fff3d5]'>Council</button>
				<button onClick={() => setTeamMembers(committeeMembers)} className='text-black bg-[#fff3d5] w-[155px] hover:bg-black hover:text-[#fff3d5]'>Committees</button>
				<button onClick={() => setTeamMembers(webTeamMembers)} className='text-black bg-[#fff3d5] w-[155px] hover:bg-black hover:text-[#fff3d5]'>Web team</button>
			</div>
			<Section teamMembers={teamMembers}/>
		</div>
  )
}

export default Team
