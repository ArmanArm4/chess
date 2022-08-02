import React from "react";
import "../css/player.css";

function Player() {
  return (
    <div className="player">
      <div className="playerInfo">
        <div className="profile_image"></div>
        <div className="nameAndPoints">
          <p className="name">Poseidon</p>
          <div className="points">
            <p>-4</p>
          </div>
        </div>
      </div>
      <p className="playerTime">12:11</p>
    </div>
  );
}

export default Player;
