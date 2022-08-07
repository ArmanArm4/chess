import kingPosibleMove from "./posibleMoves/KingPosibleMove";
import pawnposibleMove from "./posibleMoves/pawnposibleMove.js";
import knightPosibleMove from "./posibleMoves/knightPosibleMove.js";
import rookPosibleMove from "./posibleMoves/rookPosibleMove.js";
import bishopPosibleMove from "./posibleMoves/bishopPosibleMove.js";
import queenPosibleMove from "./posibleMoves/queenPosibleMove.js";
import removesChecks from "./removesChecks";

import makeAMove from "./makeAMove.js";

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
  let initialX = Number(thePieceOnActiveSquare.pos.toString().split("")[0]);
  let initialY = Number(thePieceOnActiveSquare.pos.toString().split("")[1]);

  const props = {
    initialX,
    initialY,
    pieceColor: thePieceOnActiveSquare.color,
    thePieceOnActiveSquare,
    thePieceOnSelectedSquare,
  };
  let posibleMoves = [];
  if (thePieceOnActiveSquare.type === "pawn") {
    posibleMoves = pawnposibleMove(props);
  }
  if (thePieceOnActiveSquare.type === "knight") {
    posibleMoves = knightPosibleMove(props);
  }
  if (thePieceOnActiveSquare.type === "rook") {
    posibleMoves = rookPosibleMove(props);
  }
  if (thePieceOnActiveSquare.type === "bishop") {
    posibleMoves = bishopPosibleMove(props);
  }
  if (thePieceOnActiveSquare.type === "queen") {
    posibleMoves = queenPosibleMove(props);
  }
  if (thePieceOnActiveSquare.type === "king") {
    posibleMoves = kingPosibleMove(props);
  }
  // console.log(posibleMoves);
  removesChecks({ ...props, posibleMoves });
  makeAMove({
    SquareId,
    thePieceOnActiveSquare,
    posibleMoves,
    ChangeTurnColor,
    deleteThePiece,
    pieceColor: thePieceOnActiveSquare.color,
    thePieceOnSelectedSquare,
  });
}

export default Moves;
