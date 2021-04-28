import { fetchTodayCoursePending } from "./pending";
import { initialCourseState } from "../initialState";

describe("when called", () => {
  it("should return a state with the loading status", () => {
    const result = fetchTodayCoursePending(initialCourseState);

    expect(result).toEqual({ ...initialCourseState, status: "loading" });
  });
});
