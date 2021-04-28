import { AnyAction } from "redux";
import { initialCourseState } from "../initialState";

export function fetchTodayCourseSuccess<T = typeof initialCourseState>(
  state: T,
  action: AnyAction
): T {
  return {
    ...state,
    value: action.payload,
    status: "success",
  };
}
