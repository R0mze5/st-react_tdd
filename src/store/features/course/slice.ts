import { createSlice } from "@reduxjs/toolkit";
import { fetchTodayCourse } from "./asyncActions";
import { initialCourseState } from "./initialState";
import { fetchTodayCourseFailure } from "./reducers/failure";
import { fetchTodayCourseLoading } from "./reducers/loading";
import { fetchTodayCourseSuccess } from "./reducers/success";

const courseSlice = createSlice({
  name: "course",
  initialState: initialCourseState,
  reducers: {},
  extraReducers: {
    [fetchTodayCourse.pending.toString()]: fetchTodayCourseLoading,
    [fetchTodayCourse.fulfilled.toString()]: fetchTodayCourseSuccess,
    [fetchTodayCourse.rejected.toString()]: fetchTodayCourseFailure,
  },
});

export default courseSlice.reducer;
