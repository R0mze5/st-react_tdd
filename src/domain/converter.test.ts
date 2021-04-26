import { rubToUsd, usdToRub } from "./converter";

describe("when converting rub to usd", () => {
  it("should return a correct return value", () => {
    const result = rubToUsd(10, 50);
    expect(result).toEqual(0.2);
  });
});

describe("when converting usd to rub ", () => {
  it("should return a correct return value", () => {
    const testCases = [
      { usd: 10, course: 10, rub: 100 },
      { usd: 10, course: 1.5, rub: 15 },
      { usd: 10, course: 3.141, rub: 31.41 },
    ];

    testCases.forEach(({ usd, course, rub }) => {
      const result = usdToRub(usd, course);
      expect(result).toEqual(rub);
    });
  });
});
