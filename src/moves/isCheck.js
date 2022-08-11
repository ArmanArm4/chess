import allMoves from "./posibleMoves/allMoves";

function isCheck({ piecesData, pieceColor }) {
  const attacingKing = piecesData.filter((pieceData) => {
    return pieceData.type === "king" && pieceData.color == pieceColor;
  })[0];

  let oppColor = "black";
  if (pieceColor === "black") {
    oppColor = "white";
  }
  if (pieceColor === "white") {
    oppColor = "black";
  }

  const allMovesData = allMoves({ piecesData, pieceColor: oppColor });

  let Checks = allMovesData.filter(
    (moves) => `${moves.x}${moves.y}` == attacingKing.pos
  );

  return Checks.length !== 0;
}

export default isCheck;
