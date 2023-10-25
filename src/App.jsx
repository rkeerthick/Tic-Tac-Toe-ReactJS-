import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Players from "./components/Players";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {
  deriveGameBoard,
  derivedPlayer,
  deriveWinner,
} from "./utils/functions";

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const activePlayer = derivedPlayer(gameTurns);
  const gameBoard = deriveGameBoard(board, gameTurns);
  const winner = deriveWinner(gameBoard, playerName);
  const isDraw = gameTurns.length === 9 && !winner;

  function handleRestart() {
    setGameTurns([]);
  }

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevState) => {
      let currentPlayer = derivedPlayer(prevState);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevState,
      ];

      return updateTurns;
    });
  };

  const handlePlayerNameChange = (name, symbol) => {
    setPlayerName((prevState) => {
      return { ...prevState, [symbol]: name };
    });
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <Players
            handlePlayerNameChange={handlePlayerNameChange}
            activePlayer={activePlayer}
          />
          {(winner || isDraw) && (
            <GameOver onRestart={handleRestart} winner={winner} />
          )}
          <GameBoard
            board={gameBoard}
            handleSelectSquare={handleSelectSquare}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
