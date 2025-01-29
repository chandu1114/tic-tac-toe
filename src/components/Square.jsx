import React from "react";
import "./Square.css";

function Square({ value, handleSquareClick }) {
  return (
    <>
      <button onClick={handleSquareClick}>{value}</button>
    </>
  );
}

export default Square;
