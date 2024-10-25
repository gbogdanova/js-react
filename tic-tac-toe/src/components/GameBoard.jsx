import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
export default function GameBoard ({changeBoard, turns}) {
  const boardGame = initialGameBoard;
  // const [boardGame, setBoardGame] = useState(initialGameBoard);

  // function handleBoardChange(indRow, indCol){
  //   setBoardGame( prevBord => {
  //     const updatedBoard = [...prevBord.map(inner => [...inner])];
  //     updatedBoard[indRow][indCol] = activeSimbol;
  //     return updatedBoard;
  //   })

  //   changePlayer();
  // }
  for (const turn of turns){
    const {square, player} = turn;
    const {row, col} = square;
    boardGame[row][col] = player;
  }

  return (
    <ol id="game-board">
      {boardGame.map((row, indRow) => (
        <li key={indRow}> 
          <ol>
            {row.map((symbol, indCol) => (
              <li key={indCol}>
                <button onClick={() => changeBoard(indRow, indCol)}>
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
