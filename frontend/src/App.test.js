import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for additional matchers

import App from "./App";
import * as api from "./api"; // Import the api module for mocking

// Mock the api module
jest.mock("./api", () => ({
  connect: jest.fn(),
  sendMsg: jest.fn(),
}));

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("connects to the server on mount", () => {
    render(<App />);
    expect(api.connect).toHaveBeenCalled();
  });

  it("sends a message when the Enter key is pressed", async () => {
    render(<App />);

    // Mock the connect function to provide the expected message
    api.connect.mockImplementation((callback) => {
      callback({ data: "Test Message" });
    });

    // Mock the sendMsg function
    api.sendMsg.mockImplementation(() => {});

    const inputElement = screen.getByPlaceholderText(
      "Type a message... Hit Enter to Send"
    );
    fireEvent.change(inputElement, { target: { value: "Test Message" } });

    // Simulate Enter key press
    fireEvent.keyDown(inputElement, { key: "Enter", keyCode: 13 });

    // Wait for the asynchronous operations to complete
    await waitFor(() => {
      // Expect the sendMsg function to be called with the correct argument
      expect(api.sendMsg).toHaveBeenCalledWith("Test Message");
    });

    // Additional assertions after the first waitFor block
    await waitFor(() => {
      // Expect the input value to be cleared
      expect(inputElement.value).toBe("");
      // Add more assertions if needed
    });
  });
});
