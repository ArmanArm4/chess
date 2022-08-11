import React, { useState } from "react";

function Point({ piecesData, color }) {
  let points = 0;

  piecesData.forEach((piece) => {
    if (piece.eaten === true) return;
    if (piece.color === color) {
      points += piece.points;
      return;
    }
    points -= piece.points;
  });

  return (
    <div className="points">
      <p>{points}</p>
    </div>
  );
}

export default Point;
