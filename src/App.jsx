import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <Players />
          <GameBoard />
        </div>
      </main>
    </>
  );
}

export default App;
