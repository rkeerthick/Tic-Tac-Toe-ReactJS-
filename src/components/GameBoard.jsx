import React, { useState } from "react";


const GameBoard = ({ handleSelectSquare, board }) => {

  


  // const [gameBoard, setGameBoard] = useState(board);
  // const handleClick = (rowIndex, colIndex, symbol) => {
  //   setGameBoard((prevState) => {
  //     let updatedGameBoard = [
  //       ...prevState.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayer;
  //     return updatedGameBoard;
  //   });
  //   handlePlayer();
  // };
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button disabled={playerSymbol !== null ? true : false} onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
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
