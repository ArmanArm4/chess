import allMoves from "./posibleMoves/allMoves";

function isCheckMate({ piecesData, pieceColor }) {
  const attacingKing = piecesData.filter((pieceData) => {
    return pieceData.type === "king" && pieceData.color == pieceColor;
  })[0];

  let oppColor = "black";
  if (pieceColor === "black") {
    oppColor = "white";
  }

  const allMovesData = allMoves({ piecesData, pieceColor: oppColor });
  //   console.log(allMovesData);

  const Checks = allMovesData.filter(
    (moves) => `${moves.x}${moves.y}` == attacingKing.pos
  );

  return Checks.length !== 0;
}

export default isCheckMate;
