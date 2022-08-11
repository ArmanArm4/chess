import kingPosibleMove from "./posibleMoves/KingPosibleMove";
import pawnposibleMove from "./posibleMoves/pawnposibleMove.js";
import knightPosibleMove from "./posibleMoves/knightPosibleMove.js";
import rookPosibleMove from "./posibleMoves/rookPosibleMove.js";
import bishopPosibleMove from "./posibleMoves/bishopPosibleMove.js";
import queenPosibleMove from "./posibleMoves/queenPosibleMove.js";
import removeChecks from "./removeChecks";
import isCheckMate from "./isCheckMate";

function checkingForMate(Mateprops) {
  const { pieceColor, piecesData } = Mateprops;

  let oppPieces = piecesData.filter(
    (pieceData) => pieceData.color !== pieceColor
  );
  let isMate = true;
  oppPieces.forEach((oppPiece) => {
    let initialX = Number(oppPiece.pos.toString().split("")[0]);
    let initialY = Number(oppPiece.pos.toString().split("")[1]);

    const props = {
      initialX,
      initialY,
      pieceColor: oppPiece.color,
      oppPiece,
      thePieceOnActiveSquare: oppPiece,
      piecesData,
    };

    let posibleMoves = oppPiecesMoves(props);

    removeChecks({ ...props, posibleMoves });
    if (posibleMoves.length > 0) {
      isMate = false;
      return;
    }
  });

  return isMate;
}
function oppPiecesMoves(props) {
  let oppMoves = [];
  if (props.oppPiece.type === "pawn") {
    oppMoves = pawnposibleMove(props);
  }
  if (props.oppPiece.type === "knight") {
    oppMoves = knightPosibleMove(props);
  }
  if (props.oppPiece.type === "rook") {
    oppMoves = rookPosibleMove(props);
  }
  if (props.oppPiece.type === "bishop") {
    oppMoves = bishopPosibleMove(props);
  }
  if (props.oppPiece.type === "queen") {
    oppMoves = queenPosibleMove(props);
  }
  if (props.oppPiece.type === "king") {
    oppMoves = kingPosibleMove(props);
  }

  return oppMoves;
}
export default checkingForMate;
