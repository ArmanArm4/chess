import isCheck from "./isCheck";

function removeChecks(props) {
  const { thePieceOnActiveSquare, pieceColor, posibleMoves, piecesData } =
    props;

  let notValidMoves = [];
  posibleMoves.forEach((posibleMove, id) => {
    let clonedPiecesData = JSON.parse(JSON.stringify(piecesData));

    let clonedActivePiece = clonedPiecesData.find(
      (Cdata) => Cdata.name === thePieceOnActiveSquare.name
    );

    clonedActivePiece.pos = Number(`${posibleMove.x}${posibleMove.y}`);

    let notValidMove = isCheck({ piecesData: clonedPiecesData, pieceColor });

    if (notValidMove) {
      notValidMoves.push(posibleMove);
    }
  });

  notValidMoves.forEach((NV) => {
    let index = posibleMoves.indexOf(NV);
    posibleMoves.splice(index, 1);
  });
}

export default removeChecks;
