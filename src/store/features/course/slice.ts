import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../types";

export const initialCourseState = {
  value: 42,
};

const courseSlice = createSlice({
  name: "course",
  initialState: initialCourseState,
  reducers: {},
});

export const selectorCourse = (state: RootState): number => state.course.value;
export default courseSlice.reducer;
