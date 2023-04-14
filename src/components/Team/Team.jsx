import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { councilMembers } from './data'
import { webTeamMembers } from './data'
import { committeeMembers } from './data'
import Section from './Section'

const Team = () => {

	const [teamMembers, setTeamMembers] = useState()
	const [executiveMembers, setExecutiveMembers] = useState()
	const [committeeMembers, setCommitteeMembers] = useState()
	const [webTeamMembers, setWebTeamMembers] = useState()
	const [loading, setLoading] = useState(true)
	
	
	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/cms/members/getSections`)

			let sections = res.data.sections
			let execom = sections.filter((section) => section.section === 'Executive committee')
			let commitee = sections.filter((section) => section.section != 'Executive committee' && section.section != 'Tech' && section.section != 'staff')
			let webTeam = sections.filter((section) => section.section === 'Tech')
			setTeamMembers(execom)
			setExecutiveMembers(execom)
			setCommitteeMembers(commitee)
			setWebTeamMembers(webTeam)
			
		}
		fetch().then(() => setLoading(false))

	}, [loading])

	
	return (
		!loading &&
		<div className='min-h-screen text-[#fff3d5] mb-24'>
			<h1 className='text-3xl text-center mb-3'>Team 2023</h1>
			<hr/>
			<div className='flex flex-col gap-4 items-center md:flex-row md:justify-center md:gap-44 pt-8'>
				<button onClick={() => setTeamMembers(executiveMembers) } className='text-black bg-[#fff3d5] w-[155px] hover:bg-black hover:text-[#fff3d5]'>EXECOMM</button>
				<button onClick={() => setTeamMembers(committeeMembers)} className='text-black bg-[#fff3d5] w-[155px] hover:bg-black hover:text-[#fff3d5]'>Committees</button>
				<button onClick={() => setTeamMembers(webTeamMembers)} className='text-black bg-[#fff3d5] w-[155px] hover:bg-black hover:text-[#fff3d5]'>Tech team</button>
			</div>
			<Section teamMembers={teamMembers}/>
		</div>
  )
}

export default Team
