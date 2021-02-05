import axios from 'axios';
import { UserProfile } from "./UserProfile";
import { ProfileStepper } from "./ProfileStepper"
import User from '../types/User';
import React, { useState, useEffect } from 'react';

const stepperStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "white",
    margin: "auto",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: " 0",
    right: " 0",
    width: "100px",
    height: "50px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};


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
            <div style={stepperStyle}>{`${index + 1} / ${user.length}`}</div>
        </div>
    )
}