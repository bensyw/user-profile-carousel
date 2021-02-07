import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Container } from './Container';
import user from '@testing-library/user-event'

test('should not display anything except for header and loading text while loading', async () => {
    render(<Container />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.getByText(/CODER ONE/i)).toBeInTheDocument();
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
    expect(screen.queryByText(/CODER ONE/i)).toBeInTheDocument();
    expect(screen.queryByText(/User Profile/i)).toBeInTheDocument();
    expect(screen.queryByText(/\d \/ \d/)).toBeInTheDocument();
})

test('should not display back button when displaying the first user', async () => {
    render(<Container />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
    expect(screen.queryByTestId('next-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('back-btn')).not.toBeInTheDocument();
})

test('should not display next button when displaying the last user', async () => {
    render(<Container />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
    // Get total number of user profiles
    const pageFooter = screen.getByText(/\d \/ \d/);
    const pageFooterText = pageFooter?.innerHTML;
    const totalUser = +pageFooterText?.split(' / ').slice(-1)[0];
    // Find next button node
    expect(screen.queryByTestId('next-btn')).toBeInTheDocument();
    const nextButton = screen.getByTestId('next-btn').querySelector('button');
    // Click next button until it reaches the last user profile
    for (let currentUser = 1; currentUser < totalUser; currentUser++) {
        nextButton && user.click(nextButton);
        const newPageFooterText = `${currentUser + 1} / ${totalUser}`
        await waitFor(() => expect(screen.getByText(newPageFooterText)).toBeInTheDocument())
    }
    expect(screen.queryByTestId('next-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('back-btn')).toBeInTheDocument();
})

test('should increment the number by one upon click next, and decrement the number by one upon clicking back', async () => {
    render(<Container />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
    // Get total number of user profiles
    const pageFooter = screen.getByText(/\d \/ \d/);
    const pageFooterText = pageFooter?.innerHTML;
    const totalUser = +pageFooterText?.split(' / ').slice(-1)[0];
    // Find next button node
    expect(screen.queryByTestId('next-btn')).toBeInTheDocument();
    const nextButton = screen.getByTestId('next-btn').querySelector('button');
    // Click next button until it reaches the last user profile
    for (let currentUser = 1; currentUser < totalUser; currentUser++) {
        nextButton && user.click(nextButton);
        const newPageFooterText = `${currentUser + 1} / ${totalUser}`
        await waitFor(() => expect(screen.getByText(newPageFooterText)).toBeInTheDocument())
    }
    // Find the back button node
    expect(screen.queryByTestId('back-btn')).toBeInTheDocument();
    const backButton = screen.getByTestId('back-btn').querySelector('button');
    // Click back button until it reaches the first user profile
    for (let currentUser = totalUser; currentUser > 1; currentUser--) {
        backButton && user.click(backButton);
        const newPageFooterText = `${currentUser - 1} / ${totalUser}`
        await waitFor(() => expect(screen.getByText(newPageFooterText)).toBeInTheDocument())
    }
})