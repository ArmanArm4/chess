import isOccupied from "../isOccupied";
import rookPosibleMove from "./rookPosibleMove";
import bishopPosibleMove from "./bishopPosibleMove";

function queenPosibleMove(props) {
  let posibleMoves = [];

  // queen posible moves
  posibleMoves = [...rookPosibleMove(props), ...bishopPosibleMove(props)];

  return posibleMoves;
}

export default queenPosibleMove;
