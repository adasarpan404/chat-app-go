import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for additional matchers
import Message from './Message';

describe('Message Component', () => {
    it('renders the message body correctly', () => {
        const mockMessage = '{"body": "Test Message"}';

        // Render the Message component with the mock message
        render(<Message message={mockMessage} />);

        // Assert that the message body is rendered correctly using screen.getByText
        expect(screen.getByText('Test Message')).toBeInTheDocument();
    });
});
