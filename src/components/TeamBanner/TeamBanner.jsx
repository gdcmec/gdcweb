import React from 'react';

const TeamBanner = () => {
  return (
    <div className="w-100   bg-[#fff3d5] flex flex-col items-center justify-center gap-5 p-5 text-3xl text-center ">
      <p>
        <span className="font-semibold ">"Alone we can do so little; together we can do so much."</span> - Helen Keller
      </p>
      {/* <p>
        Behind every great project is a great team. Get to know the faces behind the work by clicking the button below
        and visiting our Meet the Team page.
      </p> */}
      <button className="underline  text-black px-4 py-2 rounded-md ml-4">Meet The Team</button>
    </div>
  );
};

export default TeamBanner;
