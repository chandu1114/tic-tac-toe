import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";
import mylogo from "./tictactoe-svgrepo-com.svg";

function App() {
  const [next, setNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  let message = "";

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    next ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    setSquares(nextSquares);
    setNext(!next);
  }

  function calculateResult(squares) {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [r1, r2, r3] = winningConditions[i];

      if (
        squares[r1] === squares[r2] &&
        squares[r2] === squares[r3] &&
        squares[r3] === squares[r1]
      ) {
        return squares[r1];
      }
    }
    if (
      squares[0] !== null &&
      squares[1] !== null &&
      squares[2] !== null &&
      squares[3] !== null &&
      squares[4] !== null &&
      squares[5] !== null &&
      squares[6] !== null &&
      squares[7] !== null &&
      squares[8] !== null
    ) {
      return "Tie";
    }

    return null;
  }

  const gameStatus = calculateResult(squares);

  if (gameStatus === "X" || gameStatus === "O") {
    message = "Player " + gameStatus + " won🥳🥳";
  } else if (gameStatus === null) {
    message = "";
  } else if (gameStatus === "Tie") {
    message = "Game is Tie😑😑! Please restart the Game again";
  }

  return (
    <>
      <nav className="navbar">
        <img src={mylogo} alt="logo" className="logo" />
        <h1 className="heading">Welcome Player</h1>
        <span className="logoname">Tic-Tac-Toe</span>
      </nav>
      <main className="game">
        <div className="game-grid">
          {squares.map((square, i) => (
            <Square
              key={i}
              value={square}
              handleSquareClick={() => handleClick(i)}
            />
          ))}
        </div>
        <h1 className={next ? "playerXColor" : "playerOColor"}>
          {next ? "Player X Turn" : "Player O Turn"}
        </h1>
        <div>
          <h2 className="game-status">{message}</h2>
        </div>
      </main>
    </>
  );
}

export default App;
