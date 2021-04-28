import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithStore } from "../../testUtils";
import { failureCourseState, loadingCourseState } from "../../testUtils/store";
import { RefreshCourse } from "./RefreshCourse";

describe("when the button in default state", () => {
  it("it should contain the default text", () => {
    renderWithStore(<RefreshCourse />);
    expect(screen.getByText(/refresh course/)).toBeInTheDocument();
  });
});

describe("when the button is in the loading state", () => {
  it("should contain the corresponding text", () => {
    renderWithStore(<RefreshCourse />, {
      state: { course: loadingCourseState },
    });

    expect(screen.getByText(/refreshing.../)).toBeInTheDocument();
  });
});

describe("when the button in the error state", () => {
  it("should contain the error message", () => {
    renderWithStore(<RefreshCourse />, {
      state: { course: failureCourseState },
    });

    expect(screen.queryByText(/something went wrong/)).toBeInTheDocument();
  });
});

describe("when the button not in the error state", () => {
  it("should not contain the error message", () => {
    renderWithStore(<RefreshCourse />);

    expect(screen.queryByText(/something went wrong/)).not.toBeInTheDocument();
  });
});

describe("when the button is clicked", () => {
  it("should called the required action", () => {
    const dispatchMock = jest.fn();

    renderWithStore(<RefreshCourse />, { dispatch: dispatchMock });

    userEvent.click(screen.getByRole("button"));

    expect(dispatchMock).toHaveBeenCalled();
  });
});
