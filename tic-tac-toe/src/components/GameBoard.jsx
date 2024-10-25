import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
export default function GameBoard () {
  const [boardGame, setBoardGame] = useState(initialGameBoard);

  function handleBoardChange(indRow, indCol){
    setBoardGame( prevBord => {
      const updatedBoard = [...prevBord.map(inner => [...inner])];
      updatedBoard[indRow][indCol] = 'X';
      return updatedBoard;
    })
  }
  return (
    <ol id="game-board">
      {boardGame.map((row, indRow) => (
        <li key={indRow}> 
          <ol>
            {row.map((symbol, indCol) => (
              <li key={indCol}>
                <button onClick={() => handleBoardChange(indRow, indCol)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
