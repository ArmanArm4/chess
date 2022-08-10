function isoccupied(x, y, piecesData) {
  let checkThisSquare = `${x}${y}`;
  let Isoccupied = false;

  piecesData.forEach((pieceData) => {
    if (pieceData.pos == checkThisSquare) {
      Isoccupied = pieceData.color;
    }
  });

  return Isoccupied;
}
export default isoccupied;
