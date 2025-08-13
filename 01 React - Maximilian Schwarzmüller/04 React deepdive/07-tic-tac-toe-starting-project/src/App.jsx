import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import GameOver from "./components/GameOver"

const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const checkWinner = (player) => {
  const dirArray = [0, 1, 2]
  const revArray = [2, 1, 0]
  let rowScore;
  let colScore;
  let crossScore = 0;
  let revCrossScore = 0;
  let draw = true;
  for (const [prIndex, prAxis] of dirArray.entries()) {
    rowScore = 0
    colScore = 0
    for (const [secIndex, secAxis] of revArray.entries()) {
      if (initialGame[prAxis][secAxis] === null) {
        draw = false
      }
      if (initialGame[prAxis][secAxis] === player) {
        rowScore++
      }
      if (initialGame[secAxis][prAxis] === player) {
        colScore++
      }
      if (prAxis === secAxis && initialGame[prAxis][secAxis] === player) {
        crossScore++
      }
      if (prIndex === secIndex && initialGame[prAxis][secAxis] === player) {
        revCrossScore++
      }
      if (rowScore >= 3 || colScore >= 3 || crossScore >= 3 || revCrossScore >= 3) {
        return player
      }
    }
  }
  if (draw) {
    return 'draw'
  }
}

const deriveActivePlayer = (gameTurns) => {
  let curPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    curPlayer = 'O'
  }
  return curPlayer
}



function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    X: 'Player 1',
    O: 'Player 2'
  })
  const curPlayer = deriveActivePlayer(gameTurns)

  const resetBoard = () => {
    for (const [rowIndex, rowValue] of initialGame.entries()) {
      for (const [colIndex, colValue] of rowValue.entries()) {
        initialGame[rowIndex][colIndex] = null
      }
    }
    setGameTurns([])
  }

  const handlePlayerChange = (indexRow, indexColumn) => {
    setGameTurns(curState => {
      let curPlayer = deriveActivePlayer(curState)
      return [
        {
          square: {
            row: indexRow,
            col: indexColumn
          },
          player: curPlayer
        },
        ...curState
      ]
    })
  }

  const handlePlayerNameChange = (symbol, name) => {
    setPlayerNames(prevNames => {
      return {
        ...prevNames,
        [symbol]: name
      }
    })
  }

  gameTurns.forEach(cell => {

    const row = cell.square.row
    const col = cell.square.col
    const player = cell.player

    initialGame[row][col] = player

  });

  let winner;
  const winnerX = checkWinner('X');
  const winnerO = checkWinner('O');

  if (winnerX || winnerO) {
    winner = winnerX || winnerO
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name='Player 1' symbol='X' activePlayer={curPlayer} handlePlayerNameChange={handlePlayerNameChange} />
          <Player name='Player 2' symbol='O' activePlayer={curPlayer} handlePlayerNameChange={handlePlayerNameChange} />
        </ol>
        {(winner && (winner !== 'draw')) && <GameOver winner={playerNames[winner]} resetBoard={resetBoard} />}
        {(winner === 'draw') && <GameOver winner='draw' resetBoard={resetBoard} />}
        <GameBoard handlePlayerChange={handlePlayerChange} gameTurns={gameTurns} activePlayer={curPlayer} initialGame={initialGame} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
