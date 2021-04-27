import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import course from "./features/course/slice";

export const store = configureStore({
  reducer: {
    course,
  },
});
