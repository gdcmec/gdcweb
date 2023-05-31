import React from 'react';

const Card = ({ name, position, imgURL }) => {
  return (
    <div className="md:w-[280px] relative md:h-max w-[180px] h-max text-white overflow-hidden">
      <div className="md:w-[280px] md:h-[280px] w-[180px] h-[180px] overflow-hidden">
        <img
          src={imgURL}
          alt="true"
          className="w-[180px] h-[180px] md:w-full md:h-full duration-300 object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 pl-4 text-white bg-black bg-opacity-40 backdrop-blur-lg py-3">
        <h1 className="text-lg">{name}</h1>
        <h2 className="text-sm text-green-300">{position}</h2>
      </div>
    </div>
  );
};

export default Card;
