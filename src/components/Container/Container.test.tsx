import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Container } from './Container';

test('should not display anything except for header and loading text while loading', async () => {
    render(<Container />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.getByText(/Carousel/i)).toBeInTheDocument();
    expect(screen.queryByText(/User Profile/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/\d \/ \d/)).not.toBeInTheDocument();
    expect(screen.queryByTestId('next-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('back-btn')).not.toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
})

test('should not display loading text after loading is finished', async () => {
    render(<Container />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Carousel/i)).toBeInTheDocument();
    expect(screen.queryByText(/User Profile/i)).toBeInTheDocument();
    expect(screen.queryByText(/\d \/ \d/)).toBeInTheDocument();
})