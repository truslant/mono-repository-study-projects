const Log = ({ gameTurns }) => {
    const gameLog = gameTurns.map(instance => {

        const row = instance.square.row
        const col = instance.square.col
        const player = instance.player

        return (
            <li key={`${row}${col}`}> {`${row},${col}: ${player}`}</li>
        )
    })

    return (
        <ol id="log">
            {gameTurns.length > 0 && gameLog}
        </ol>
    )
}

export default Log