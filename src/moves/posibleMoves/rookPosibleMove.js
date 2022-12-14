import isOccupied from "../isOccupied";
function rookPosibleMove({ initialX, initialY, pieceColor, piecesData }) {
  let posibleMoves = [];

  // rook posible moves

  //move to top
  for (let i = 1; i < 7; i++) {
    if (!isOccupied(initialX, initialY + i, piecesData)) {
      posibleMoves.push({ x: initialX, y: initialY + i, capturing: false });
      continue;
    }
    if (
      isOccupied(initialX, initialY + i, piecesData) &&
      isOccupied(initialX, initialY + i, piecesData) !== pieceColor
    ) {
      posibleMoves.push({ x: initialX, y: initialY + i, capturing: true });
      break;
    }
    break;
  }
  //move to bottom
  for (let i = 1; i < 7; i++) {
    if (!isOccupied(initialX, initialY - i, piecesData)) {
      posibleMoves.push({ x: initialX, y: initialY - i, capturing: false });
      continue;
    }
    if (
      isOccupied(initialX, initialY - i, piecesData) &&
      isOccupied(initialX, initialY - i, piecesData) !== pieceColor
    ) {
      posibleMoves.push({ x: initialX, y: initialY - i, capturing: true });
      break;
    }
    break;
  }
  //move to right
  for (let i = 1; i < 7; i++) {
    if (!isOccupied(initialX + i, initialY, piecesData)) {
      posibleMoves.push({ x: initialX + i, y: initialY, capturing: false });
      continue;
    }
    if (
      isOccupied(initialX + i, initialY, piecesData) &&
      isOccupied(initialX + i, initialY, piecesData) !== pieceColor
    ) {
      posibleMoves.push({ x: initialX + i, y: initialY, capturing: true });
      break;
    }
    break;
  }
  //move to left
  for (let i = 1; i < 7; i++) {
    if (!isOccupied(initialX - i, initialY, piecesData)) {
      posibleMoves.push({ x: initialX - i, y: initialY, capturing: false });
      continue;
    }
    if (
      isOccupied(initialX - i, initialY, piecesData) &&
      isOccupied(initialX - i, initialY, piecesData) !== pieceColor
    ) {
      posibleMoves.push({ x: initialX - i, y: initialY, capturing: true });
      break;
    }
    break;
  }
  posibleMoves = posibleMoves.filter((obj) => {
    return obj.y >= 1 && obj.y <= 8 && obj.x >= 1 && obj.x <= 8;
  });

  return posibleMoves;
}

export default rookPosibleMove;
