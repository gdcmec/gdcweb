import React from 'react'
import Card from './Card'

const Grid = ({ teamMembers }) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-14'>
      {teamMembers.map((value)=>{
        return <Card key={value.id} name={value.name} position={value.position} imgURL={value.imgURL}/>
      })}
    </div>
  )
}

export default Grid