import kingPosibleMove from "./KingPosibleMove";
import pawnposibleMove from "./pawnposibleMove.js";
import knightPosibleMove from "./knightPosibleMove.js";
import rookPosibleMove from "./rookPosibleMove.js";
import bishopPosibleMove from "./bishopPosibleMove.js";
import queenPosibleMove from "./queenPosibleMove.js";

function allMoves({ pieceColor, piecesData }) {
  let allMoves = [];

  const attackingColor = pieceColor;

  const defendingKing = piecesData.filter((pieceData) => {
    return pieceData.type === "king" && pieceData.color !== attackingColor;
  })[0];

  const attackingPieces = piecesData.filter((pieceData) => {
    return !pieceData.eaten && pieceData.color === attackingColor;
  });

  //finding all posible moves by attacking pieces

  attackingPieces.forEach((attackingPiece) => {
    let PieceX = Number(attackingPiece.pos.toString().split("")[0]);
    let PieceY = Number(attackingPiece.pos.toString().split("")[1]);

    const attPieceProps = {
      initialX: PieceX,
      initialY: PieceY,
      pieceColor: attackingColor,
      thePieceOnActiveSquare: attackingPiece,
      piecesData,
    };

    switch (attackingPiece.type) {
      case "pawn":
        allMoves = allMoves.concat(pawnposibleMove(attPieceProps));

        break;
      case "bishop":
        allMoves = allMoves.concat(bishopPosibleMove(attPieceProps));
        break;
      case "king":
        allMoves = allMoves.concat(kingPosibleMove(attPieceProps));
        break;
      case "knight":
        allMoves = allMoves.concat(knightPosibleMove(attPieceProps));
        break;
      case "queen":
        allMoves = allMoves.concat(queenPosibleMove(attPieceProps));

        break;
      case "rook":
        allMoves = allMoves.concat(rookPosibleMove(attPieceProps));
        break;

      default:
        console.log("Error");
    }
  });

  return allMoves;
}

export default allMoves;
