

const GameBoard = ({ handlePlayerChange, gameTurns, initialGame }) => {



    const curBoard = initialGame.map((row, indexRow) => {

        const curRow = row.map((cell, indexColumn) => {

            return (
                <li key={indexColumn}>
                    <button onClick={() => handlePlayerChange(indexRow, indexColumn)} disabled={initialGame[indexRow][indexColumn] !== null}>{cell}</button>
                </li>
            )
        })

        return (
            <ol key={indexRow}>
                {curRow}
            </ol>
        )
    })


    return (
        <ol id="game-board">
            {curBoard}
        </ol>
    )
}

export default GameBoard