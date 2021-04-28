import { initialCourseState } from "../initialState";

export function fetchTodayCourseLoading<T = typeof initialCourseState>(
  state: T
): T {
  return {
    ...state,
    status: "loading",
  };
}
