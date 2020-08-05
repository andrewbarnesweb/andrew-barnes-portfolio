/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BlogCard from "../blog/blog-card";

const data = {
  file: {
    childImageSharp: {
      fluid: {
        base64:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABJUlEQVQY02WQsWuDUBDG889KNsEMLkIWERyEiFOXjoKhpE2hglKkxSFDsClpk04m1saqiU2MIYlofC+9aHHpDcfj7vvdd/caGGNJktrtdpZl53+B0nypj4O+dXBW25Hz8/wBRYxw1W0ghARBoChKVVVd123bvrRx2cbY71vJm1tJk/evZLooR6JzKbjAnU4HYJIkCYLgOA4qlTqLdgtlAI/jYh0PZ/HLPPU3+9my3usCi6LYarUYhqFpmuf5PM9r82TsgvPeDoOHUWzNPWUQ3Fu7qZcG8R8MQLPZBGfILMsWRVHDp90xMibu9ZNzZfi3w+87C6bk28PRjVB2aoBI0zRZlrvdrqIopmn2er2bMsIgXD9OVsZk+/oJK6TeBg7BBaq+A9IvI9Yuo6O5tlMAAAAASUVORK5CYII=",
        aspectRatio: 3.324675324675325,
        src: "/static/a9b3b2dcbf32892cd7d542573b3386ec/a8378/bem-and-sass.png",
        srcSet:
          "/static/a9b3b2dcbf32892cd7d542573b3386ec/61fd6/bem-and-sass.png 256w,\n/static/a9b3b2dcbf32892cd7d542573b3386ec/bc59e/bem-and-sass.png 512w,\n/static/a9b3b2dcbf32892cd7d542573b3386ec/a8378/bem-and-sass.png 1024w,\n/static/a9b3b2dcbf32892cd7d542573b3386ec/12121/bem-and-sass.png 1120w",
        sizes: "(max-width: 1024px) 100vw, 1024px",
      },
    },
  },
};

describe("Skill card", () => {
  it("renders the title correctly", () => {
    render(
      <BlogCard
        title="Testing"
        date={new Date("2020-02-21")}
        link="https://medium.com/@andrew_barnes/website-update-part-2-the-design-d85b18c66470?source=friends_link&sk=661dbbbaab28cda70ae8d781b5d6ca28"
        image={data.file.childImageSharp.fluid}
      />
    );
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });

  it("renders the date correctly", () => {
    render(
      <BlogCard
        title="Testing"
        date={new Date("2020-02-21")}
        link="https://medium.com/@andrew_barnes/website-update-part-2-the-design-d85b18c66470?source=friends_link&sk=661dbbbaab28cda70ae8d781b5d6ca28"
        image={data.file.childImageSharp.fluid}
      />
    );
    expect(screen.getByText("21 Feb 2020")).toBeInTheDocument();
  });

  it("renders the link", () => {
    render(
      <BlogCard
        title="Testing"
        date={new Date("2020-02-21")}
        link="https://google.com"
        image={data.file.childImageSharp.fluid}
      />
    );
    expect(screen.getByTitle("Testing")).toHaveProperty("href", "https://google.com/");
  });
});
