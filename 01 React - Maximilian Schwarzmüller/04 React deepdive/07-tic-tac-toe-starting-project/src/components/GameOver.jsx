const GameOver = ({ winner, resetBoard }) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner !== 'draw' && <p>{winner} won!</p>}
            {winner === 'draw' && <p>Draw!</p>}
            <p>
                <button onClick={resetBoard}>Rematch!</button>
            </p>
        </div>
    )
}
export default GameOver