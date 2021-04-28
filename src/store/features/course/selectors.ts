import { TLoadingStatus } from "../../../@types/statuses";
import { RootState } from "../../types";

const getCourseValue = (state: RootState): number => state.course.value;
const getCourseLoadingStatus = (state: RootState): TLoadingStatus =>
  state.course.status;

export const courseSelectors = { getCourseValue, getCourseLoadingStatus };
