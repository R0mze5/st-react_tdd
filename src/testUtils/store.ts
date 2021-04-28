import { initialCourseState } from "../store/features/course";

export const loadingCourseState = {
  ...initialCourseState,
  status: "loading",
};
