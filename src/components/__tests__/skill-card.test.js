/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SkillCard from "../what-i-do/skill-card";

describe("Skill card", () => {
  it("children renders", () => {
    render(
      <SkillCard id="test" icon="design" skill="UI design">
        Skills content
      </SkillCard>
    );

    expect(screen.getByText("Skills content")).toBeInTheDocument();
  });

  it("skill title renders", () => {
    render(
      <SkillCard id="test" icon="design" skill="UI design">
        Skills content
      </SkillCard>
    );

    expect(screen.getByText("UI design")).toBeInTheDocument();
  });
});

describe("Icon", () => {
  it("renders correct icon for code", () => {
    render(
      <SkillCard id="test" icon="code" skill="UI design">
        Code skill
      </SkillCard>
    );

    expect(screen.getByTestId("code-icon")).toBeInTheDocument();
  });

  it("renders correct icon for design", () => {
    render(
      <SkillCard id="test" icon="design" skill="UI design">
        Code skill
      </SkillCard>
    );

    expect(screen.getByTestId("design-icon")).toBeInTheDocument();
  });

  it("renders no icon if supplied something odd", () => {
    render(
      <SkillCard id="test" icon="crazy" skill="UI design">
        Code skill
      </SkillCard>
    );

    expect(screen.queryByTestId("design-icon")).toBeNull();
    expect(screen.queryByTestId("code-icon")).toBeNull();
  });
});
