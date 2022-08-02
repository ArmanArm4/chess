import React from "react";
import "../css/square.css";
import Square from "./Square.js";

let posX = [1, 2, 3, 4, 5, 6, 7, 8];
let posY = [1, 2, 3, 4, 5, 6, 7, 8];

function Squares() {
  return (
    <section>
      {posX.map((i) => {
        return posY.map((l) => {
          return (
            <Square
              key={i + l}
              classname={i % 2 == 0 ? "odd" : "even"}
              SquareId={`${i}${l}`}
            ></Square>
          );
        });
      })}
      {/* <Pieces></Pieces> */}
    </section>
  );
}

export default Squares;
