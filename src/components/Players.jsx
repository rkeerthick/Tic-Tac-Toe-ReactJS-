import React from "react";
import Player from "./Player";

const Players = () => {
  return (
    <>
      <ol id="players">
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" />
      </ol>
    </>
  );
};

export default Players;