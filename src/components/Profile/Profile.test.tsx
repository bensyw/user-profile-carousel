import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { Profile } from './Profile';

test('display user information', async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/users');
    const userData = result.data;
    const userToBeDisplayed = userData[0];
    render(<Profile user={userToBeDisplayed} />);
    expect(screen.getByText(userToBeDisplayed.name)).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.username)).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.email)).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.address.suite, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.address.street, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.address.city, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.address.zipcode, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.phone)).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.website)).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.company.name)).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.company.catchPhrase)).toBeInTheDocument();
    expect(screen.getByText(userToBeDisplayed.company.bs)).toBeInTheDocument();
})