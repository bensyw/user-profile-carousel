import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { ProfileCarousel } from './ProfileCarousel';

test('display only one active user profile', async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/users');
    const userData = result.data;
    const current = 0;
    render(<ProfileCarousel userData={userData} current={current} />);
    expect(screen.queryAllByText(/User Profile/i)).toHaveLength(1);
})