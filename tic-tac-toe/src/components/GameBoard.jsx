
export default function GameBoard ({changeBoard, board}) {

  return (
    <ol id="game-board">
      {board.map((row, indRow) => (
        <li key={indRow}> 
          <ol>
            {row.map((symbol, indCol) => (
              <li key={indCol}>
                <button onClick={() => changeBoard(indRow, indCol)} disabled={symbol !== null}>
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
