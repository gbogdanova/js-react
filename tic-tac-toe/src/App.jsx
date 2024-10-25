import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurn, setGameTurn] = useState([]);

  function handlePlayerChange(indRow, indCol){
    setActivePlayer((prevActive) => prevActive === 'X' ? 'O' : 'X');
    setGameTurn((prevTurn ) => {
      let currentPlayer = 'X';

      if(prevTurn.length > 0 && prevTurn[0].player === 'X' ){
        currentPlayer = 'O';
      }

      const updatedTurn = [{square: {row: indRow, col: indCol}, player: currentPlayer}, ...prevTurn]
      return updatedTurn;
    })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard changeBoard={handlePlayerChange} turns={gameTurn}/>
      </div>
      <Log turns={gameTurn}/>
    </main>
  )
}

export default App
