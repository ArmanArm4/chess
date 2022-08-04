function Moves(
  thePieceOnActiveSquare,
  thePieceOnSelectedSquare,
  piecesData,
  SquareId
) {
  console.log(piecesData[thePieceOnActiveSquare].pos, SquareId);
  const moveThePiece = () => {
    piecesData[thePieceOnActiveSquare].pos = SquareId;
  };
  const deleteThePiece = () => {
    piecesData[thePieceOnSelectedSquare].eaten = true;
    piecesData[thePieceOnSelectedSquare].pos = "dead";
  };
  if (thePieceOnSelectedSquare === undefined) {
    moveThePiece();
    return;
  }

  let selectedPieceColor = piecesData[thePieceOnSelectedSquare].color;
  let activePieceColor = piecesData[thePieceOnActiveSquare].color;
  if (selectedPieceColor != activePieceColor) {
    deleteThePiece();
    moveThePiece();
  }
}

export default Moves;
