import isOccupied from "../isOccupied";
function KingPosibleMove({
  initialX,
  initialY,
  pieceColor,
  thePieceOnSelectedSquare,
  piecesData,
}) {
  let posibleMoves = [];

  // king posible moves

  //move to right up
  if (!isOccupied(initialX + 1, initialY + 1, piecesData)) {
    posibleMoves.push({ x: initialX + 1, y: initialY + 1, capturing: false });
  }
  if (
    isOccupied(initialX + 1, initialY + 1, piecesData) &&
    isOccupied(initialX + 1, initialY + 1, piecesData) !== pieceColor
  ) {
    posibleMoves.push({
      x: initialX + 1,
      y: initialY + 1,
      capturing: true,
    });
  }
  //move to right down
  if (!isOccupied(initialX + 1, initialY - 1, piecesData)) {
    posibleMoves.push({ x: initialX + 1, y: initialY - 1, capturing: false });
  }
  if (
    isOccupied(initialX + 1, initialY - 1, piecesData) &&
    isOccupied(initialX + 1, initialY - 1, piecesData) !== pieceColor
  ) {
    posibleMoves.push({
      x: initialX + 1,
      y: initialY - 1,
      capturing: true,
    });
  }
  //move to left up
  if (!isOccupied(initialX - 1, initialY + 1, piecesData)) {
    posibleMoves.push({ x: initialX - 1, y: initialY + 1, capturing: false });
  }
  if (
    isOccupied(initialX - 1, initialY + 1, piecesData) &&
    isOccupied(initialX - 1, initialY + 1, piecesData) !== pieceColor
  ) {
    posibleMoves.push({
      x: initialX - 1,
      y: initialY + 1,
      capturing: true,
    });
  }
  //move to left down
  if (!isOccupied(initialX - 1, initialY - 1, piecesData)) {
    posibleMoves.push({ x: initialX - 1, y: initialY - 1, capturing: false });
  }
  if (
    isOccupied(initialX - 1, initialY - 1, piecesData) &&
    isOccupied(initialX - 1, initialY - 1, piecesData) !== pieceColor
  ) {
    posibleMoves.push({
      x: initialX - 1,
      y: initialY - 1,
      capturing: true,
    });
  }
  //move to top
  if (!isOccupied(initialX, initialY + 1, piecesData)) {
    posibleMoves.push({ x: initialX, y: initialY + 1, capturing: false });
  }
  if (
    isOccupied(initialX, initialY + 1, piecesData) &&
    isOccupied(initialX, initialY + 1, piecesData) !== pieceColor
  ) {
    posibleMoves.push({
      x: initialX,
      y: initialY + 1,
      capturing: true,
    });
  }
  //move to bottom
  if (!isOccupied(initialX, initialY - 1, piecesData)) {
    posibleMoves.push({ x: initialX, y: initialY - 1, capturing: false });
  }
  if (
    isOccupied(initialX, initialY - 1, piecesData) &&
    isOccupied(initialX, initialY - 1, piecesData) !== pieceColor
  ) {
    posibleMoves.push({
      x: initialX,
      y: initialY - 1,
      capturing: true,
    });
  }
  //move to right
  if (!isOccupied(initialX + 1, initialY, piecesData)) {
    posibleMoves.push({ x: initialX + 1, y: initialY, capturing: false });
  }
  if (
    isOccupied(initialX + 1, initialY, piecesData) &&
    isOccupied(initialX + 1, initialY, piecesData) !== pieceColor
  ) {
    posibleMoves.push({
      x: initialX + 1,
      y: initialY,
      capturing: true,
    });
  }
  //move to left
  if (!isOccupied(initialX - 1, initialY, piecesData)) {
    posibleMoves.push({ x: initialX - 1, y: initialY, capturing: false });
  }
  if (
    isOccupied(initialX - 1, initialY, piecesData) &&
    isOccupied(initialX - 1, initialY, piecesData) !== pieceColor
  ) {
    posibleMoves.push({
      x: initialX - 1,
      y: initialY,
      capturing: true,
    });
  }
  posibleMoves = posibleMoves.filter((obj) => {
    return obj.y >= 1 && obj.y <= 8 && obj.x >= 1 && obj.x <= 8;
  });
  return posibleMoves;
}

export default KingPosibleMove;
