import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCourse } from "../../../api";

export const initialCourseState = {
  value: 42,
  status: null,
};

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
    [fetchTodayCourse.pending.toString()]: (state, action) => ({ ...state }),
    [fetchTodayCourse.fulfilled.toString()]: (state, action) => ({ ...state }),
    [fetchTodayCourse.rejected.toString()]: (state, action) => ({ ...state }),
  },
});

export default courseSlice.reducer;
