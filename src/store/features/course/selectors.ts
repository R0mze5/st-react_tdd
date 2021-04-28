import { RootState } from "../../types";

const getCourseValue = (state: RootState): number => state.course.value;

export const courseSelectors = { getCourseValue };
