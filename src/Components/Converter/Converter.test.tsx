import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Converter } from "./Converter";

describe("when rendered", () => {
  it("rub input should have a value with a rub amount", () => {
    render(<Converter />);
    expect(screen.getByLabelText(/Sum in rubbles/)).toHaveValue(100);
  });

  it("usd input should have a value with a usd amount", () => {
    render(<Converter />);
    expect(screen.getByLabelText(/Sum in dollars/)).toHaveValue(1);
  });
});

describe("when typed in a RUB input", () => {
  it("should update its value", () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Sum in rubbles/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(input).toHaveValue(42);
  });
});

describe("when typed in a USD input", () => {
  it("should update its value", () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Sum in dollars/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(input).toHaveValue(42);
  });
});
