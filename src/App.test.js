import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component has all button elements", () => {
  it('should contain an "=" button with an id="equals"', () => {
    const { getByTestId } = render(<App />);
    const equalsButton = getByTestId("equals");
    expect(equalsButton).toBeInTheDocument();
  });

  it("should contain 10 number buttons with the corresponding IDs", () => {
    const { getByTestId } = render(<App />);
    const zero = getByTestId("zero");
    const one = getByTestId("one");
    const two = getByTestId("two");
    const three = getByTestId("three");
    const four = getByTestId("four");
    const five = getByTestId("five");
    const six = getByTestId("six");
    const seven = getByTestId("seven");
    const eight = getByTestId("eight");
    const nine = getByTestId("nine");
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
    const { getByTestId } = render(<App />);
    const add = getByTestId("add");
    const subtract = getByTestId("subtract");
    const multiply = getByTestId("multiply");
    const divide = getByTestId("divide");
    expect(add).toBeInTheDocument();
    expect(subtract).toBeInTheDocument();
    expect(multiply).toBeInTheDocument();
    expect(divide).toBeInTheDocument();
  });

  it('should contain a "." button with an id="decimal"', () => {
    const { getByTestId } = render(<App />);
    const decimalButton = getByTestId("decimal");
    expect(decimalButton).toBeInTheDocument();
  });

  it('should contain a "clear" button with an id="clear"', () => {
    const { getByTestId } = render(<App />);
    const clearButton = getByTestId("clear");
    expect(clearButton).toBeInTheDocument();
  });

  it("should contain a a text element to display values", () => {
    const { getByTestId } = render(<App />);
    const display = getByTestId("display");
    expect(display).toBeInTheDocument();
  });
});

test("Clear button should reset calculator to initial state", () => {
  const { getByTestId } = render(<App />);
  const displayElement = getByTestId("display");
  const clearButton = getByTestId("clear");
  fireEvent.click(clearButton);
  expect(displayElement.textContent).toEqual("0");
});

describe("display element should display user input as it is entered", () => {
  it("should display the first nuber entered", () => {
    const { getByTestId } = render(<App />);
    const displayElement = getByTestId("display");
    const six = getByTestId("six");
    fireEvent.click(six);
    fireEvent.click(six);
    fireEvent.click(six);
    expect(displayElement.textContent).toEqual("666");
  });

  it("should display the operator when pressed", () => {
    const { getByTestId } = render(<App />);
    const displayElement = getByTestId("display");
    const six = getByTestId("six");
    const plus = getByTestId("add");
    fireEvent.click(six);
    fireEvent.click(plus);
    expect(displayElement.textContent).toEqual("+");
  });

  it("should display the second number when entered", () => {
    const { getByTestId } = render(<App />);
    const displayElement = getByTestId("display");
    const six = getByTestId("six");
    const plus = getByTestId("add");
    const three = getByTestId("three");
    fireEvent.click(six);
    fireEvent.click(plus);
    fireEvent.click(three);
    expect(displayElement.textContent).toEqual("+3");
  });
});

test("the correct answer should be displayed when the equal button is pressed", () => {
  const { getByTestId } = render(<App />);
  const displayElement = getByTestId("display");
  const six = getByTestId("six");
  const plus = getByTestId("add");
  const three = getByTestId("three");
  const equals = getByTestId("equals");
  fireEvent.click(six);
  fireEvent.click(plus);
  fireEvent.click(three);
  fireEvent.click(equals);
  expect(displayElement.textContent).toEqual("9");
});
