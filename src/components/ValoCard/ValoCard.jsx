import React from 'react';

import './ValoCard.css';

const ValoCard = ({ event }) => {
  let date = new Date(event?.date);
  date = date.toLocaleDateString('en-IN');
  return (
    <div className=" ">
      <div class="effect-card gaming-card">
        <div class="status-report">
          <p>{date}</p>
        </div>
        <div class="card-content">
          <p class="player-name">
            {' '}
            <span>GDCMEC</span>
          </p>
          <h2>{event?.title}</h2>
          <p class="player-role">
            {event?.venue}
            <span>Hall</span>
          </p>
        </div>
        <div class="card-footer">
          <p className='font-black text-xl tracking-wide text-black'>{date}</p>
          <p>
            We host a variety of events, including seminars, game jams, competitions, and guest lectures to promote
            learning and creativity.The club also provides chances to promote and publish games, connect with other game
            makers, and learn useful industry insights
          </p>
          <button>Register</button>
        </div>
        <div class="background-image">
          <img src="https://rare-gallery.com/thumbnail/394521-valorant-game-agents-hero-4k-pc-wallpaper.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ValoCard;
