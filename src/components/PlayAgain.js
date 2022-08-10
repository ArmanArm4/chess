import React from "react";
import classes from "../css/playAgain.module.css";

function PlayAgain({ color }) {
  return (
    <div className={classes.playAgain}>
      <h2>{color} wins</h2>
      <button>
        <a href="/">play again</a>
      </button>
    </div>
  );
}

export default PlayAgain;
