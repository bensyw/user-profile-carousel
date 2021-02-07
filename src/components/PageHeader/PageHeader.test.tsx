import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';

test('should display header text', () => {
    render(<PageHeader />);
    expect(screen.getByText(/CODER ONE/i)).toBeInTheDocument();
    expect(screen.getByText(/PROGRAMMING TASK/i)).toBeInTheDocument();
    expect(screen.getByText(/BUILD BY/i)).toBeInTheDocument();
    expect(screen.getByText(/Shengyu Wang/i)).toBeInTheDocument();
});

test('should navigate to github page when clicked', () => {
    render(<PageHeader />);
    expect(screen.getByText(/Shengyu Wang/i).closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/shengyu-benjamin-wang/')
});