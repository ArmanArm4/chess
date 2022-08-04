import React, { useState, useContext } from "react";
import "../css/square.css";
import ChessContext from "../context/chessContext.js";
import Moves from "../moves/Moves";

function Square({ classname, SquareId }) {
  const { activeSquare, setActiveSquare, piecesData, Positions } =
    useContext(ChessContext);

  const activeSquareHandler = () => {
    //set active square
    if (activeSquare === SquareId) {
      setActiveSquare(false);
      return;
    }

    setActiveSquare(SquareId);

    //find if there is a piece on active square

    let thePieceOnActiveSquare = piecesData.findIndex(
      (pieceData) => pieceData.pos == activeSquare
    );
    if (thePieceOnActiveSquare === -1) {
      thePieceOnActiveSquare = undefined;
    }

    //find if there is a piece on selected square

    let thePieceOnSelectedSquare = piecesData.findIndex(
      (pieceData) => pieceData.pos == SquareId
    );
    if (thePieceOnSelectedSquare === -1) {
      thePieceOnSelectedSquare = undefined;
    }

    // if there is not a piece on active square then selectedPieceIndex = -1

    if (thePieceOnActiveSquare !== undefined) {
      Moves(
        thePieceOnActiveSquare,
        thePieceOnSelectedSquare,
        piecesData,
        SquareId
      );
      setActiveSquare(false);
    }
  };
  return (
    <div
      onClick={activeSquareHandler}
      className={`square  ${activeSquare === SquareId ? "active" : classname}`}
    ></div>
  );
}

export default Square;
