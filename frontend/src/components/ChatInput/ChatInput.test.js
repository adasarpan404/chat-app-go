import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for additional matchers
import ChatInput from "./ChatInput";

describe("ChatInput Component", () => {
  it("renders ChatInput correctly", () => {
    render(<ChatInput send={() => {}} />);

    // Expect the placeholder text to be rendered
    expect(
      screen.getByPlaceholderText("Type a message... Hit Enter to Send")
    ).toBeInTheDocument();
  });

  it("handles input change correctly", () => {
    render(<ChatInput send={() => {}} />);

    const inputElement = screen.getByPlaceholderText(
      "Type a message... Hit Enter to Send"
    );
    fireEvent.change(inputElement, { target: { value: "Test Message" } });

    // Expect the input value to be updated
    expect(inputElement.value).toBe("Test Message");
  });

  it("calls send function on Enter key press", () => {
    const sendMock = jest.fn();
    render(<ChatInput send={sendMock} />);

    const inputElement = screen.getByPlaceholderText(
      "Type a message... Hit Enter to Send"
    );
    fireEvent.change(inputElement, { target: { value: "Test Message" } });

    // Simulate Enter key press
    fireEvent.keyDown(inputElement, { key: "Enter", keyCode: 13 });

    // Expect the send function to be called with the correct argument
    expect(sendMock).toHaveBeenCalledWith(expect.anything());
    // Expect the input value to be cleared
    expect(inputElement.value).toBe("");
  });
});
