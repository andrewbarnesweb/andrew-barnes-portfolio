/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Progress from "../what-i-do/progress";

describe("Progress bar", () => {
  it("shows a full width progress bar", () => {
    render(<Progress initial="0%" actual="100%" start />);
    expect(screen.getByTestId("progress")).toHaveStyle("width: 100%;");
  });

  it("shows a half width progress bar", () => {
    render(<Progress initial="50%" actual="100%" start={false} />);
    expect(screen.getByTestId("progress")).toHaveStyle("width: 50%;");
  });
});
