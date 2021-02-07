import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProfileStepper } from './ProfileStepper';
import user from '@testing-library/user-event'

test('should display only next button for the first user profile', () => {
    const handleNextOnClick = jest.fn();
    const handleBackOnClick = jest.fn();
    const current = 0;
    const length = 10;
    render(<ProfileStepper
        handleBackOnClick={handleBackOnClick}
        handleNextOnClick={handleNextOnClick}
        current={current}
        length={length}
    />);
    expect(screen.queryByTestId('next-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('back-btn')).not.toBeInTheDocument();
})

test('should display only back button for the last user profile', () => {
    const handleNextOnClick = jest.fn();
    const handleBackOnClick = jest.fn();
    const current = 9;
    const length = 10;
    render(<ProfileStepper
        handleBackOnClick={handleBackOnClick}
        handleNextOnClick={handleNextOnClick}
        current={current}
        length={length}
    />);
    expect(screen.queryByTestId('next-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('back-btn')).toBeInTheDocument();
})

test('should display both back and next buttons for user profiles from second to second last', () => {
    const handleNextOnClick = jest.fn();
    const handleBackOnClick = jest.fn();
    const current = 5;
    const length = 10;
    render(<ProfileStepper
        handleBackOnClick={handleBackOnClick}
        handleNextOnClick={handleNextOnClick}
        current={current}
        length={length}
    />);
    expect(screen.queryByTestId('next-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('back-btn')).toBeInTheDocument();
})

test('calls handleNextOnClick', () => {
    const handleNextOnClick = jest.fn();
    const handleBackOnClick = jest.fn();
    const current = 5;
    const length = 10;
    render(<ProfileStepper
        handleBackOnClick={handleBackOnClick}
        handleNextOnClick={handleNextOnClick}
        current={current}
        length={length}
    />);
    const nextButton = screen.getByTestId('next-btn').querySelector('button');
    nextButton && user.click(nextButton);
    expect(handleNextOnClick).toBeCalled();
})

test('calls handleBackOnClick', () => {
    const handleNextOnClick = jest.fn();
    const handleBackOnClick = jest.fn();
    const current = 5;
    const length = 10;
    render(<ProfileStepper
        handleBackOnClick={handleBackOnClick}
        handleNextOnClick={handleNextOnClick}
        current={current}
        length={length}
    />);
    const backButton = screen.getByTestId('back-btn').querySelector('button');
    backButton && user.click(backButton);
    expect(handleBackOnClick).toBeCalled();
})