import WINNING_COMBINAION from "../winning_combinations";

export function derivedPlayer(turn) {
  let currentPlayer = "X";

  if (turn.length > 0 && turn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

export function deriveWinner(gameBoard, playerName) {
  let winner;

  for (const combinations of WINNING_COMBINAION) {
    let firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].col];
    let secondSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].col];
    let thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerName[firstSquareSymbol];
    }
  }
  return winner;
}

export function deriveGameBoard(board, gameTurns) {
  let gameBoard = [...board.map((innerArray) => [...innerArray])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}
