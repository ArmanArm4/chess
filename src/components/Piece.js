import React from "react";
import "../css/piece.css";

function Piece({ Positions, PieceData }) {
  return (
    <>
      {!PieceData.eaten && (
        <div
          className={`piece ${PieceData.type}${PieceData.color}`}
          style={{
            transform: `translateY(${Positions[PieceData.pos].y}%) translateX(${
              Positions[PieceData.pos].x
            }%)`,
          }}
        ></div>
      )}
    </>
  );
}

export default Piece;
