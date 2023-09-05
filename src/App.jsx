import { useState } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(1);

  const handleClick = (index) => {
    if (gameOver) {
      console.log("Game over. Cannot place any more tiles");
      return;
    } else if (squares[index] !== "") {
      console.log("Tried to place on non-empty square");
      return;
    }
    setSquares((currSquares) => {
      const result = [...currSquares];
      const playerMark = turn % 2 == 1 ? "X" : "O";
      result.splice(index, 1, playerMark);
      return result;
    });
    setTurn((turn) => turn + 1);
  };

  const checkWin = (board) => {
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
    for (let line of lines) {
      if (
        board[line[0]] !== "" &&
        board[line[0]] === board[line[1]] &&
        board[line[1]] === board[line[2]]
      ) {
        return line;
      }
    }
    return [];
  };

  const winDetected = checkWin(squares).length > 0;
  const winner = squares[checkWin(squares)?.[0]];
  const gameOver = winDetected || turn === 10;

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="board-container">
        <div className="board">
          {squares.map((square, index) => (
            <div
              className={`square ${
                square == "X" ? "square-x" : square == "O" ? "square-o" : ""
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {square}
            </div>
          ))}
        </div>
      </div>
      {winDetected || turn == 10 ? (
        <div className="game-over">
          <h1>{winDetected ? `Winner: ${winner}!` : "It's a Draw!"}</h1>
        </div>
      ) : (
        <div className="turn-indicator">
          Turn:
          {turn % 2 == 1 ? (
            <span className="square square-x turn-indicator-tile">X</span>
          ) : (
            <span className="square square-o turn-indicator-tile">O</span>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
