import isOccupied from "../isOccupied";
function knightPosibleMove({ initialX, initialY, pieceColor }) {
  // knight posible moves

  let posibleMoves = [];
  const posibleMovesFunction = (x, y) => {
    if (!isOccupied(x, y)) {
      posibleMoves.push({ x: x, y: y, capturing: false });
    }
    if (isOccupied(x, y) && isOccupied(x, y) !== pieceColor) {
      posibleMoves.push({ x: x, y: y, capturing: true });
    }
  };
  posibleMovesFunction(initialX + 1, initialY + 2);
  posibleMovesFunction(initialX - 1, initialY + 2);
  posibleMovesFunction(initialX - 2, initialY + 1);
  posibleMovesFunction(initialX - 2, initialY - 1);
  posibleMovesFunction(initialX + 1, initialY - 2);
  posibleMovesFunction(initialX - 1, initialY - 2);
  posibleMovesFunction(initialX + 2, initialY + 1);
  posibleMovesFunction(initialX + 2, initialY - 1);

  posibleMoves = posibleMoves.filter((obj) => {
    return obj.y >= 1 && obj.y <= 8 && obj.x >= 1 && obj.x <= 8;
  });
  return posibleMoves;
}

export default knightPosibleMove;
