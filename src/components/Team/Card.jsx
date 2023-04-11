import React from 'react'

const Card = ({ name , position , imgURL}) => {
  return (
    <div className='md:w-[280px] md:h-max w-[180px] h-max text-white border-2 border-[#fff3d5] overflow-hidden'>
      <div className='md:w-[280px] md:h-[280px] w-[180px] h-[180px] overflow-hidden'>
        <img src={imgURL} alt="true" className='w-[180px] h-[180px] md:w-full md:h-full hover:scale-105 duration-300' />
      </div>
      <div className='py-3 text-center border-t-2 border-[#fff3d5]'>
        <h1>{ name }</h1>
        <h2>{ position }</h2>
      </div>
    </div>
  )
}

export default Card