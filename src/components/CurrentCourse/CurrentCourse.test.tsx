import { screen } from "@testing-library/react";
import { renderWithStore } from "../../testUtils";
import { CurrentCourse } from "./CurrentCourse";

describe("when rendered with a course value", () => {
  it("shoul contain value in the body", () => {
    const stateMock = { course: { value: 10000 } };
    renderWithStore(<CurrentCourse />, { state: stateMock });

    expect(screen.getByText(/10000Rub/)).toBeInTheDocument();
  });
});
