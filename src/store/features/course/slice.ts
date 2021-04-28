import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCourse } from "../../../api";
import { initialCourseState } from "./initialState";
import { fetchTodayCourseFailure } from "./reducers/failure";
import { fetchTodayCoursePending } from "./reducers/pending";
import { fetchTodayCourseSuccess } from "./reducers/success";

export const fetchTodayCourse = createAsyncThunk(
  "course/fetchCourse",
  async () => {
    const response = await fetchCourse();
    return response.course;
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: initialCourseState,
  reducers: {},
  extraReducers: {
    [fetchTodayCourse.pending.toString()]: fetchTodayCoursePending,
    [fetchTodayCourse.fulfilled.toString()]: fetchTodayCourseSuccess,
    [fetchTodayCourse.rejected.toString()]: fetchTodayCourseFailure,
  },
});

export default courseSlice.reducer;
