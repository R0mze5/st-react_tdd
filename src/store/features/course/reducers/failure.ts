import { initialCourseState } from "../initialState";

export function fetchTodayCourseFailure<T = typeof initialCourseState>(
  state: T
): T {
  return {
    ...state,
    status: "failure",
  };
}
