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

    const [userData, setUserData] = useState<User[]>([]);
    const [current, setCurrent] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/users');
            setUserData(result.data);
            setIsLoading(false);
        }
        fetchUser();
    }, []);

    const handleNextOnClick = () => {
        const newCurrent = current + 1;
        setCurrent(newCurrent);
    }

    const handleBackOnClick = () => {
        const newCurrent = current - 1;
        setCurrent(newCurrent);
    }

    return (
        <div>
            {isLoading ? null : (
                userData.map((user, index) => {
                    return (
                        <div className={index === current ? 'user active' : 'user'} key={user.id}>
                            {index === current && (<UserProfile user={user} />)}
                        </div>
                    )
                })
            )}
            <ProfileStepper handleNextOnClick={handleNextOnClick} handleBackOnClick={handleBackOnClick} steps={userData.length} activeStep={current} />
            <div style={stepperStyle}>{`${current + 1} / ${userData.length}`}</div>
        </div>
    )
}