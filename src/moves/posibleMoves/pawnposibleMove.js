import isOccupied from "../isOccupied";
function pawnposibleMove({
  initialX,
  initialY,
  thePieceOnActiveSquare,
  pieceColor,
}) {
  let posibleMoves = [];

  //  white pawn posible moves
  let oneForward = initialY + 1;
  let twoForward = initialY + 2;
  let oneRight = initialX + 1;
  let oneLeft = initialX - 1;
  let oppColor = "black";

  function PawnMovesFunction() {
    if (pieceColor === "black") {
      oneForward = initialY - 1;
      twoForward = initialY - 2;
      oneRight = initialX - 1;
      oneLeft = initialX + 1;
      oppColor = "white";
    }

    if (!isOccupied(initialX, oneForward)) {
      posibleMoves.push({ x: initialX, y: oneForward, capturing: false });
    }

    if (
      !isOccupied(initialX, oneForward) &&
      !isOccupied(initialX, twoForward) &&
      !thePieceOnActiveSquare.moved
    ) {
      posibleMoves.push({ x: initialX, y: twoForward, capturing: false });
    }
    if (isOccupied(oneRight, oneForward) && pieceColor !== oppColor) {
      posibleMoves.push({ x: oneRight, y: oneForward, capturing: true });
    }

    if (isOccupied(oneLeft, oneForward) && pieceColor !== oppColor) {
      posibleMoves.push({ x: oneLeft, y: oneForward, capturing: true });
    }
  }
  PawnMovesFunction();

  posibleMoves = posibleMoves.filter((obj) => {
    return obj.y >= 1 && obj.y <= 8 && obj.x >= 1 && obj.x <= 8;
  });
  posibleMoves = posibleMoves.filter((obj) => {
    return obj.y !== 2 && obj.y !== 7 && obj.moved !== true;
  });

  return posibleMoves;
}

export default pawnposibleMove;
