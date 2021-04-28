import { fetchTodayCourseFailure } from "./failure";
import { initialCourseState } from "../initialState";

describe("when called", () => {
  it("should return a state with the failure status", () => {
    const result = fetchTodayCourseFailure(initialCourseState);

    expect(result).toEqual({ ...initialCourseState, status: "failure" });
  });
});
