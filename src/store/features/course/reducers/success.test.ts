import { fetchTodayCourseSuccess } from "./success";
import { initialCourseState } from "../initialState";

const testAction = { type: "", payload: 42 };

describe("when called with payload", () => {
  it("should return a state with the success status and updated value", () => {
    const result = fetchTodayCourseSuccess(initialCourseState, testAction);

    expect(result).toEqual({
      ...initialCourseState,
      status: "success",
      value: 42,
    });
  });
});
