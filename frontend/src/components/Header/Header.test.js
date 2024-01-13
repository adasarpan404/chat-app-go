import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for additional matchers
import Header from "./Header";

describe("Header Component", () => {
  it("renders the header correctly", () => {
    render(<Header />);

    // Expect the header text to be rendered
    expect(screen.getByText("Go + React Socket Chat")).toBeInTheDocument();
  });
});
