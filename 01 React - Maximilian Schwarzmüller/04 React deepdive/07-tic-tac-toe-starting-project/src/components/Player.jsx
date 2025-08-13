import { useState } from "react"

const Player = ({ name, symbol, activePlayer, handlePlayerNameChange }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    const handleClick = () => {
        { isEditing && handlePlayerNameChange(symbol, playerName) }
        setIsEditing(oldState => !oldState)
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }

    return (
        <li className={activePlayer === symbol ? 'active' : undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                {isEditing && <input type="text" name="name" value={playerName} onChange={handleChange} />}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    )
}
export default Player