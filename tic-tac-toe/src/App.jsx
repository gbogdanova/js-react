import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handlePlayerChange(){
    setActivePlayer((prevActive) => prevActive === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard changePlayer={handlePlayerChange} activeSimbol={activePlayer}/>
      </div>
      log
    </main>
  )
}

export default App
