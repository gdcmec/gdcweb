import React from 'react';

const EventCard = ({ event, index, handleClick }) => {
  return (
    <div
      className={
        'h-96 w-64 my-10  md:my-20 flex flex-col justify-between items-center' +
        (index % 2 == 0 ? ' md:-translate-y-10' : ' md:translate-y-10')
      }
      onClick={() => {
        handleClick(index);
      }}
      key={index}
    >
      <div className="absolute -translate-y-[50%] py-2 px-8 flex justify-center items-center outline outline-[#FFF3D4] bg-black">
        <p>{event.date}</p>
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center outline outline-[#FFF3D4]">
        <h3 className="text-2xl uppercase text-center">{event.title}</h3>
        <p className="text-center">{event.location}</p>
      </div>
      <div className="w-full h-3/12 flex justify-center items-center outline outline-[#FFF3D4]">
        <p className="m-4 text-center">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
