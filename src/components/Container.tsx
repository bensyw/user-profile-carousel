import axios from 'axios';
import { UserProfile } from "./UserProfile";
import { ProfileStepper } from "./ProfileStepper"
import User from '../types/User';
import React, { useState, useEffect } from 'react';

export const Container: React.FunctionComponent = () => {

    const [user, setUser] = useState<User[]>([]);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/users');
            setUser(result.data);
            setIsLoading(false);
        }
        fetchUser();
    }, []);

    const handleNextOnClick = () => {
        const newIndex = index + 1;
        setIndex(newIndex);
    }

    const handleBackOnClick = () => {
        const newIndex = index - 1;
        setIndex(newIndex);
    }

    return (
        <div>
            {isLoading ? null : <UserProfile user={user[index]} />}
            <ProfileStepper handleNextOnClick={handleNextOnClick} handleBackOnClick={handleBackOnClick} steps={user.length} activeStep={index} />
        </div>
    )
}