import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((element, index) => (
        <p key={index} className="guess">
          {element}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
