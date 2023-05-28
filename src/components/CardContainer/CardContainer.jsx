import React from 'react'
import ValoCard from '../ValoCard/ValoCard';

const CardContainer = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center">
      <div className="">
        <h1 className="text-3xl text-center font-semibold text-white">Events</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 content-center items-center gap-8 px-5 py-5 w-full">
        <ValoCard title={'Unity Workshop'} venue={'CCF '} date={'12/07/22'} />
        <ValoCard title={'Unity Workshop'} venue={'CCF '} date={'12/07/22'} />
        <ValoCard title={'Unity Workshop'} venue={'CCF '} date={'12/07/22'} />
      </div>
    </div>
  );
}

export default CardContainer