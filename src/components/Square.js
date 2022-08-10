import React, { useState, useContext } from "react";
import "../css/square.css";
import ChessContext from "../context/chessContext.js";
import Moves from "../moves/Moves";

function Square({ classname, SquareId }) {
  const {
    activeSquare,
    setActiveSquare,
    piecesData,
    Positions,
    turnColor,
    setTurnColor,
    setIsMate,
  } = useContext(ChessContext);

  const activeSquareHandler = () => {
    //set active square
    if (activeSquare === SquareId) {
      setActiveSquare(false);

      return;
    }

    setActiveSquare(SquareId);

    //find if there is a piece on active square
    let thePieceOnActiveSquare = undefined;
    let idOfthePieceOnActiveSquare = piecesData.findIndex(
      (pieceData) => pieceData.pos == activeSquare
    );

    if (idOfthePieceOnActiveSquare === -1) {
      idOfthePieceOnActiveSquare = undefined;
      thePieceOnActiveSquare = undefined;
    }
    if (idOfthePieceOnActiveSquare !== -1) {
      thePieceOnActiveSquare = piecesData[idOfthePieceOnActiveSquare];
    }

    //find if there is a piece on selected square

    let thePieceOnSelectedSquare = undefined;
    let idOfthePieceOnSelectedSquare = piecesData.findIndex(
      (pieceData) => pieceData.pos == SquareId
    );
    if (idOfthePieceOnSelectedSquare === -1) {
      idOfthePieceOnSelectedSquare = undefined;
      thePieceOnSelectedSquare = undefined;
    }
    if (idOfthePieceOnSelectedSquare !== -1) {
      thePieceOnSelectedSquare = piecesData[idOfthePieceOnSelectedSquare];
    }
    // if there is not a piece on active square then selectedPieceIndex = -1

    if (
      idOfthePieceOnActiveSquare !== undefined &&
      piecesData[idOfthePieceOnActiveSquare].color === turnColor
    ) {
      Moves(
        thePieceOnActiveSquare,
        thePieceOnSelectedSquare,
        piecesData,
        SquareId,
        turnColor,
        setTurnColor,
        setIsMate
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
