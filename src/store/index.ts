import { configureStore } from "@reduxjs/toolkit";
import course from "./features/course/slice";

export const store = configureStore({
  reducer: {
    course,
  },
});

export type RootState = ReturnType<typeof store.getState>;
