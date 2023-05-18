import React from 'react'
import ValoCard from '../ValoCard/ValoCard';

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 content-center items-center px-5 py-5 w-full">
      <ValoCard />
      <ValoCard />
      <ValoCard />
    </div>
  );
}

export default CardContainer