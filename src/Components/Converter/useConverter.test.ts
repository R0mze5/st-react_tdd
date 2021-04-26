import { act, renderHook } from "@testing-library/react-hooks";
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
  it("should update the Rub value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      //  When testing, code that causes React state updates should be wrapped into act
      result.current.updateRub(10);
    });

    expect(result.current.rub).toEqual(10);
  });
  it("should recalculate the Usd value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      //  When testing, code that causes React state updates should be wrapped into act
      result.current.updateRub(10);
    });

    expect(result.current.usd).toEqual(0.24);
  });
});

describe("when call an 'updateUsd' method", () => {
  it("should update the Usd value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      //  When testing, code that causes React state updates should be wrapped into act
      result.current.updateUsd(10);
    });

    expect(result.current.usd).toEqual(10);
  });
  it("should recalculate the Rub value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      //  When testing, code that causes React state updates should be wrapped into act
      result.current.updateUsd(10);
    });

    expect(result.current.rub).toEqual(420);
  });
});

describe("when re-render", () => {
  it.todo("should update its values");
});
