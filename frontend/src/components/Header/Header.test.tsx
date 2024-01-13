import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header Component', () => {
    it('renders the header text correctly', () => {
        // Render the Header component
        render(<Header />);

        // Assert that the header text is rendered correctly using screen.getByText
        expect(screen.getByText('Go + React Socket Chat')).toBeInTheDocument();
    });
});
