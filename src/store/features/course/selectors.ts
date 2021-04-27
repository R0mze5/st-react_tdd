import { RootState } from "../../types";

export const selectorCourse = (state: RootState): number => state.course.value;
