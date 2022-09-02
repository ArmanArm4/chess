import isCheck from "./isCheck";

function removeChecks(props) {
  const { thePieceOnActiveSquare, posibleMoves, piecesData } = props;

  let notValidMoves = [];
  let clonedPiecesData = JSON.parse(JSON.stringify(piecesData));

  posibleMoves.forEach((posibleMove, id) => {
    let clonedActivePiece = clonedPiecesData.find(
      (Cdata) => Cdata.name === thePieceOnActiveSquare.name
    );

    let pieceColor = clonedActivePiece.color;

    let oppPiece = clonedPiecesData.find(
      (Cdata) =>
        pieceColor != Cdata.color &&
        Cdata.pos === Number(`${posibleMove.x}${posibleMove.y}`)
    );

    if (oppPiece) {
      oppPiece.eaten = true;
      oppPiece.pos = "dead";
    }

    clonedActivePiece.pos = Number(`${posibleMove.x}${posibleMove.y}`);

    if (oppPiece && pieceColor !== oppPiece.color) {
      // oppPiece.capturing = true
    }
    let isnotValidMove = isCheck({ piecesData: clonedPiecesData, pieceColor });

    if (isnotValidMove) {
      notValidMoves.push(posibleMove);
    }
  });

  notValidMoves.forEach((NV) => {
    if (posibleMoves.length !== notValidMoves) {
      let index = posibleMoves.indexOf(NV);
      posibleMoves.splice(index, 1);
    } else {
      posibleMoves = [];
    }
  });
  // posibleMoves.filter(PM => PM !== NV)
}

export default removeChecks;
