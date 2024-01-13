import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for additional matchers
import Message from "./Message";

describe("Message Component", () => {
  it("renders a message correctly", () => {
    const mockMessage = { body: "Test Message" };
    render(<Message message={JSON.stringify(mockMessage)} />);

    // Expect the message body to be rendered
    expect(screen.getByText("Test Message")).toBeInTheDocument();
  });
});
