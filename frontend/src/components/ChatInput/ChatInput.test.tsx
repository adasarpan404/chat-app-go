import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatInput from './ChatInput';

describe('ChatInput Component', () => {
    it('calls send function on Enter key press and clears input', async () => {
        // Mock send function
        const mockSend = jest.fn();

        // Render the ChatInput component with the mock send function
        render(<ChatInput send={mockSend} />);

        // Get the input element using placeholder text directly from screen
        const inputElement = screen.getByPlaceholderText('Type a message... Hit Enter to Send');

        // Simulate typing in the input
        fireEvent.change(inputElement, { target: { value: 'Test message' } });

        // Simulate pressing Enter key
        fireEvent.keyDown(inputElement, { keyCode: 13 });

        // Wait for the asynchronous operations (if any) to complete
        await waitFor(() => {
            // Assert that the mock send function was called with the correct parameter
            expect(mockSend).toHaveBeenCalledWith(expect.objectContaining({ keyCode: 13 }));
        });

        // Assert that the input value is cleared outside of waitFor
        expect(inputElement).toHaveValue('');
    });
});
