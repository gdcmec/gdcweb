import React from 'react';

const EventCard = ({ event, index, handleClick }) => {
  return (
    <div
      className="hover:scale-105 h-96 w-auto md:w-96 shrink-0 flex flex-col justify-between items-center bg-[url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg')] bg-center bg-cover drop-shadow-lg"
      onClick={() => {
        handleClick(index);
      }}
      key={index}
    >
      <div className="absolute bg-black opacity-50 h-full w-full"></div>
      <div className="z-10 h-full w-full flex flex-col justify-center items-center gap-4 text-center">
        <h3 className="text-3xl">{event.title}</h3>
        <p>{event.date}</p>
        <p className="">{event.location}</p>
      </div>
      <div className="z-10 p-4 max-h-[25%] w-full flex justify-center items-center text-center outline outline-[#FFF3D4] rounded-sm bg-black">
        <p className="w-full h-full text-ellipsis overflow-hidden">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
