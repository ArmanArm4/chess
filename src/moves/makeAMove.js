import piecesData from "../context/piecesData";

function makeAMove({
  SquareId,
  thePieceOnActiveSquare,
  posibleMoves,
  ChangeTurnColor,
  deleteThePiece,
}) {
  console.log(posibleMoves);
  //for pawn
  function promotionsquare(finalY) {
    if (thePieceOnActiveSquare.type !== "pawn") return;
    if (finalY == 1 || finalY == 8) {
      thePieceOnActiveSquare.type = "queen";
    }
  }
  let finalX = Number(SquareId.toString().split("")[0]);
  let finalY = Number(SquareId.toString().split("")[1]);
  // looping through posible moves
  posibleMoves.forEach((posibleXY) => {
    //Castaling
    let pieceColor = thePieceOnActiveSquare.color;
    let firstLine = 1;
    if (pieceColor === "black") {
      firstLine = 8;
    }
    let movingKing = thePieceOnActiveSquare.type === "king";

    let rooks = piecesData.filter(
      (p) => p.type === "rook" && pieceColor === p.color
    );
    const rookOne = rooks[0];
    const rookTwo = rooks[1];
    //short Castaling
    if (
      movingKing &&
      SquareId &&
      posibleXY.x === finalX &&
      posibleXY.y === finalY &&
      finalX === 7
    ) {
      thePieceOnActiveSquare.pos = SquareId;
      thePieceOnActiveSquare.moved = true;
      rookTwo.pos = Number(`6${firstLine}`);
      rookTwo.moved = true;
      ChangeTurnColor();

      return;
    }
    //long Castaling
    if (
      movingKing &&
      SquareId &&
      posibleXY.x === finalX &&
      posibleXY.y === finalY &&
      finalX === 3
    ) {
      thePieceOnActiveSquare.pos = SquareId;
      thePieceOnActiveSquare.moved = true;
      rookOne.pos = Number(`4${firstLine}`);
      rookTwo.moved = true;
      ChangeTurnColor();

      return;
    }
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
