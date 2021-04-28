import { fetchTodayCourseLoading } from "./loading";
import { initialCourseState } from "../initialState";
import { loadingCourseState } from "../../../../testUtils/store";

describe("when called", () => {
  it("should return a state with the loading status", () => {
    const result = fetchTodayCourseLoading(initialCourseState);

    expect(result).toEqual(loadingCourseState);
  });
});
