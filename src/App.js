import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./App.css";

const buttonArray = [
  {
    id: "zero",
    value: 0,
  },
  {
    id: "one",
    value: 1,
  },
  {
    id: "two",
    value: 2,
  },
  {
    id: "three",
    value: 3,
  },
  {
    id: "four",
    value: 4,
  },
  {
    id: "five",
    value: 5,
  },
  {
    id: "six",
    value: 6,
  },
  {
    id: "seven",
    value: 7,
  },
  {
    id: "eight",
    value: 8,
  },
  {
    id: "nine",
    value: 9,
  },
  {
    id: "equals",
    value: "=",
  },
  {
    id: "add",
    value: "+",
  },
  {
    id: "subtract",
    value: "-",
  },
  {
    id: "multiply",
    value: "*",
  },
  {
    id: "divide",
    value: "/",
  },
  {
    id: "decimal",
    value: ".",
  },
  {
    id: "clear",
    value: "clear",
  },
];

function App() {
  const initialState = {
    firstNum: "",
    secondNum: "",
    operator: "",
    text: "0",
  };
  const [state, setState] = useState(initialState);
  const { firstNum, secondNum, operator, text } = state;

  const numbers = (rawNumber) => {
    const number = rawNumber.toString();
    if (number === "0") {
      switch (true) {
        case firstNum === "" && secondNum === "":
        case firstNum !== "" && secondNum === "" && operator !== "":
          break;
        case firstNum !== "" && secondNum === "" && operator === "":
          setState({
            ...state,
            firstNum: firstNum + "0",
            text: firstNum + number,
          });
          break;
        case firstNum !== "" && secondNum !== "" && operator !== "":
          setState({
            ...state,
            secondNum: secondNum + "0",
            text: operator + secondNum + number,
          });
          break;
      }
    } else {
      switch (true) {
        case firstNum === "" && secondNum === "" && operator === "":
          setState({ ...state, firstNum: number, text: number });
          break;
        case firstNum !== "" && secondNum === "" && operator === "":
          setState({
            ...state,
            firstNum: firstNum + number,
            text: firstNum + number,
          });
          break;
        case firstNum !== "" && secondNum === "" && operator !== "":
          setState({ ...state, secondNum: number, text: text + number });
          break;
        case firstNum !== "" && secondNum !== "" && operator !== "":
          setState({
            ...state,
            secondNum: secondNum + number,
            text: operator + secondNum + number,
          });
          break;
      }
    }
  };

  const actions = (action) => {
    if (action === "clear") {
      setState(initialState);
    } else if (action === "=") {
      switch (true) {
        case firstNum !== "" &&
          secondNum === "" &&
          action === "=" &&
          operator === "":
          break;
        case firstNum !== "" &&
          secondNum === "" &&
          action === "=" &&
          operator !== "":
          setState({ ...state, text: firstNum, operator: "" });
          break;
        case firstNum !== "" &&
          secondNum !== "" &&
          operator !== "" &&
          action === "=":
        case firstNum !== "" && secondNum !== "" && operator !== "":
          const result = doMath({ firstNum, secondNum, operator });
          setState({
            firstNum: result,
            secondNum: "",
            operator: "",
            text: result,
          });
          break;
      }
    } else if (action === ".") {
      switch (true) {
        case firstNum.includes(".") && secondNum === "" && operator === "":
        case secondNum.includes("."):
          //do nothing because . is already included
          break;
        case firstNum === "" && secondNum === "" && operator === "":
          setState({ ...state, firstNum: "0.", text: "0." });
          break;
        case firstNum !== "" && secondNum === "" && operator === "":
          setState({
            ...state,
            firstNum: firstNum + action,
            text: text + action + "0",
          });
          break;
        case firstNum !== "" && secondNum === "" && operator !== "":
          setState({ ...state, secondNum: "0.", text: "0." });
          break;
        case firstNum !== "" && secondNum !== "" && operator !== "":
          setState({
            ...state,
            secondNum: secondNum + ".",
            text: text + action + "0",
          });
          break;
      }
    } else {
      switch (true) {
        case firstNum === "-" &&
          secondNum === "" &&
          operator === "" &&
          action === "-":
          break;
        case firstNum === "" &&
          secondNum === "" &&
          operator === "" &&
          action === "-":
          setState({ ...state, firstNum: action, text: action });
          break;
        case firstNum !== "" &&
          secondNum === "" &&
          operator !== "" &&
          action === "-":
          setState({ ...state, secondNum: action, text: text + " " + action });
          break;
        case firstNum !== "" && secondNum === "":
          setState({
            ...state,
            operator: action,
            text: action,
          });
          break;
        case firstNum !== "" && secondNum !== "" && operator !== "":
          console.log("conditional", state);
          const result = doMath({ firstNum, secondNum, operator });
          setState({
            firstNum: result,
            secondNum: "",
            operator: action,
            text: action,
          });
          break;
      }
    }
  };

  const updateState = (value) => {
    console.log(state);
    if (typeof value === "number") {
      console.log(value);
      numbers(value);
    } else if (typeof value === "string") {
      console.log(value);
      actions(value);
    }
  };

  const doMath = ({ firstNum, secondNum, operator }) =>
    eval(`${firstNum} ${operator} (${secondNum})`).toString();

  const handleClick = (value) => {
    updateState(value);
  };

  return (
    <div className="App">
      <Display text={state.text} />
      <div className="keypad">
        {buttonArray.map((each) => (
          <Button
            key={each.id}
            handleClick={handleClick}
            text={each.text}
            setText={each.setText}
            {...each}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
