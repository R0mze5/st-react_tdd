import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCourse } from "../../../api";

export const fetchTodayCourse = createAsyncThunk(
  "course/fetchCourse",
  async () => {
    const response = await fetchCourse();
    return response.course;
  }
);
