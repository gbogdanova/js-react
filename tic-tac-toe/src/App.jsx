import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import WINNING_COMBINATIONS from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

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

function driveBoard(gameTurn){
  const boardGame = [...initialGameBoard.map(arr => [...arr])];
  for (const turn of gameTurn){
    const {square, player} = turn;
    const {row, col} = square;
    boardGame[row][col] = player;
  }
  return boardGame;
}

function driveWinner(boardGame, players){
  let winner = null;
  
  for (let combination of WINNING_COMBINATIONS){
    let firstSimbol = boardGame[combination[0].row][combination[0].column];
    let secondSimbol = boardGame[combination[1].row][combination[1].column];
    let thirdSimbol = boardGame[combination[2].row][combination[2].column];

    if(firstSimbol && firstSimbol === secondSimbol && firstSimbol === thirdSimbol){
      winner = players[firstSimbol];
    }
  }

  return winner;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  let activePlayer = playerManaging(gameTurn);
  let boardGame = driveBoard(gameTurn);
  let winner = driveWinner(boardGame, players);
  let freeSquare = gameTurn.length < 9;

  function handlePlayerChange(indRow, indCol){
    setGameTurn((prevTurn) => {
      let currentPlayer = playerManaging(prevTurn);
      const updatedTurn = [{square: {row: indRow, col: indCol}, player: currentPlayer}, ...prevTurn];
      return updatedTurn;
    })
  }

  function handleChangeName(symbol, name){
    setPlayers(prevPlayers => {
      return {
      ...prevPlayers,
      [symbol]: name,
    }})

  }

  function restartGame(){
    setGameTurn([]);
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={players.X} symbol="X" isActive={activePlayer === 'X'} handleName={handleChangeName}/>
          <Player initialName={players.O} symbol="O" isActive={activePlayer === 'O'} handleName={handleChangeName}/>
        </ol>
        <GameBoard changeBoard={handlePlayerChange} board={boardGame}/>
      </div>
      {(winner || !freeSquare) && <GameOver winner={winner} restart={restartGame}/>}
      <Log turns={gameTurn}/>
    </main>
  )
}

export default App
