import React, { useState } from "react";
import Point from "./Point";

import "../css/player.css";

function Player({ piecesData, color }) {
  return (
    <div className="player">
      <div className="playerInfo">
        <div className={`profile_image ${color}`}></div>
        <div className="nameAndPoints">
          <p className="name">
            {color === "white" ? "Poseidon" : "Hephaestus"}
          </p>
          <Point color={color} piecesData={piecesData}></Point>
        </div>
      </div>
    </div>
  );
}

export default Player;
