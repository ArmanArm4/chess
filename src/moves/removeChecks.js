import isCheck from "./isCheck";

function removeChecks(props) {
  const { thePieceOnActiveSquare, posibleMoves, piecesData } = props;

  let notValidMoves = [];
  let clonedPiecesData = JSON.parse(JSON.stringify(piecesData));

  posibleMoves.forEach((posibleMove, id) => {
    let clonedActivePiece = clonedPiecesData.find(
      (Cdata) => Cdata.name === thePieceOnActiveSquare.name
    );
    let oppPiece = clonedPiecesData.find(
      (Cdata) => Cdata.pos === Number(`${posibleMove.x}${posibleMove.y}`)
    );
    let pieceColor = clonedActivePiece.color;

    clonedActivePiece.pos = Number(`${posibleMove.x}${posibleMove.y}`);

    let isnotValidMove = isCheck({ piecesData: clonedPiecesData, pieceColor });

    if (isnotValidMove) {
      notValidMoves.push(posibleMove);
    }
  });

  notValidMoves.forEach((NV) => {
    let index = posibleMoves.indexOf(NV);
    posibleMoves.splice(index, 1);
  });
}

export default removeChecks;
