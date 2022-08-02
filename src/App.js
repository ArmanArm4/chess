import "./App.css";
import Nav from "./components/Nav.js";
import Player from "./components/Player";
import Board from "./components/Board";
import Notations from "./components/Notations.js";

function App() {
  return (
    <div className="main">
      <Nav></Nav>
      <main>
        <div className="game">
          <Player></Player>
          <Board></Board>
          <Player></Player>
        </div>
        <Notations></Notations>
      </main>
    </div>
  );
}

export default App;
