import React from "react";

import Banner from "../Banner";

function WonBanner({ numOfGuesses, handleGameInitialization }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button onClick={handleGameInitialization} className="restart-btn">
        Restart
      </button>
    </Banner>
  );
}

export default WonBanner;
