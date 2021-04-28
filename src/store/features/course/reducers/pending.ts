import { initialCourseState } from "../initialState";

export function fetchTodayCoursePending<T = typeof initialCourseState>(
  state: T
): T {
  return {
    ...state,
    status: "loading",
  };
}
