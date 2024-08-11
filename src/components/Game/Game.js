import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleAddNewGuess(guess) {
    const nextGuessResults = [...guessResults, guess];

    setGuessResults(nextGuessResults);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput handleAddNewGuess={handleAddNewGuess} />
    </>
  );
}

export default Game;
