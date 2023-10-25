import React from "react";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>GameOver</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's is a draw!</p>}
      <p>
        <button onClick={onRestart}>Restart</button>
      </p>
    </div>
  );
};

export default GameOver;
