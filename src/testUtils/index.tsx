import { render, RenderResult } from "@testing-library/react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Dispatch,
} from "redux";

import course from "../store/features/course/slice";
import { initialCourseState } from "../store/features/course/initialState";
import { RootState } from "../store/types";

const reducer = combineReducers({
  course,
});

const originalState = {
  course: initialCourseState,
};

interface IRenderWithStoreOptions {
  state?: RootState;
  dispatch?: null | Dispatch;
}

export function renderWithStore(
  ui: React.ReactElement,
  { state = originalState, dispatch = null }: IRenderWithStoreOptions = {}
): RenderResult {
  const observer = () => (next: Dispatch) => (action: AnyAction) => {
    if (dispatch) {
      dispatch(action);
    }

    next(action);
  };
  const middleware = applyMiddleware(thunk, observer);
  const storeMock = createStore(reducer, state, middleware);

  return render(<Provider store={storeMock}>{ui}</Provider>);
}
