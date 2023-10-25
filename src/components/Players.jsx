import React from "react";
import Player from "./Player";

const Players = ({activePlayer, handlePlayerNameChange}) => {
  return (
    <>
      <ol id="players" className="highlight-player">
        <Player
          handlePlayerNameChange={handlePlayerNameChange}
          name="Player 1"
          symbol="X"
          isActive={activePlayer === "X"}
        />
        <Player
          handlePlayerNameChange={handlePlayerNameChange}
          name="Player 2"
          symbol="O"
          isActive={activePlayer === "O"}
        />
      </ol>
    </>
  );
};

export default Players;
