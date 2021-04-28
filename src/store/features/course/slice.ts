import { createSlice } from "@reduxjs/toolkit";
import { fetchTodayCourse } from "./asyncActions";
import { initialCourseState } from "./initialState";
import { fetchTodayCourseFailure } from "./reducers/failure";
import { fetchTodayCourseLoading } from "./reducers/loading";
import { fetchTodayCourseSuccess } from "./reducers/success";
import { fetchTodayCourseResetStatus } from "./reducers/resetStatus";

import { courseActions } from "./actions";

const courseSlice = createSlice({
  name: "course",
  initialState: initialCourseState,
  reducers: {
    [courseActions.courseResetStatusAction.toString()]: fetchTodayCourseResetStatus,
  },
  extraReducers: {
    [fetchTodayCourse.pending.toString()]: fetchTodayCourseLoading,
    [fetchTodayCourse.fulfilled.toString()]: fetchTodayCourseSuccess,
    [fetchTodayCourse.rejected.toString()]: fetchTodayCourseFailure,
  },
});

export default courseSlice.reducer;
