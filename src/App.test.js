import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component contains all necessary calculator inputs", () => {
  it('should contain an "=" button with an id="equals"', () => {
    render(<App />);
    const equalsButton = screen.getByTestId("equals");
    expect(equalsButton).toBeInTheDocument();
  });

  it("should contain 10 number buttons with the corresponding IDs", () => {
    render(<App />);
    const zero = screen.getByTestId("zero");
    const one = screen.getByTestId("one");
    const two = screen.getByTestId("two");
    const three = screen.getByTestId("three");
    const four = screen.getByTestId("four");
    const five = screen.getByTestId("five");
    const six = screen.getByTestId("six");
    const seven = screen.getByTestId("seven");
    const eight = screen.getByTestId("eight");
    const nine = screen.getByTestId("nine");
    expect(zero).toBeInTheDocument();
    expect(one).toBeInTheDocument();
    expect(two).toBeInTheDocument();
    expect(three).toBeInTheDocument();
    expect(four).toBeInTheDocument();
    expect(five).toBeInTheDocument();
    expect(six).toBeInTheDocument();
    expect(seven).toBeInTheDocument();
    expect(eight).toBeInTheDocument();
    expect(nine).toBeInTheDocument();
  });

  it("should contain 4 operator buttons with the corresponding IDs", () => {
    render(<App />);
    const add = screen.getByTestId("add");
    const subtract = screen.getByTestId("subtract");
    const multiply = screen.getByTestId("multiply");
    const divide = screen.getByTestId("divide");
    expect(add).toBeInTheDocument();
    expect(subtract).toBeInTheDocument();
    expect(multiply).toBeInTheDocument();
    expect(divide).toBeInTheDocument();
  });

  it('should contain a "." button with an id="decimal"', () => {
    render(<App />);
    const decimalButton = screen.getByTestId("decimal");
    expect(decimalButton).toBeInTheDocument();
  });

  it('should contain a "clear" button with an id="clear"', () => {
    render(<App />);
    const clearButton = screen.getByTestId("clear");
    expect(clearButton).toBeInTheDocument();
  });

  it("should contain a a text element to display values", () => {
    render(<App />);
    const display = screen.getByTestId("display");
    expect(display).toBeInTheDocument();
  });
});

describe("display element should display user input as it is entered", () => {
  it("should display the first nuber entered", () => {
    render(<App />);
    const displayElement = screen.getByTestId("display");
    const six = screen.getByTestId("six");
    fireEvent.click(six);
    fireEvent.click(six);
    fireEvent.click(six);
    expect(displayElement.textContent).toEqual("666");
  });

  it("should display the operator when pressed", () => {
    render(<App />);
    const displayElement = screen.getByTestId("display");
    const six = screen.getByTestId("six");
    const plus = screen.getByTestId("add");
    fireEvent.click(six);
    fireEvent.click(plus);
    expect(displayElement.textContent).toEqual("+");
  });

  it("should display the second number when entered after operator", () => {
    render(<App />);
    const displayElement = screen.getByTestId("display");
    const six = screen.getByTestId("six");
    const plus = screen.getByTestId("add");
    const three = screen.getByTestId("three");
    fireEvent.click(six);
    fireEvent.click(plus);
    fireEvent.click(three);
    expect(displayElement.textContent).toEqual("+3");
  });

  it("should not display any operator other than minus before a number is entered", () => {
    render(<App />);
    const displayElement = screen.getByTestId("display");
    const plus = screen.getByTestId("add");
    const minus = screen.getByTestId("subtract");
    const multiply = screen.getByTestId("multiply");
    const divide = screen.getByTestId("divide");
    const six = screen.getByTestId("six");

    fireEvent.click(divide);
    fireEvent.click(minus);
    fireEvent.click(multiply);
    fireEvent.click(plus);
    fireEvent.click(six);
    expect(displayElement.textContent).toEqual("-6");
  });
});

describe("App executes expected calculator functionalties", () => {
  it("displays correct sum when the equal button is pressed", () => {
    render(<App />);
    const displayElement = screen.getByTestId("display");
    const six = screen.getByTestId("six");
    const plus = screen.getByTestId("add");
    const three = screen.getByTestId("three");
    const equals = screen.getByTestId("equals");
    fireEvent.click(six);
    fireEvent.click(plus);
    fireEvent.click(three);
    fireEvent.click(equals);
    expect(displayElement.textContent).toEqual("9");
  });

  it("displays correct difference when the equal button is pressed", () => {
    render(<App />);
    const displayElement = screen.getByTestId("display");
    const six = screen.getByTestId("six");
    const minus = screen.getByTestId("subtract");
    const three = screen.getByTestId("three");
    const equals = screen.getByTestId("equals");
    fireEvent.click(six);
    fireEvent.click(minus);
    fireEvent.click(three);
    fireEvent.click(equals);
    expect(displayElement.textContent).toEqual("3");
  });

  it("should allow user to perform operations on zero as first number", () => {
    render(<App />);
    const displayElement = screen.getByTestId("display");
    const zero = screen.getByTestId("zero");
    const multiply = screen.getByTestId("multiply");
    const plus = screen.getByTestId("add");
    const three = screen.getByTestId("three");
    const equals = screen.getByTestId("equals");

    fireEvent.click(zero);
    fireEvent.click(multiply);
    fireEvent.click(plus);
    fireEvent.click(three);
    fireEvent.click(equals);

    expect(displayElement.textContent).toEqual("3");
  });

  it("resets display to initial state when clear button is pressed", () => {
    render(<App />);
    const displayElement = screen.getByTestId("display");
    const clearButton = screen.getByTestId("clear");
    fireEvent.click(clearButton);
    expect(displayElement.textContent).toEqual("0");
  });
});
