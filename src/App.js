import "./App.css";
import Nav from "./components/Nav.js";
import Player from "./components/Player";
import Board from "./components/Board";
import Notations from "./components/Notations.js";
import MobileNav from "./components/MobileNav.js";
import PlayAgain from "./components/PlayAgain.js";
import { useContext } from "react";
import ChessContext from "./context/chessContext";

function App() {
  const { isMate, turnColor, piecesData } = useContext(ChessContext);
  let color = "white";
  if (turnColor === "white") {
    color = "black";
  }
  return (
    <div className="main">
      <Nav></Nav>
      <MobileNav></MobileNav>
      <main>
        <div className="game">
          <Player piecesData={piecesData} color={"black"}></Player>
          <Board></Board>
          <Player piecesData={piecesData} color={"white"}></Player>
        </div>
        {/* <Notations></Notations> */}
      </main>
      {isMate && <PlayAgain color={color}></PlayAgain>}
    </div>
  );
}

export default App;
