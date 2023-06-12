import React, { useState } from "react";

function Square({ value, clickHandler }) {
  return (
    <button className="square" onClick={clickHandler}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    return null;
  }
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner" + winner;
  } else {
    status = "Next Player is :" + (xIsNext ? "X" : "O");
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} clickHandler={() => handleClick(0)}></Square>
        <Square value={squares[1]} clickHandler={() => handleClick(1)}></Square>
        <Square value={squares[2]} clickHandler={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} clickHandler={() => handleClick(3)}></Square>
        <Square value={squares[4]} clickHandler={() => handleClick(4)}></Square>
        <Square value={squares[5]} clickHandler={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} clickHandler={() => handleClick(6)}></Square>
        <Square value={squares[7]} clickHandler={() => handleClick(7)}></Square>
        <Square value={squares[8]} clickHandler={() => handleClick(8)}></Square>
      </div>
    </>
  );
}
export default Board;
