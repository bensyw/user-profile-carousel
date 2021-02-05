import React from 'react'
import User from '../types/User'

interface UserProfileProps {
    user: User
}

export const UserProfile: React.FunctionComponent<UserProfileProps> = ({ user }) => {
    return (
        <div>
            {user &&
                <ul>
                    <li> {user.name} </li>
                    <li> {user.username} </li>
                    <li> {user.email} </li>
                    <li> {`
                        ${user.address.suite}, 
                        ${user.address.street}, 
                        ${user.address.city}, 
                        ${user.address.zipcode}
                        `} </li>
                    <li> {user.phone} </li>
                    <li> {user.website} </li>
                    <li> Company </li>
                    <ul>
                        <li> {user.company.name} </li>
                        <li> {user.company.catchPhrase} </li>
                        <li> {user.company.bs} </li>
                    </ul>
                </ul>
            }
        </div>
    )
}