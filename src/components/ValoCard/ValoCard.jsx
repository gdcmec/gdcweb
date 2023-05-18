import React from 'react'

import './ValoCard.css'

const ValoCard = () => {
  return (
    <div className=" ">
      <div class="effect-card gaming-card">
        <div class="status-report">
          <p>Status Report</p>
        </div>
        <div class="card-content">
          <p class="player-name">
            {' '}
            <span>SukhOPGod</span>
          </p>
          <h2>THE SWISS ARMY KNIFE</h2>
          <p class="player-role">
            What
            <span> we do</span>
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
}

export default ValoCard