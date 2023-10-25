import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const handlePlayer = () => {
    setActivePlayer(prevState => prevState === 'X' ? 'O' : 'X');
  }
  console.log(activePlayer)
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <Players activePlayer={activePlayer} />
          <GameBoard activePlayer={activePlayer} handlePlayer={handlePlayer} />
        </div>
      </main>
    </>
  );
}

export default App;
