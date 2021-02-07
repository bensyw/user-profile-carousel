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
    const { name, username, email, address, phone, website, company } = user;
    const { suite, street, city, zipcode } = address;
    const { name: companyName, catchPhrase, bs } = company;
    return (
        <>
            <b>User Profile</b>
            <ul>
                <li> <b>Name: </b> {name} </li>
                <li> <b>Username: </b> {username} </li>
                <li> <b>Email: </b> {email} </li>
                <li> <b>Address: </b>
                    {`
                        ${suite}, 
                        ${street}, 
                        ${city}, 
                        ${zipcode}
                        `} </li>
                <li> <b>Phone: </b> {phone} </li>
                <li> <b>Website: </b> {website} </li>
                <li> <b>Company: </b> </li>
                <ul>
                    <li> <b>Name: </b> {companyName} </li>
                    <li> <b>Catch Phrase: </b> {catchPhrase} </li>
                    <li> <b>Buzzword: </b> {bs} </li>
                </ul>
            </ul>
        </>
    );
};