import React, { useState, useContext } from "react";
import "../css/square.css";
import ChessContext from "../context/chessContext.js";

function Square({ classname, SquareId }) {
  let SquarePos = "";
  let SquareIdY = SquareId.toString().charAt(0);

  // console.log(SquareIdY);
  // switch(SquareId) {
  //   case :
  //     // code block
  //     break;
  //   case y:
  //     // code block
  //     break;
  //   default:
  //     // code block
  // }

  const { activeSquare, setActiveSquare, piecePosition, Positions } =
    useContext(ChessContext);

  const activeSquareHandler = () => {
    setActiveSquare(SquareId);
    console.log(SquareId);
    piecePosition[0].pos = eval(`Positions.${"a_4"}`);
  };
  return (
    <div
      onClick={activeSquareHandler}
      className={`square  ${activeSquare === SquareId ? "active" : classname}`}
      // className={activeSquare ? "square active" : `square ${classname}`}
    ></div>
  );
}

export default Square;
