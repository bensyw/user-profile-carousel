import React from 'react'
import User from '../types/User'

export default function UserProfile(props: { user: User }) {
    return (
        <div>
            {props.user &&
                <ul>
                    <li key={props.user.id}>
                        <p>{props.user.name}</p>
                        <p>{props.user.username}</p>
                        <p>{props.user.email}</p>
                    </li>
                </ul>
            }
        </div>
    )
}
