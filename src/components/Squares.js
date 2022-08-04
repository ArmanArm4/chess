import React from "react";
import "../css/square.css";
import Square from "./Square.js";
import Pieces from "./Pieces.js";

let posX = [1, 2, 3, 4, 5, 6, 7, 8];
let posY = [1, 2, 3, 4, 5, 6, 7, 8];

const numberToLetter = (num) => {
  let posArr = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
  };

  return posArr[num];
};

function Squares() {
  return (
    <section>
      {posX.map((i) => {
        return posY.map((l) => {
          return (
            <Square
              key={i + l}
              classname={i % 2 == 0 ? "odd" : "even"}
              SquareId={`${numberToLetter(l)}_${9 - i}`}
            ></Square>
          );
        });
      })}
      <Pieces></Pieces>
    </section>
  );
}

export default Squares;
