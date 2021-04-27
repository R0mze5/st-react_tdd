import { createSlice } from "@reduxjs/toolkit";

export const initialCourseState = {
  value: 42,
};

const courseSlice = createSlice({
  name: "course",
  initialState: initialCourseState,
  reducers: {},
});

export default courseSlice.reducer;
