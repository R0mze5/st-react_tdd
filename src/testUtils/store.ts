import { TLoadingStatus } from "../@types/statuses";
import { initialCourseState } from "../store/features/course";

export const loadingCourseState = {
  ...initialCourseState,
  status: "loading" as TLoadingStatus,
};

export const failureCourseState = {
  ...initialCourseState,
  status: "failure" as TLoadingStatus,
};
