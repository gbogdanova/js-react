import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import WINNING_COMBINATIONS from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function playerManaging(gameTurn){
  let currentPlayer = 'X';

    if(gameTurn.length > 0 && gameTurn[0].player === 'X' ){
      currentPlayer = 'O';
    }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  let activePlayer = playerManaging(gameTurn);
  
  const boardGame = initialGameBoard;
  for (const turn of gameTurn){
    const {square, player} = turn;
    const {row, col} = square;
    boardGame[row][col] = player;
  }
  
  let winner = null;
  let freeSquare = gameTurn.length < 9;

  for (let combination of WINNING_COMBINATIONS){
    let firstSimbol = boardGame[combination[0].row][combination[0].column];
    let secondSimbol = boardGame[combination[1].row][combination[1].column];
    let thirdSimbol = boardGame[combination[2].row][combination[2].column];

    if(firstSimbol && firstSimbol === secondSimbol && firstSimbol === thirdSimbol){
      winner = firstSimbol;
    }
  }

  function handlePlayerChange(indRow, indCol){
    setGameTurn((prevTurn) => {
      let currentPlayer = playerManaging(prevTurn);
      const updatedTurn = [{square: {row: indRow, col: indCol}, player: currentPlayer}, ...prevTurn];
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
        <GameBoard changeBoard={handlePlayerChange} board={boardGame}/>
      </div>
      {(winner || !freeSquare) && <GameOver winner={winner}/>}
      <Log turns={gameTurn}/>
    </main>
  )
}

export default App
