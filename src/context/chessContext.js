import React from "react";
import { createContext, useState } from "react";
import Positions from "../Position.js";

const ChessContext = createContext();

const piecePosition = [
  { name: "white_pawn_1", pos: Positions.h_2, type: "pawn", eaten: false },
];

export const ChessProvider = ({ children }) => {
  const [activeSquare, setActiveSquare] = useState(null);

  return (
    <ChessContext.Provider
      value={{ setActiveSquare, activeSquare, Positions, piecePosition }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export default ChessContext;
