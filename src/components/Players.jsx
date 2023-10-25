import React from "react";
import Player from "./Player";

const Players = ({activePlayer}) => {
  return (
    <>
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
    </>
  );
};

export default Players;
