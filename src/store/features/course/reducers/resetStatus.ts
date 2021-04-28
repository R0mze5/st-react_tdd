import { initialCourseState } from "../initialState";

export function fetchTodayCourseResetStatus<T = typeof initialCourseState>(
  state: T
): T {
  return {
    ...state,
    status: initialCourseState.status,
  };
}
