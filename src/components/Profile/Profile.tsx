import React from 'react';
import User from '../../types/User';
import './Profile.css'

interface ProfileProps {
    user: User
};

/**
 * Renders a single user profile
 */
export const Profile: React.FunctionComponent<ProfileProps> = ({ user }) => {
    return (
        <>
            <b>User Profile</b>
            <ul>
                <li> <b>Name: </b> {user.name} </li>
                <li> <b>Username: </b> {user.username} </li>
                <li> <b>Email: </b> {user.email} </li>
                <li> <b>Address: </b>
                    {`
                        ${user.address.suite}, 
                        ${user.address.street}, 
                        ${user.address.city}, 
                        ${user.address.zipcode}
                        `} </li>
                <li> <b>Phone: </b> {user.phone} </li>
                <li> <b>Website: </b> {user.website} </li>
                <li> <b>Company: </b> </li>
                <ul>
                    <li> <b>Name: </b> {user.company.name} </li>
                    <li> <b>Catch Phrase: </b> {user.company.catchPhrase} </li>
                    <li> <b>Buzzword: </b> {user.company.bs} </li>
                </ul>
            </ul>
        </>
    );
};