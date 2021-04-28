import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithStore } from "../../testUtils";
import { Converter } from "./Converter";

const mockUpdateRub = jest.fn();
const mockUpdateUsd = jest.fn();
const mockInitialRender = jest.fn();

jest.mock("./useConverter", () => ({
  useConverter() {
    return {
      rub: 100,
      usd: 2.38,
      updateRub: mockUpdateRub,
      updateUsd: mockUpdateUsd,
    };
  },
}));

function useConverterMock(_initialValue: number, initialCourse: number) {
  mockInitialRender(initialCourse);
  return {
    rub: 100,
    usd: 2.38,
    updateRub: mockUpdateRub,
    updateUsd: mockUpdateUsd,
  };
}

beforeEach(() => jest.clearAllMocks());
afterAll(() => jest.resetAllMocks());

describe("when rendered", () => {
  it("rub input should have a value with a rub amount", () => {
    renderWithStore(<Converter />);
    expect(screen.getByLabelText(/Sum in rubbles/)).toHaveValue(100);
  });

  it("usd input should have a value with a usd amount", () => {
    renderWithStore(<Converter />);
    expect(screen.getByLabelText(/Sum in dollars/)).toHaveValue(2.38);
  });

  it("should call 'useConverter hook with value from the store", () => {
    const stateMock = { course: { value: 521, status: null } };

    renderWithStore(<Converter useConverter={useConverterMock} />, {
      state: stateMock,
    });
    expect(mockInitialRender).toHaveBeenCalledWith(521);
  });
});

describe("when rendered with converterHook", () => {
  it("rub input should have a value with a rub amount", () => {
    renderWithStore(<Converter useConverter={useConverterMock} />);
    expect(screen.getByLabelText(/Sum in rubbles/)).toHaveValue(100);
  });

  it("usd input should have a value with a usd amount", () => {
    renderWithStore(<Converter useConverter={useConverterMock} />);
    expect(screen.getByLabelText(/Sum in dollars/)).toHaveValue(2.38);
  });
});

describe("when typed in a RUB input", () => {
  it("should update its value", () => {
    renderWithStore(<Converter />);
    const input = screen.getByLabelText(/Sum in rubbles/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(mockUpdateRub).toHaveBeenCalledWith("42");
  });
});

describe("when typed in a USD input", () => {
  it("should update its value", () => {
    renderWithStore(<Converter />);
    const input = screen.getByLabelText(/Sum in dollars/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(mockUpdateUsd).toHaveBeenCalledWith("42");
  });
});
