import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const values = ["", "X", "O"];
// const squareClass = { X: "square-x", O: "square-o" , "": ""};
const nextValue = (val) => values[(values.findIndex((v) => v == val) + 1) % 3];

function App() {
  const [squares, setSquares] = useState(Array(9).fill("X"));

  const handleClick = (index) => {
    for (let i = 0; i < 3; i++) {
      console.log(nextValue(values[i]));
    }
    setSquares((currSquares) => {
      const result = [...currSquares];
      result.splice(index, 1, nextValue(currSquares[index]));
      return result;
    });
    console.log(squares);
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
    </div>
  );
}

export default App;
