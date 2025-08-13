import { useState, useRef } from "react";

export default function Player() {

  const [playerName, setPlayerName] = useState(undefined)

  const userNameRefComp = useRef();

  const handleClickSubming = () => {
    setPlayerName(userNameRefComp.current.value)
    userNameRefComp.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={userNameRefComp}
          type="text"
        />
        <button onClick={handleClickSubming}>Set Name</button>
      </p>
    </section>
  );
}
