import React from 'react'
import ValoCard from '../ValoCard/ValoCard';

const CardContainer = () => {
  return (
    <div className='grid grid-cols-3  py-5 w-full items-center '>
        <ValoCard/>
        <ValoCard/>
        <ValoCard/>
    </div>
  )
}

export default CardContainer