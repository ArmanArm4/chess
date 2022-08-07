function makeAMove({
  SquareId,
  thePieceOnActiveSquare,
  thePieceOnSelectedSquare,
  posibleMoves,
  ChangeTurnColor,
  deleteThePiece,
  pieceColor,
}) {
  // capturing a piece?

  //for pawn
  function promotionsquare(finalY) {
    if (thePieceOnActiveSquare.type !== "pawn") return;
    if (finalY == 1 || finalY == 8) {
      thePieceOnActiveSquare.type = "queen";
    }
  }
  // looping through posible moves
  posibleMoves.forEach((posibleXY) => {
    let finalX = Number(SquareId.toString().split("")[0]);
    let finalY = Number(SquareId.toString().split("")[1]);
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
}

export default makeAMove;
