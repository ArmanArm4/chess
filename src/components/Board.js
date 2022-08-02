import React from "react";
import "../css/board.css";
import Squares from "../components/Squares.js";

function Board() {
  return (
    <div className="board">
      <Squares></Squares>
    </div>
  );
}

export default Board;
