import React from "react";

function GuessInput({ handleAddNewGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddNewGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={gameStatus !== "running"}
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default GuessInput;
