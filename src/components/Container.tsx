import axios from 'axios'
import { UserProfile } from "./UserProfile";
import User from '../types/User'
import React, { useState, useEffect } from 'react'

export const Container: React.FunctionComponent = () => {

    const [user, setuser] = useState<User[]>([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/users');
            setuser(result.data);
            setIsLoading(false)
        }
        fetchUser();
    }, [])

    const handleNextOnClick = () => {
        const newIndex = index === user.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    }

    const handlePreviousOnClick = () => {
        const newIndex = index === 0 ? user.length - 1 : index - 1;
        setIndex(newIndex);
    }

    return (
        <div>
            <button type="button" onClick={handleNextOnClick}>Next</button>
            <button type="button" onClick={handlePreviousOnClick}>Previous</button>
            {isLoading ? null : <UserProfile user={user[index]} />}
        </div>
    )
}