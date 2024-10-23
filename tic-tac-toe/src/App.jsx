import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X"/>
          <Player initialName="Player2" symbol="O"/>
        </ol>
        Board
      </div>
      log
    </main>
  )
}

export default App
