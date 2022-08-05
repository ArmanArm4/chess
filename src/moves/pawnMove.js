import isOccupied from "./isOccupied";

function pawnMove({
  thePieceOnActiveSquare,
  thePieceOnSelectedSquare,
  piecesData,
  SquareId,
  ChangeTurnColor,
  deleteThePiece,
}) {
  let initialX = Number(thePieceOnActiveSquare.pos.toString().split("")[0]);
  let initialY = Number(thePieceOnActiveSquare.pos.toString().split("")[1]);

  let finalX = Number(SquareId.toString().split("")[0]);
  let finalY = Number(SquareId.toString().split("")[1]);

  let posibleMoves = [];

  //  white pawn posible moves
  if (thePieceOnActiveSquare.color == "white") {
    WhitePawnMoves();
  }
  function WhitePawnMoves() {
    if (!thePieceOnSelectedSquare) {
      posibleMoves.push({ x: initialX, y: initialY + 1, eating: false });
    }

    if (
      !thePieceOnSelectedSquare &&
      !isOccupied(finalX, finalY - 1) &&
      !thePieceOnActiveSquare.moved
    ) {
      posibleMoves.push({ x: initialX, y: initialY + 2, capturing: false });
    }
    if (
      thePieceOnSelectedSquare &&
      thePieceOnSelectedSquare.color === "black"
    ) {
      posibleMoves.push({ x: initialX + 1, y: initialY + 1, capturing: true });
      posibleMoves.push({ x: initialX - 1, y: initialY + 1, capturing: true });
    }
  }

  // black pawn posible moves
  if (thePieceOnActiveSquare.color == "black") {
    BlackPawnMoves();
  }
  function BlackPawnMoves() {
    if (!thePieceOnSelectedSquare) {
      posibleMoves.push({ x: initialX, y: initialY - 1, eating: false });
    }

    if (
      !thePieceOnSelectedSquare &&
      !isOccupied(finalX, finalY + 1) &&
      !thePieceOnActiveSquare.moved
    ) {
      posibleMoves.push({ x: initialX, y: initialY - 2, capturing: false });
    }
    if (
      thePieceOnSelectedSquare &&
      thePieceOnSelectedSquare.color === "white"
    ) {
      posibleMoves.push({ x: initialX + 1, y: initialY - 1, capturing: true });
      posibleMoves.push({ x: initialX - 1, y: initialY - 1, capturing: true });
    }
  }

  // looping through posible moves
  posibleMoves.forEach((posibleXY) => {
    ///move without capturing
    if (
      posibleXY.x === finalX &&
      posibleXY.y === finalY &&
      !posibleXY.capturing
    ) {
      thePieceOnActiveSquare.pos = SquareId;
      thePieceOnActiveSquare.moved = true;
      ChangeTurnColor();
      promotionsquare(finalY);
      return;
    }
    ///move and capture
    if (
      posibleXY.x === finalX &&
      posibleXY.y === finalY &&
      posibleXY.capturing
    ) {
      thePieceOnActiveSquare.pos = SquareId;
      thePieceOnActiveSquare.moved = true;
      ChangeTurnColor();
      deleteThePiece();
      promotionsquare(finalY);
      return;
    }
  });

  // checking for posible pawn promotion to queen
  function promotionsquare(finalY) {
    if (finalY == 1 || finalY == 8) {
      thePieceOnActiveSquare.type = "queenqa";
    }
  }
}

export default pawnMove;
