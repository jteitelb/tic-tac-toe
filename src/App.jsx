import { useState } from "react";
import "./App.css";

const values = ["", "X", "O"];
// const squareClass = { X: "square-x", O: "square-o" , "": ""};
const nextValue = (val) => values[(values.findIndex((v) => v == val) + 1) % 3];

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(1);

  const handleClick = (index) => {
    if (squares[index] !== "") {
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
      <div class="turn-indicator">
        Turn:{" "}
        {turn % 2 == 1 ? (
          <span className="square square-x turn-indicator-tile">X</span>
        ) : (
          <span className="square square-o turn-indicator-tile">O</span>
        )}
      </div>
    </div>
  );
}

export default App;
