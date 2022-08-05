import pawnMove from "./pawnMove.js";

function Moves(
  thePieceOnActiveSquare,
  thePieceOnSelectedSquare,
  piecesData,
  SquareId,
  turnColor,
  setTurnColor
) {
  const deleteThePiece = () => {
    thePieceOnSelectedSquare.eaten = true;
    thePieceOnSelectedSquare.pos = "dead";
  };
  const ChangeTurnColor = () => {
    if (turnColor == "white") {
      setTurnColor("black");
    }
    if (turnColor == "black") {
      setTurnColor("white");
    }
  };
  const props = {
    thePieceOnActiveSquare,
    thePieceOnSelectedSquare,
    piecesData,
    SquareId,
    ChangeTurnColor,
    deleteThePiece,
  };
  if (thePieceOnActiveSquare.type === "pawn") {
    pawnMove(props);

    return;
  }

  // thePieceOnActiveSquare.pos = SquareId;

  // ChangeTurnColor();

  // if (thePieceOnSelectedSquare === undefined) {
  //   moveThePiece();

  //   return;
  // }

  // if (thePieceOnSelectedSquare.color != thePieceOnActiveSquare.color) {
  //   moveThePiece();
  //   deleteThePiece();
  // }
}

export default Moves;
