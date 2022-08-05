import React, { useContext, useState } from "react";
import ChessContext from "../context/chessContext";

import Piece from "./Piece.js";

function Pieces() {
  const { piecesData, Positions } = useContext(ChessContext);

  return (
    <>
      {piecesData.map((data, i) => {
        return <Piece PieceData={data} Positions={Positions} key={i}></Piece>;
      })}
    </>
  );
}

export default Pieces;
