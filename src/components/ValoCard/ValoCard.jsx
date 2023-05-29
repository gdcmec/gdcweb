import React from 'react';

import './ValoCard.css';

const ValoCard = ({ date, title, venue }) => {
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
          <h2>{title}</h2>
          <p class="player-role">
            {venue}
            <span>Hall</span>
          </p>
        </div>
        <div class="card-footer">
          <p>
            {' '}
            We host a variety of events, including seminars, game jams, competitions, and guest lectures to promote
            learning and creativity.The club also provides chances to promote and publish games, connect with other game
            makers, and learn useful industry insights
          </p>
        </div>
        <div class="background-image">
          <img src="https://rare-gallery.com/thumbnail/394521-valorant-game-agents-hero-4k-pc-wallpaper.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ValoCard;
