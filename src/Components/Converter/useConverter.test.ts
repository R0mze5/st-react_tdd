import { renderHook } from "@testing-library/react-hooks";
import { useConverter } from "./useConverter";

const course = 42;
const testRubAmount = 100;
const calculatedUsdAmount = 2.38;

describe("when rendered", () => {
  it("Rub value should be equal to initial Rub amount", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    expect(result.current.rub).toEqual(testRubAmount);
  });
  it("Usd input should be equal to calculated Usd amount", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    expect(result.current.usd).toEqual(calculatedUsdAmount);
  });
});

describe("when call an 'updateRub' method", () => {
  it.todo("should update the Rub value");
  it.todo("should recalculate the Usd value");
});

describe("when call an 'updateUsd' method", () => {
  it.todo("should update the Usd value");
  it.todo("should recalculate the Rub value");
});

describe("when re-render", () => {
  it.todo("should update its values");
});
