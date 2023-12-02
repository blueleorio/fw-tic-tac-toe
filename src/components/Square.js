import React from "react";

function Square({ square }) {
  return (
    <button className={"square"} onClick={handleClick}>
      {square}
    </button>
  );
}

export default Square;
