import piecesData from "../context/piecesData";

function isoccupied(x, y) {
  let checkThitSquare = `${x}${y}`;
  let Isoccupied = false;

  piecesData.forEach((pieceData) => {
    if (pieceData.pos == checkThitSquare) {
      Isoccupied = true;
    }
  });

  return Isoccupied;
}
export default isoccupied;
