import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
    it('renders correctly', () => {
        render(<Footer />);
        expect(screen.getByText(/footer/i)).toBeInTheDocument();
    });

    it('contains the correct links', () => {
        render(<Footer />);
        expect(screen.getByText(/home/i)).toHaveAttribute('href', '/');
        expect(screen.getByText(/about/i)).toHaveAttribute('href', '/about');
    });
});