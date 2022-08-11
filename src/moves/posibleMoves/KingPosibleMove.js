import isOccupied from "../isOccupied";
function KingPosibleMove({ initialX, initialY, pieceColor, piecesData }) {
  let king = piecesData.filter(
    (p) => p.type === "king" && pieceColor === p.color
  )[0];

  const kingIsMoved = king.moved;

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

  //Castling white
  if (
    !isOccupied(6, 1, piecesData) &&
    !isOccupied(7, 1, piecesData) &&
    pieceColor == "white" &&
    !kingIsMoved
  ) {
    console.log(isOccupied(6, 1, piecesData));
    posibleMoves.push({
      x: 7,
      y: 1,
      capturing: false,
    });
  }
  if (
    !isOccupied(2, 1, piecesData) &&
    !isOccupied(3, 1, piecesData) &&
    !isOccupied(4, 1, piecesData) &&
    pieceColor == "white" &&
    !kingIsMoved
  ) {
    console.log(isOccupied(6, 1, piecesData));
    posibleMoves.push({
      x: 3,
      y: 1,
      capturing: false,
    });
  }
  //Castling white
  if (
    !isOccupied(6, 8, piecesData) &&
    !isOccupied(7, 8, piecesData) &&
    pieceColor == "black" &&
    !kingIsMoved
  ) {
    console.log(isOccupied(6, 1, piecesData));
    posibleMoves.push({
      x: 7,
      y: 8,
      capturing: false,
    });
  }
  if (
    !isOccupied(2, 8, piecesData) &&
    !isOccupied(3, 8, piecesData) &&
    !isOccupied(4, 8, piecesData) &&
    pieceColor == "black" &&
    !kingIsMoved
  ) {
    console.log(isOccupied(6, 1, piecesData));
    posibleMoves.push({
      x: 3,
      y: 8,
      capturing: false,
    });
  }
  posibleMoves = posibleMoves.filter((obj) => {
    return obj.y >= 1 && obj.y <= 8 && obj.x >= 1 && obj.x <= 8;
  });
  return posibleMoves;
}

export default KingPosibleMove;
