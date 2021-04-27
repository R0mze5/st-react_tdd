import { screen, render } from "@testing-library/react";
import { CurrentCourse } from "./CurrentCourse";

describe("when rendered with a course value", () => {
  it("shoul contain value in the body", () => {
    render(<CurrentCourse />);

    expect(screen.getByText(/10000Rub/)).toBeInTheDocument();
  });
});
