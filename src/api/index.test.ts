import { fetchCourse } from "./index";

beforeEach(() => {
  const fakeFetch = jest.fn(() => {
    return { json: async () => "Test response" };
  });

  global.fetch = (fakeFetch as unknown) as typeof global.fetch;
});

afterEach(() => jest.resetAllMocks());

describe("when requested", () => {
  it("should called a required url", async () => {
    await fetchCourse();

    expect(global.fetch).toHaveBeenCalledWith("http://localhost:8080/course");
  });
  it("should return the json form response", async () => {
    const result = await fetchCourse();
    expect(result).toEqual("Test response");
  });
});
