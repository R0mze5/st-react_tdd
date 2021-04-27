import { render, RenderResult } from "@testing-library/react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";

import course, { initialCourseState } from "../store/features/course/slice";

const reducer = combineReducers({
  course,
});

const originalState = {
  course: initialCourseState,
};

export function renderWithStore(
  ui: React.ReactElement,
  { state = originalState } = {}
): RenderResult {
  const middleware = applyMiddleware(thunk);
  const storeMock = createStore(reducer, state, middleware);

  return render(<Provider store={storeMock}>{ui}</Provider>);
}
