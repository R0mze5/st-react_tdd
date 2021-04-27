import { selectRandomQuote } from "./selectRandomQuote";
import quotes from "./quotes.json";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.42);
});

afterEach(() => {
  jest.resetAllMocks();
  // jest.spyOn(global.Math, "random").mockRestore()
});

describe("when called with a qouted list", () => {
  it("should return the second (random) quote", () => {
    const result = selectRandomQuote(quotes);
    expect(result).toEqual(quotes[1]);
  });
});
