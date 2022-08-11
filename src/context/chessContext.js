import React from "react";
import { createContext, useState } from "react";
import Positions from "./Position.js";
import piecesData from "./piecesData.js";

const ChessContext = createContext();

export const ChessProvider = ({ children }) => {
  const [activeSquare, setActiveSquare] = useState(null);
  const [turnColor, setTurnColor] = useState("white");
  const [isMate, setIsMate] = useState(false);

  return (
    <ChessContext.Provider
      value={{
        setActiveSquare,
        activeSquare,
        Positions,
        piecesData,
        setIsMate,
        isMate,
        turnColor,
        setTurnColor,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export default ChessContext;
