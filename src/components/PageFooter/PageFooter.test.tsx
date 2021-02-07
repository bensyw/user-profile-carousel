import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageFooter } from './PageFooter';

test('should display curernt page number', () => {
    render(<PageFooter current={0} length={10} />);
    expect(screen.getByText('1 / 10')).toBeInTheDocument();
});
