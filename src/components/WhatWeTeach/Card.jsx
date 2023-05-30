import React from 'react';

const Card = ({ index, item }) => {
  return (
    <section key={index} className="relative py-[50px] h-max">
      <div className="timeline-parent w-max h-max">
        <div className="timeline-content py-[35px] h-max">
          <div className="flex flex-col items-center h-max gap-3">
            <h2 className="text-primary text-xl font-semibold">{item.title}</h2>
            <p className="w-[300px] text-center text-gray-300">{item.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
