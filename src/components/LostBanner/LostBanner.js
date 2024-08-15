import React from "react";

import Banner from "../Banner";

function LostBanner({ answer, handleGameInitialization }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={handleGameInitialization} className="restart-btn">
        Restart
      </button>
    </Banner>
  );
}

export default LostBanner;
