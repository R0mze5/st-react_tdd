import { fetchTodayCourseResetStatus } from "./resetStatus";
import { initialCourseState } from "../initialState";
import { loadingCourseState } from "../../../../testUtils/store";

describe("when called", () => {
  it("should return a state with the default status", () => {
    const result = fetchTodayCourseResetStatus(loadingCourseState);

    expect(result.status).toEqual(initialCourseState.status);
  });
});
