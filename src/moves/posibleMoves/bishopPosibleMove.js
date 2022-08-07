import isOccupied from "../isOccupied";
function bishopPosibleMove({ initialX, initialY, pieceColor }) {
  let posibleMoves = [];
  //move to right up
  for (let i = 1; i < 7; i++) {
    if (!isOccupied(initialX + i, initialY + i)) {
      posibleMoves.push({ x: initialX + i, y: initialY + i, capturing: false });
      continue;
    }
    if (
      isOccupied(initialX + i, initialY + i) &&
      isOccupied(initialX + i, initialY + i) !== pieceColor
    ) {
      posibleMoves.push({ x: initialX + i, y: initialY + i, capturing: true });
      break;
    }
    break;
  }
  //move to right down
  for (let i = 1; i < 7; i++) {
    if (!isOccupied(initialX + i, initialY - i)) {
      posibleMoves.push({ x: initialX + i, y: initialY - i, capturing: false });
      continue;
    }
    if (
      isOccupied(initialX + i, initialY - i) &&
      isOccupied(initialX + i, initialY - i) !== pieceColor
    ) {
      posibleMoves.push({ x: initialX + i, y: initialY - i, capturing: true });
      break;
    }
    break;
  }
  //move to left up
  for (let i = 1; i < 7; i++) {
    if (!isOccupied(initialX - i, initialY + i)) {
      posibleMoves.push({ x: initialX - i, y: initialY + i, capturing: false });
      continue;
    }
    if (
      isOccupied(initialX - i, initialY + i) &&
      isOccupied(initialX - i, initialY + i) !== pieceColor
    ) {
      posibleMoves.push({ x: initialX - i, y: initialY + i, capturing: true });
      break;
    }
    break;
  }
  //move to right down
  for (let i = 1; i < 7; i++) {
    if (!isOccupied(initialX - i, initialY - i)) {
      posibleMoves.push({ x: initialX - i, y: initialY - i, capturing: false });
      continue;
    }
    if (
      isOccupied(initialX - i, initialY - i) &&
      isOccupied(initialX - i, initialY - i) !== pieceColor
    ) {
      posibleMoves.push({ x: initialX - i, y: initialY - i, capturing: true });
      break;
    }
    break;
  }
  posibleMoves = posibleMoves.filter((obj) => {
    return obj.y >= 1 && obj.y <= 8 && obj.x >= 1 && obj.x <= 8;
  });
  return posibleMoves;
}

export default bishopPosibleMove;
