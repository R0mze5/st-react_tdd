import { createAction } from "@reduxjs/toolkit";

const courseResetStatusAction = createAction<number, "course->RESET_STATUS">(
  "course->RESET_STATUS"
);

export const courseActions = {
  courseResetStatusAction,
};
