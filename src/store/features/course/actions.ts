import { createAction } from "@reduxjs/toolkit";

const courseResetStatusAction = createAction<void, "course->RESET_STATUS">(
  "course->RESET_STATUS"
);

export const courseActions = {
  courseResetStatusAction,
};
