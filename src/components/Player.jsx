import React, { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef(null);

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    const enteredName = playerNameRef.current.value;
    setEnteredPlayerName(enteredName);
    playerNameRef.current.value = ''; // Clear input field after setting the name
  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity' }</h2>
      <p>
        <input
          ref={playerNameRef}
          type="text"
          placeholder="Enter your name"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
