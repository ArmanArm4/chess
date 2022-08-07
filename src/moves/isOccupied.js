import piecesData from "../context/piecesData";

function isoccupied(x, y) {
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
