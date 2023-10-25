import React, { useState } from "react";
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ activePlayer , handlePlayer}) => {
  const [gameBoard, setGameBoard] = useState(board);
  const handleClick = (rowIndex, colIndex, symbol) => {
    setGameBoard((prevState) => {
      let updatedGameBoard = [
        ...prevState.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayer;
      return updatedGameBoard;
    });
    handlePlayer();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => handleClick(rowIndex, colIndex)}>
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
