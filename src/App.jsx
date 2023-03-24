import React, { useReducer } from "react";
import "./App.css";

const ACTIONS = {
  ADD_INPUT: "add-input",
  PICK_OPERATION: "pick-operation",
  CLEAR: "clear",
  DELETE_INPUT: "delete-input",
  EVALUATE: "evaluate",
};

function reducer(state, { type: payload }) {}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button className="">DEL</button>
      <button className="">/</button>
      <button className="">1</button>
      <button className="">2</button>
      <button className="">3</button>
      <button className="">*</button>
      <button className="">4</button>
      <button className="">5</button>
      <button className="">6</button>
      <button className="">+</button>
      <button className="">7</button>
      <button className="">8</button>
      <button className="">9</button>
      <button className="">-</button>
      <button className="">.</button>
      <button className="">0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
